import { enc, fmtFecha, firma } from "../utils/helpers.js";

export function genLibre(exp, f) {
  return `${enc(exp)}
EXPEDIENTE: ${exp.numero}
JUICIO: ${exp.tipo}

${f.promovente || exp.quejoso || "_______________"}, por conducto de su apoderado legal LIC. EDGAR JAIR MIRELES GONZALEZ, Cedula Profesional 14924346, Registro TSJ-NL 24499; senalando como domicilio procesal para oir y recibir notificaciones el ubicado en _______________; ante Usted comparezco y expongo:

HECHOS
${f.hechos || "1. [Primer hecho]\n\n2. [Segundo hecho]"}

DERECHO
${f.fundamentos || "[Fundamentos juridicos]"}

Por lo anteriormente expuesto y fundado, a Usted atentamente solicito:
${f.petitorios || "UNICO.- Tener por presentado el presente escrito y en su merito dar el tramite que en derecho corresponda."}

PROTESTO LO NECESARIO.
Monterrey, Nuevo Leon, a ${fmtFecha()}.

${firma}`;
}
