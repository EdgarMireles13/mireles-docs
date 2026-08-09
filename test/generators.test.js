import { describe, it, expect } from "vitest";
import { genLibre, genAmparoConceptos, genQueja, genLaboral, generateDoc } from "../src/generators";
import { enc, fmtFecha, firma, uid } from "../src/utils/helpers";

describe("enc() - encabezados por tipo", () => {
  it("retorna encabezado de amparo indirecto", () => {
    expect(enc({ tipo: "amparo_indirecto" })).toContain("JUEZ DE DISTRITO");
  });
  it("retorna encabezado de amparo directo", () => {
    expect(enc({ tipo: "amparo_directo" })).toContain("TRIBUNAL COLEGIADO");
  });
  it("retorna encabezado laboral", () => {
    expect(enc({ tipo: "laboral" })).toContain("JUNTA LOCAL");
  });
  it("retorna encabezado civil", () => {
    expect(enc({ tipo: "civil" })).toContain("JUEZ CIVIL");
  });
  it("retorna encabezado familiar", () => {
    expect(enc({ tipo: "familiar" })).toContain("FAMILIAR");
  });
  it("usa fallback si el tipo no existe", () => {
    expect(enc({ tipo: "xyz", juzgado: "JUZGADO X" })).toContain("JUZGADO X");
  });
});

describe("genLibre()", () => {
  const expBase = { tipo: "libre", numero: "123/2026", quejoso: "Juan Perez" };
  const fields = {
    hechos: "1. Ocurrio el dia X\n2. Luego el dia Y",
    petitorios: "UNICO.- Se admita la demanda",
  };

  it("incluye el encabezado, quejoso y fundamentos", () => {
    const out = genLibre(expBase, fields);
    expect(out).toContain("123/2026");
    expect(out).toContain("Juan Perez");
    expect(out).toContain("Ocurrio el dia X");
  });

  it("incluye petitorios por defecto si no se pasan", () => {
    const out = genLibre(expBase, {});
    expect(out).toContain("UNICO.-");
  });

  it("incluye firma del licenciado", () => {
    const out = genLibre(expBase, {});
    expect(out).toContain("EDGAR JAIR MIRELES GONZALEZ");
    expect(out).toContain("14924346");
  });

  it("usa placeholder cuando no hay promovente", () => {
    const out = genLibre({ ...expBase, quejoso: "" }, {});
    expect(out).toContain("_______________");
  });
});

describe("genAmparoConceptos()", () => {
  const exp = { tipo: "amparo_indirecto", numero: "456/2026", quejoso: "ACME S.A." };
  const fields = {
    art_violado: "14 y 16 Constitucionales",
    doctrina: "Tesis 2a./J. 1/2024",
    conclusion: "procede el amparo",
  };

  it("incluye el tipo y numero de amparo", () => {
    const out = genAmparoConceptos(exp, fields);
    expect(out).toContain("AMPARO INDIRECTO: 456/2026");
    expect(out).toContain("ACME S.A.");
  });

  it("incluye conceptos de violacion", () => {
    const out = genAmparoConceptos(exp, fields);
    expect(out).toContain("CONCEPTOS DE VIOLACION");
    expect(out).toContain("PRIMERO");
  });

  it("incluye DOCTRINA, HECHOS, CONCLUSION", () => {
    const out = genAmparoConceptos(exp, fields);
    expect(out).toContain("DOCTRINA");
    expect(out).toContain("HECHOS");
    expect(out).toContain("CONCLUSION");
  });

  it("incluye conceptos adicionales si se pasan", () => {
    const out = genAmparoConceptos(exp, { ...fields, conceptos_adicionales: "SEGUNDO. Otro concepto." });
    expect(out).toContain("CONCEPTOS ADICIONALES");
    expect(out).toContain("Otro concepto");
  });

  it("omite conceptos adicionales si estan vacios", () => {
    const out = genAmparoConceptos(exp, fields);
    expect(out).not.toContain("CONCEPTOS ADICIONALES");
  });
});

describe("genQueja()", () => {
  const exp = { tipo: "queja", numero: "789/2026", quejoso: "Fulano" };
  const fields = {
    fecha_auto: "15 de marzo de 2026",
    art_fracturado: "97 frac. I inc. e)",
    agravio_1: "El auto carece de fundamentacion",
  };

  it("incluye datos del recurso", () => {
    const out = genQueja(exp, fields);
    expect(out).toContain("RECURSO DE QUEJA");
    expect(out).toContain("789/2026");
    expect(out).toContain("15 de marzo de 2026");
  });

  it("enumera los agravios", () => {
    const out = genQueja(exp, fields);
    expect(out).toContain("AGRAVIOS");
    expect(out).toContain("PRIMERO");
    expect(out).toContain("carece de fundamentacion");
  });

  it("incluye petitorios del recurso", () => {
    const out = genQueja(exp, fields);
    expect(out).toContain("PETITORIOS");
    expect(out).toContain("Revocar el auto");
  });
});

describe("genLaboral()", () => {
  const exp = { tipo: "laboral", numero: "321/2026" };
  const fields = {
    actor: "Juan Trabajador",
    demandado: "Empresa X S.A.",
    salario_diario: "450.00",
    fecha_ingreso: "01/01/2020",
    fecha_despido: "15/02/2026",
  };

  it("incluye prestaciones basicas", () => {
    const out = genLaboral(exp, fields);
    expect(out).toContain("REINSTALACION");
    expect(out).toContain("SALARIOS CAIDOS");
    expect(out).toContain("INDEMNIZACION CONSTITUCIONAL");
  });

  it("incluye datos del actor y demandado", () => {
    const out = genLaboral(exp, fields);
    expect(out).toContain("Juan Trabajador");
    expect(out).toContain("Empresa X S.A.");
    expect(out).toContain("450.00");
  });

  it("menciona la LFT y la Constitucion", () => {
    const out = genLaboral(exp, fields);
    expect(out).toContain("Ley Federal del Trabajo");
    expect(out).toContain("123");
  });

  it("incluye ofrecimiento de pruebas por defecto", () => {
    const out = genLaboral(exp, fields);
    expect(out).toContain("PRUEBAS");
    expect(out).toContain("CONFESIONAL");
  });
});

describe("generateDoc() router", () => {
  const exp = { tipo: "libre", numero: "1/2026", quejoso: "X" };

  it("rutea a genLibre", () => {
    expect(generateDoc("libre", exp, {})).toContain("_______________");
  });
  it("rutea a genAmparoConceptos", () => {
    expect(generateDoc("amparo_conceptos", exp, {})).toContain("CONCEPTOS DE VIOLACION");
  });
  it("rutea a genQueja", () => {
    expect(generateDoc("queja", exp, {})).toContain("RECURSO DE QUEJA");
  });
  it("rutea a genLaboral", () => {
    expect(generateDoc("laboral", exp, {})).toContain("REINSTALACION");
  });
  it("regresa vacio para pid desconocido", () => {
    expect(generateDoc("nope", exp, {})).toBe("");
  });
});

describe("helpers", () => {
  it("fmtFecha() regresa string con formato", () => {
    const s = fmtFecha();
    expect(typeof s).toBe("string");
    expect(s.length).toBeGreaterThan(5);
  });
  it("uid() genera strings unicos", () => {
    const a = uid();
    const b = uid();
    expect(a).not.toBe(b);
  });
  it("firma contiene datos del licenciado", () => {
    expect(firma).toContain("EDGAR JAIR MIRELES GONZALEZ");
    expect(firma).toContain("14924346");
  });
});
