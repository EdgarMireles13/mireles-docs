import { describe, it, expect } from "vitest";
import { evaluar, aniosServicio, diasVacaciones, SALARIO_MINIMO_GENERAL } from "../src/legalos/engine.js";
import { getNorma, normasPorTema, casosQueInterpretan, relacionesDe, getEntidad } from "../src/legalos/knowledge.js";
import { REGLAS, EVENTOS } from "../src/legalos/rules.js";

const BASE = {
  salarioDiario: "500",
  fechaIngreso: "2020-01-01",
  fechaSalida: "2026-01-01",
};

describe("knowledge base", () => {
  it("resuelve normas por id", () => {
    const n = getNorma("norm:mx:lft:art48");
    expect(n).toBeTruthy();
    expect(n.title).toContain("48");
    expect(n.hierarchy.code).toBe("LFT");
  });

  it("consulta normas por tema", () => {
    const laborales = normasPorTema("despido");
    expect(laborales.length).toBeGreaterThan(0);
    expect(laborales.every((n) => n.topics.includes("despido"))).toBe(true);
  });

  it("encuentra jurisprudencia que interpreta una norma", () => {
    const casos = casosQueInterpretan("norm:mx:lft:art48");
    expect(casos.length).toBe(1);
    expect(casos[0].cita).toContain("13/2025");
  });

  it("expone relaciones del grafo", () => {
    const rels = relacionesDe("norm:mx:lft:art48");
    expect(rels.some((r) => r.relacion === "REGULATES")).toBe(true);
    expect(rels.some((r) => r.relacion === "INTERPRETS")).toBe(true);
  });

  it("resuelve conceptos", () => {
    const c = getEntidad("concept:despido_injustificado");
    expect(c.type).toBe("LegalConcept");
    expect(c.elements).toContain("ausencia_causa_justificada");
  });
});

describe("helpers de calculo", () => {
  it("calcula anios de servicio", () => {
    expect(aniosServicio("2020-01-01", "2026-01-01")).toBeCloseTo(6, 1);
    expect(aniosServicio("2026-01-01", "2020-01-01")).toBe(0);
    expect(aniosServicio("invalida", "2026-01-01")).toBe(0);
  });

  it("calcula dias de vacaciones (art. 76 LFT reformado)", () => {
    expect(diasVacaciones(0)).toBe(0);
    expect(diasVacaciones(1)).toBe(12);
    expect(diasVacaciones(2)).toBe(14);
    expect(diasVacaciones(5)).toBe(20);
    expect(diasVacaciones(6)).toBe(22);
    expect(diasVacaciones(10)).toBe(22);
    expect(diasVacaciones(11)).toBe(24);
  });
});

describe("motor de reglas - despido injustificado", () => {
  const res = evaluar({ ...BASE, evento: "despido", justificado: false });

  it("clasifica correctamente", () => {
    expect(res.ok).toBe(true);
    expect(res.clasificacion).toBe("despido_injustificado");
  });

  it("genera indemnizacion constitucional de 3 meses", () => {
    const ind = res.obligaciones.find((o) => o.id === "indemnizacion_constitucional");
    expect(ind.monto).toBe(45000); // 90 x 500
  });

  it("genera 20 dias por anio", () => {
    const veinte = res.obligaciones.find((o) => o.id === "veinte_dias_por_anio");
    expect(veinte.monto).toBeGreaterThan(59000); // ~20 x 500 x 6
    expect(veinte.monto).toBeLessThan(61000);
  });

  it("topa la prima de antiguedad al doble del salario minimo", () => {
    const prima = res.obligaciones.find((o) => o.id === "prima_antiguedad");
    // 500 < 2x SM, sin tope aplicado
    expect(prima.monto).toBeGreaterThan(0);
    const resAlto = evaluar({ ...BASE, salarioDiario: "5000", evento: "despido", justificado: false });
    const primaAlta = resAlto.obligaciones.find((o) => o.id === "prima_antiguedad");
    expect(primaAlta.formula).toContain(String(2 * SALARIO_MINIMO_GENERAL));
  });

  it("incluye salarios caidos sin monto (se cuantifican en ejecucion)", () => {
    const caidos = res.obligaciones.find((o) => o.id === "salarios_caidos");
    expect(caidos.monto).toBeNull();
  });

  it("fundamenta con normas y jurisprudencia", () => {
    expect(res.normas.map((n) => n.id)).toContain("norm:mx:lft:art48");
    expect(res.casos.some((c) => c.cita.includes("13/2025"))).toBe(true);
  });

  it("incluye justificacion explicable", () => {
    expect(res.justificacion[0].regla).toBe("despido_injustificado");
    expect(res.justificacion[0].normas).toContain("norm:mx:lft:art47");
  });
});

describe("motor de reglas - otros supuestos", () => {
  it("clasifica despido justificado sin indemnizacion", () => {
    const res = evaluar({ ...BASE, evento: "despido", justificado: true });
    expect(res.clasificacion).toBe("despido_justificado");
    expect(res.obligaciones.find((o) => o.id === "indemnizacion_constitucional")).toBeUndefined();
    expect(res.obligaciones.find((o) => o.id === "prima_antiguedad")).toBeTruthy();
  });

  it("clasifica rescision imputable al patron con indemnizacion", () => {
    const res = evaluar({ ...BASE, evento: "rescision_trabajador" });
    expect(res.clasificacion).toBe("rescision_imputable_patron");
    expect(res.obligaciones.find((o) => o.id === "indemnizacion_constitucional")).toBeTruthy();
    expect(res.normas.map((n) => n.id)).toContain("norm:mx:lft:art51");
  });

  it("renuncia con menos de 15 anios: sin prima de antiguedad", () => {
    const res = evaluar({ ...BASE, evento: "renuncia" });
    expect(res.clasificacion).toBe("renuncia_voluntaria");
    expect(res.obligaciones.find((o) => o.id === "prima_antiguedad_15_anios")).toBeUndefined();
  });

  it("renuncia con 15+ anios: procede prima de antiguedad", () => {
    const res = evaluar({
      evento: "renuncia",
      salarioDiario: "500",
      fechaIngreso: "2008-01-01",
      fechaSalida: "2026-01-01",
    });
    const prima = res.obligaciones.find((o) => o.id === "prima_antiguedad_15_anios");
    expect(prima).toBeTruthy();
    expect(prima.monto).toBeGreaterThan(0);
  });

  it("rechaza hechos incompletos", () => {
    expect(evaluar({}).ok).toBe(false);
    expect(evaluar({ evento: "despido" }).ok).toBe(false);
  });
});

describe("consistencia de reglas y catalogo", () => {
  it("todas las normas citadas por reglas existen en la base de conocimiento", () => {
    for (const r of REGLAS) {
      for (const id of r.then.normas) {
        expect(getNorma(id), `norma ${id} de regla ${r.id}`).toBeTruthy();
      }
    }
  });

  it("todos los eventos del catalogo tienen al menos una regla", () => {
    for (const ev of EVENTOS) {
      const hechos = { evento: ev.v, justificado: false };
      expect(REGLAS.some((r) => r.when(hechos)), `evento ${ev.v}`).toBe(true);
    }
  });
});
