export const fmtFecha = () =>
  new Date().toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });

export const tipoL = (TIPOS) => (v) => TIPOS.find((t) => t.v === v)?.l || v;

export const estadoCls = (ESTADOS) => (v) =>
  ESTADOS.find((e) => e.v === v)?.cls || "bg-gray-100 text-gray-500";

export const estadoL = (ESTADOS) => (v) => ESTADOS.find((e) => e.v === v)?.l || v;

export const firma = `___________________________________
LIC. EDGAR JAIR MIRELES GONZALEZ
Cedula Profesional: 14924346 | TSJ-NL: 24499
ABOGADOS MIRELES GONZALEZ Y ASOCIADOS S.A.
Tel: 818.137.1871 / 811.639.1477`;

export const enc = (exp) => {
  switch (exp.tipo) {
    case "amparo_indirecto":
      return `C. JUEZ DE DISTRITO EN MATERIAS CIVILES Y DE TRABAJO
EN EL ESTADO DE NUEVO LEON
P  R  E  S  E  N  T  E`;
    case "amparo_directo":
      return `H. TRIBUNAL COLEGIADO EN MATERIAS CIVIL Y DE TRABAJO
DEL CUARTO CIRCUITO (EN TURNO)
P  R  E  S  E  N  T  E`;
    case "amparo_directo_penal":
      return `H. TRIBUNAL COLEGIADO EN MATERIA PENAL DEL CUARTO CIRCUITO
P  R  E  S  E  N  T  E`;
    case "amparo_directo_admin":
      return `H. TRIBUNAL COLEGIADO EN MATERIA ADMINISTRATIVA DEL CUARTO CIRCUITO
P  R  E  S  E  N  T  E`;
    case "amparo_revision_scjn":
      return `C. MINISTRO EN TURNO DE LA SUPREMA CORTE DE JUSTICIA
DE LA NACION
P  R  E  S  E  N  T  E`;
    case "laboral":
      return `C. PRESIDENTE DE LA JUNTA LOCAL DE CONCILIACION Y ARBITRAJE
EN EL ESTADO DE NUEVO LEON
P  R  E  S  E  N  T  E`;
    case "civil":
      return `C. JUEZ CIVIL DEL PRIMER DISTRITO JUDICIAL
EN EL ESTADO DE NUEVO LEON (EN TURNO)
P  R  E  S  E  N  T  E`;
    case "familiar":
      return `C. JUEZ DE LO FAMILIAR DEL PRIMER DISTRITO JUDICIAL
EN EL ESTADO DE NUEVO LEON (EN TURNO)
P  R  E  S  E  N  T  E`;
    case "tsjnl_sala":
      return `H. SALA CIVIL DEL
H. TRIBUNAL SUPERIOR DE JUSTICIA DEL
ESTADO DE NUEVO LEON
P  R  E  S  E  N  T  E`;
    default:
      return `${exp.juzgado || "AUTORIDAD COMPETENTE"}
P  R  E  S  E  N  T  E`;
  }
};

export const uid = () => Date.now().toString() + Math.random().toString(36).slice(2, 8);
