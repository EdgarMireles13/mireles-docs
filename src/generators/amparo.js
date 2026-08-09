import { enc, fmtFecha, firma } from "../utils/helpers.js";

export function genAmparoConceptos(exp, f) {
  return `${enc(exp)}
AMPARO INDIRECTO: ${exp.numero}
QUEJOSO: ${exp.quejoso || "_______________"}
AUTORIDAD RESPONSABLE: ${exp.autoridad || "_______________"}

LIC. EDGAR JAIR MIRELES GONZALEZ, en mi caracter de apoderado del quejoso, ante Usted comparezco y formulo los siguientes:

CONCEPTOS DE VIOLACION
PRIMERO. La autoridad responsable fractura el articulo ${f.art_violado || "14 y 16 Constitucionales"} al ${f.acto_reclamado || "[describir el acto reclamado]"}.

SUBSUNCION DOCTRINA · HECHOS · CONCLUSION
DOCTRINA: ${f.doctrina || "[Tesis/Jurisprudencia aplicable - rubro, numero, epoca, libro, fecha, pagina y registro]"}
HECHOS: ${f.hechos_conceptos || "[Hechos que actualizan la hipotesis normativa]"}
CONCLUSION: De la subsuncion que antecede resulta palmario que ${f.conclusion || "[conclusion del concepto de violacion]"}, por lo que el acto reclamado vulnera en perjuicio del quejoso los derechos fundamentales invocados; no cabe sino concluir que procede conceder el amparo y proteccion de la Justicia Federal solicitado.

${f.conceptos_adicionales ? `CONCEPTOS ADICIONALES\n\n${f.conceptos_adicionales}\n\n` : ""}
PETITORIOS
PRIMERO. Tener por formulados los presentes conceptos de violacion.
SEGUNDO. En su momento, conceder el amparo y proteccion de la Justicia Federal al quejoso ${exp.quejoso || "_______________"}.
${f.petitorios_adicionales || ""}

PROTESTO LO NECESARIO.
Monterrey, Nuevo Leon, a ${fmtFecha()}.

${firma}`;
}
