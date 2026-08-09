import { enc, fmtFecha, firma } from "../utils/helpers.js";

export function genQueja(exp, f) {
  return `${enc(exp)}
RECURSO DE QUEJA
EXPEDIENTE: ${exp.numero}
QUEJOSO: ${exp.quejoso || "_______________"}

LIC. EDGAR JAIR MIRELES GONZALEZ, apoderado del quejoso, con fundamento en los articulos 97, fraccion I, inciso e), y 99 de la Ley de Amparo, interpongo RECURSO DE QUEJA contra el auto de fecha ${f.fecha_auto || "_______________"}, por los siguientes:

AGRAVIOS
PRIMERO. El auto recurrido fractura el articulo ${f.art_fracturado || "___"} de la Ley de Amparo en virtud de que ${f.agravio_1 || "[desarrollar primer agravio con metodo DOCTRINA·HECHOS·CONCLUSION]"}.

SEGUNDO. ${f.agravio_2 || "[Desarrollar segundo agravio]"}
${f.agravios_adicionales ? `${f.agravios_adicionales}\n` : ""}
PETITORIOS
PRIMERO. Tener por interpuesto en tiempo y forma el presente Recurso de Queja.
SEGUNDO. Revocar el auto de fecha ${f.fecha_auto || "_______________"} y en su lugar dictar el que en derecho corresponda.

PROTESTO LO NECESARIO.
Monterrey, Nuevo Leon, a ${fmtFecha()}.

${firma}`;
}
