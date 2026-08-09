import { enc, fmtFecha, firma } from "../utils/helpers.js";

export function genLaboral(exp, f) {
  const salario = f.salario_diario ? `$${f.salario_diario} M.N. diarios` : "_______________";
  return `${enc(exp)}
EXPEDIENTE: ${exp.numero}

${f.actor || "_______________"}, por conducto de su apoderado legal LIC. EDGAR JAIR MIRELES GONZALEZ, Cedula Profesional 14924346, Registro TSJ-NL 24499, con domicilio procesal en _______________; ante Usted comparezco y en la VIA ORDINARIA LABORAL demando a ${f.demandado || "_______________"}, con domicilio en ${f.domicilio_demandado || "_______________"}, reclamando las siguientes:

PRESTACIONES
I. REINSTALACION en el puesto que ocupaba el actor con las mismas condiciones de trabajo; o en su caso, indemnizacion constitucional.
II. PAGO DE SALARIOS CAIDOS desde el ${f.fecha_despido || "_______________"} hasta la total ejecucion del laudo (Art. 48 LFT; P./J. 13/2025, 11a. Epoca).
III. PARTES PROPORCIONALES de aguinaldo, vacaciones y prima vacacional.
IV. INDEMNIZACION CONSTITUCIONAL (Art. 123-A-XXII CPEUM): 3 meses de salario.
V. 20 DIAS POR ANO de servicios prestados.
VI. PRIMA DE ANTIGUEDAD (Art. 162 LFT): 12 dias por ano.
${f.prestaciones ? `VII. ${f.prestaciones}` : "VII. Lo demas que resulte de la liquidacion."}

HECHOS
1. El actor ${f.actor || "_______________"} presto servicios personales subordinados para la demandada desde el dia ${f.fecha_ingreso || "_______________"}, percibiendo como ultimo salario diario integrado la cantidad de ${salario}.
2. Con fecha ${f.fecha_despido || "_______________"} la demandada rescindo injustificadamente la relacion laboral sin mediar causa legal alguna.
${f.hechos ? `3. ${f.hechos}` : ""}

DERECHO
Articulos 1°, 5°, 123-A Constitucionales; 2°, 25, 47, 48, 50, 51, 80, 84, 87, 162, 784 y demas relativos de la Ley Federal del Trabajo (Reforma integral 15 enero 2026); Jurisprudencia P./J. 13/2025 (11a. Epoca) - salarios caidos en reinstalacion.

PRUEBAS
${f.pruebas || `I. CONFESIONAL a cargo de la demandada, por conducto de su representante legal.
II. DOCUMENTAL consistente en recibos de nomina y constancia de antiguedad.
III. TESTIMONIAL a cargo de los testigos que se senalaran en el capitulo respectivo.
IV. PRESUNCIONAL LEGAL Y HUMANA.
V. INSTRUMENTAL DE ACTUACIONES.`}

Por lo anteriormente expuesto y fundado, a Usted atentamente solicito:

PETITORIOS
PRIMERO. Tener por presentada la demanda laboral en la via y forma propuestas.
SEGUNDO. En la audiencia de ley, condenar a la demandada al pago de todas y cada una de las prestaciones reclamadas con sus accesorios legales.
TERCERO. Condenar a la demandada al pago de gastos y costas.

PROTESTO LO NECESARIO.
Monterrey, Nuevo Leon, a ${fmtFecha()}.

${firma}`;
}
