// LEGAL-OS · Base de conocimiento juridico estructurado
// Modelo canonico: LegalNorm, LegalCase, LegalConcept + relaciones tipo grafo.

export const NORMAS = [
  {
    id: "norm:mx:cpeum:art123-a-xxii",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "CPEUM",
    title: "Articulo 123, Apartado A, Fraccion XXII",
    text: "El patrono que despida a un obrero sin causa justificada estara obligado, a eleccion del trabajador, a cumplir el contrato o a indemnizarlo con el importe de tres meses de salario.",
    hierarchy: { code: "CPEUM", article: "123-A-XXII", nivel: 1 },
    topics: ["laboral", "despido", "indemnizacion"],
  },
  {
    id: "norm:mx:lft:art20",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulo 20",
    text: "Se entiende por relacion de trabajo, cualquiera que sea el acto que le de origen, la prestacion de un trabajo personal subordinado a una persona, mediante el pago de un salario.",
    hierarchy: { code: "LFT", article: "20", nivel: 3 },
    topics: ["laboral", "relacion_laboral"],
  },
  {
    id: "norm:mx:lft:art47",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulo 47",
    text: "Son causas de rescision de la relacion de trabajo, sin responsabilidad para el patron, las enumeradas en este articulo. El patron que despida a un trabajador debera darle aviso escrito de la fecha y causa o causas de la rescision.",
    hierarchy: { code: "LFT", article: "47", nivel: 3 },
    topics: ["laboral", "despido", "rescision"],
  },
  {
    id: "norm:mx:lft:art48",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulo 48",
    text: "El trabajador podra solicitar, a su eleccion, que se le reinstale en el trabajo que desempenaba, o que se le indemnice con el importe de tres meses de salario. Tendra derecho ademas al pago de los salarios vencidos computados desde la fecha del despido hasta por un periodo maximo de doce meses.",
    hierarchy: { code: "LFT", article: "48", nivel: 3 },
    topics: ["laboral", "despido", "indemnizacion", "salarios_caidos"],
  },
  {
    id: "norm:mx:lft:art50",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulo 50",
    text: "Las indemnizaciones incluyen, ademas de tres meses de salario, veinte dias de salario por cada uno de los anos de servicios prestados, tratandose de relaciones por tiempo indeterminado cuando el patron se niegue a reinstalar.",
    hierarchy: { code: "LFT", article: "50", nivel: 3 },
    topics: ["laboral", "indemnizacion"],
  },
  {
    id: "norm:mx:lft:art51",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulo 51",
    text: "Son causas de rescision de la relacion de trabajo, sin responsabilidad para el trabajador, entre otras, la falta de pago del salario, el engano del patron y los actos de violencia u hostigamiento.",
    hierarchy: { code: "LFT", article: "51", nivel: 3 },
    topics: ["laboral", "rescision"],
  },
  {
    id: "norm:mx:lft:art52",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulo 52",
    text: "El trabajador podra separarse de su trabajo dentro de los treinta dias siguientes a la fecha en que se de cualquiera de las causas del articulo 51 y tendra derecho a que el patron lo indemnice en los terminos del articulo 50.",
    hierarchy: { code: "LFT", article: "52", nivel: 3 },
    topics: ["laboral", "rescision", "indemnizacion"],
  },
  {
    id: "norm:mx:lft:art76",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulo 76 (vacaciones dignas)",
    text: "Los trabajadores con mas de un ano de servicios disfrutaran de un periodo anual de vacaciones pagadas que en ningun caso podra ser inferior a doce dias laborables, y que aumentara en dos dias laborables, hasta llegar a veinte, por cada ano subsecuente de servicios. A partir del sexto ano, el periodo aumentara en dos dias por cada cinco de servicios.",
    hierarchy: { code: "LFT", article: "76", nivel: 3 },
    topics: ["laboral", "vacaciones", "finiquito"],
  },
  {
    id: "norm:mx:lft:art80",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulo 80 (prima vacacional)",
    text: "Los trabajadores tendran derecho a una prima no menor de veinticinco por ciento sobre los salarios que les correspondan durante el periodo de vacaciones.",
    hierarchy: { code: "LFT", article: "80", nivel: 3 },
    topics: ["laboral", "vacaciones", "finiquito"],
  },
  {
    id: "norm:mx:lft:art87",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulo 87 (aguinaldo)",
    text: "Los trabajadores tendran derecho a un aguinaldo anual que debera pagarse antes del dia veinte de diciembre, equivalente a quince dias de salario, por lo menos. Los que no hayan cumplido el ano de servicios tendran derecho a la parte proporcional.",
    hierarchy: { code: "LFT", article: "87", nivel: 3 },
    topics: ["laboral", "aguinaldo", "finiquito"],
  },
  {
    id: "norm:mx:lft:art162",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulo 162 (prima de antiguedad)",
    text: "Los trabajadores de planta tienen derecho a una prima de antiguedad consistente en el importe de doce dias de salario por cada ano de servicios. Se pagara a quienes se separen voluntariamente con quince anos de servicios por lo menos, y a los que sean separados de su empleo, independientemente de la justificacion o injustificacion del despido.",
    hierarchy: { code: "LFT", article: "162", nivel: 3 },
    topics: ["laboral", "prima_antiguedad", "finiquito"],
  },
  {
    id: "norm:mx:lft:art485-486",
    type: "LegalNorm",
    jurisdiction: "MX",
    source: "LFT",
    title: "LFT Articulos 485 y 486 (tope salarial prima de antiguedad)",
    text: "La cantidad que se tome como base para el pago de las indemnizaciones no podra ser inferior al salario minimo. Si el salario excede del doble del salario minimo del area geografica, se considerara esa cantidad como salario maximo.",
    hierarchy: { code: "LFT", article: "485-486", nivel: 3 },
    topics: ["laboral", "prima_antiguedad", "indemnizacion"],
  },
];

export const CASOS = [
  {
    id: "case:scjn:pj-13-2025",
    type: "LegalCase",
    court: "SCJN (Pleno)",
    precedent: true,
    rubrum: "Salarios vencidos en accion de reinstalacion. Computo conforme al articulo 48 de la LFT.",
    binding_level: "jurisprudencia",
    cita: "P./J. 13/2025, 11a. Epoca",
    related_norms: ["norm:mx:lft:art48"],
  },
  {
    id: "case:scjn:2a-j-97-2014",
    type: "LegalCase",
    court: "SCJN (Segunda Sala)",
    precedent: true,
    rubrum: "Prima de antiguedad. Procede su pago con independencia de la justificacion del despido.",
    binding_level: "jurisprudencia",
    cita: "2a./J. 97/2014, 10a. Epoca",
    related_norms: ["norm:mx:lft:art162"],
  },
];

export const CONCEPTOS = [
  {
    id: "concept:relacion_laboral",
    type: "LegalConcept",
    label: "Relacion laboral",
    definition: "Prestacion de un trabajo personal subordinado a una persona mediante el pago de un salario.",
    elements: ["prestacion_personal", "subordinacion", "salario"],
    related_norms: ["norm:mx:lft:art20"],
  },
  {
    id: "concept:despido_injustificado",
    type: "LegalConcept",
    label: "Despido injustificado",
    definition: "Terminacion de la relacion laboral por decision del patron sin que se actualice alguna causa del articulo 47 LFT o sin aviso de rescision.",
    elements: ["despido", "ausencia_causa_justificada"],
    related_norms: ["norm:mx:lft:art47", "norm:mx:lft:art48"],
  },
  {
    id: "concept:rescision_imputable_patron",
    type: "LegalConcept",
    label: "Rescision por causa imputable al patron",
    definition: "Separacion del trabajador por causas del articulo 51 LFT, con derecho a indemnizacion como si fuera despido injustificado.",
    elements: ["causa_art51", "separacion_trabajador"],
    related_norms: ["norm:mx:lft:art51", "norm:mx:lft:art52"],
  },
];

// Capa de grafo: triples (sujeto, relacion, objeto)
export const RELACIONES = [
  ["norm:mx:lft:art47", "REGULATES", "event:despido"],
  ["norm:mx:lft:art48", "REGULATES", "event:despido"],
  ["norm:mx:lft:art51", "REGULATES", "event:rescision_trabajador"],
  ["norm:mx:lft:art162", "REGULATES", "event:renuncia"],
  ["case:scjn:pj-13-2025", "INTERPRETS", "norm:mx:lft:art48"],
  ["case:scjn:2a-j-97-2014", "INTERPRETS", "norm:mx:lft:art162"],
  ["concept:despido_injustificado", "SUBCLASS_OF", "event:despido"],
];

const index = {};
for (const item of [...NORMAS, ...CASOS, ...CONCEPTOS]) index[item.id] = item;

export const getEntidad = (id) => index[id] || null;
export const getNorma = (id) => NORMAS.find((n) => n.id === id) || null;

export const normasPorTema = (tema) => NORMAS.filter((n) => n.topics.includes(tema));

export const relacionesDe = (id) =>
  RELACIONES.filter(([s, , o]) => s === id || o === id).map(([s, rel, o]) => ({ sujeto: s, relacion: rel, objeto: o }));

export const casosQueInterpretan = (normaId) =>
  RELACIONES.filter(([, rel, o]) => rel === "INTERPRETS" && o === normaId)
    .map(([s]) => getEntidad(s))
    .filter(Boolean);
