import { describe, it, expect } from "vitest";
import { enc, fmtFecha, uid, firma } from "../src/utils/helpers";
import { formatearCita, validarCita, SALAS, EPOCAS } from "../src/utils/jurisprudencia";

describe("enc() - encabezados oficiales (Parte III 3.3)", () => {
  it("amparo indirecto usa CIVILES Y DE TRABAJO (no penal)", () => {
    const out = enc({ tipo: "amparo_indirecto" });
    expect(out).toContain("CIVILES Y DE TRABAJO");
    expect(out).not.toContain("PENAL");
    expect(out).toContain("P  R  E  S  E  N  T  E");
  });

  it("amparo directo civil/trabajo", () => {
    const out = enc({ tipo: "amparo_directo" });
    expect(out).toContain("CIVIL Y DE TRABAJO");
    expect(out).toContain("CUARTO CIRCUITO");
  });

  it("amparo directo penal", () => {
    const out = enc({ tipo: "amparo_directo_penal" });
    expect(out).toContain("MATERIA PENAL");
    expect(out).toContain("CUARTO CIRCUITO");
  });

  it("amparo directo administrativo", () => {
    const out = enc({ tipo: "amparo_directo_admin" });
    expect(out).toContain("MATERIA ADMINISTRATIVA");
    expect(out).toContain("CUARTO CIRCUITO");
  });

  it("amparo en revision ante SCJN", () => {
    const out = enc({ tipo: "amparo_revision_scjn" });
    expect(out).toContain("MINISTRO EN TURNO");
    expect(out).toContain("SUPREMA CORTE");
  });

  it("civil mantiene formato NL", () => {
    const out = enc({ tipo: "civil" });
    expect(out).toContain("JUEZ CIVIL");
    expect(out).toContain("NUEVO LEON");
  });

  it("familiar mantiene formato NL", () => {
    const out = enc({ tipo: "familiar" });
    expect(out).toContain("FAMILIAR");
    expect(out).toContain("NUEVO LEON");
  });

  it("laboral usa Junta Local", () => {
    const out = enc({ tipo: "laboral" });
    expect(out).toContain("JUNTA LOCAL");
  });

  it("tsjnl_sala usa SALA CIVIL", () => {
    const out = enc({ tipo: "tsjnl_sala" });
    expect(out).toContain("SALA CIVIL");
    expect(out).toContain("TRIBUNAL SUPERIOR");
  });

  it("default usa fallback", () => {
    const out = enc({ tipo: "xyz", juzgado: "AUTORIDAD X" });
    expect(out).toContain("AUTORIDAD X");
    expect(out).toContain("P  R  E  S  E  N  T  E");
  });
});

describe("formatearCita() - jurisprudencia mexicana (Parte IV 4.2)", () => {
  it("formatea cita completa de jurisprudencia", () => {
    const cita = formatearCita({
      tipo: "jurisprudencia",
      numero: "1a./J. 54/2016",
      epoca: "10a.",
      sala: "Primera Sala de la SCJN",
      libro: "33",
      mes: "agosto",
      anio: "2016",
      tomo: "II",
      materia: "Civil",
      pagina: "652",
      registro: "2012262"
    });
    expect(cita).toContain("Jurisprudencia 1a./J. 54/2016 (10a.)");
    expect(cita).toContain("Primera Sala de la SCJN");
    expect(cita).toContain("Libro 33");
    expect(cita).toContain("agosto de 2016");
    expect(cita).toContain("Tomo II");
    expect(cita).toContain("Materia Civil");
    expect(cita).toContain("pagina 652");
    expect(cita).toContain("Registro: 2012262");
  });

  it("formatea tesis aislada", () => {
    const cita = formatearCita({
      tipo: "tesis",
      numero: "I.3o.C.1121 C",
      epoca: "9a.",
      sala: "Tercer TCC en Materia Civil del Primer Circuito",
      tomo: "XXXIV",
      mes: "agosto",
      anio: "2011",
      materia: "Civil",
      pagina: "1891",
      registro: "161212"
    });
    expect(cita).toContain("Tesis aislada");
    expect(cita).toContain("I.3o.C.1121 C (9a.)");
  });

  it("maneja campos opcionales faltantes sin romper", () => {
    const cita = formatearCita({ tipo: "tesis", numero: "X", sala: "Y" });
    expect(cita).toContain("X");
    expect(cita).toContain("Y");
  });
});

describe("validarCita()", () => {
  it("detecta campos faltantes", () => {
    const r = validarCita({});
    expect(r.valida).toBe(false);
    expect(r.errores.length).toBeGreaterThan(0);
  });

  it("valida cuando estan los campos criticos", () => {
    const r = validarCita({
      numero: "1a./J. 54/2016",
      epoca: "10a.",
      sala: "1a.",
      pagina: "652",
      registro: "2012262"
    });
    expect(r.valida).toBe(true);
    expect(r.errores).toEqual([]);
  });
});

describe("SALAS y EPOCAS", () => {
  it("SALAS incluye Cuarto Circuito (NL)", () => {
    expect(SALAS.some(s => s.codigo === "IV.1o.C.")).toBe(true);
  });
  it("EPOCAS cubre 8a a 11a", () => {
    expect(EPOCAS.length).toBeGreaterThanOrEqual(4);
    expect(EPOCAS.some(e => e.codigo === "11a.")).toBe(true);
  });
});
