// LEGAL-OS · Reglas declarativas (vertical laboral)
// Cada regla: when(hechos) -> boolean; then -> clasificacion, obligaciones y fundamento.

export const EVENTOS = [
  { v: "despido", l: "Despido por el patron" },
  { v: "rescision_trabajador", l: "Rescision por el trabajador (causa imputable al patron, art. 51 LFT)" },
  { v: "renuncia", l: "Renuncia voluntaria" },
];

export const REGLAS = [
  {
    id: "despido_injustificado",
    label: "Despido injustificado",
    prioridad: 1,
    when: (h) => h.evento === "despido" && h.justificado === false,
    then: {
      clasificacion: "despido_injustificado",
      concepto: "concept:despido_injustificado",
      obligaciones: [
        "indemnizacion_constitucional",
        "veinte_dias_por_anio",
        "prima_antiguedad",
        "salarios_caidos",
        "partes_proporcionales",
      ],
      normas: [
        "norm:mx:cpeum:art123-a-xxii",
        "norm:mx:lft:art47",
        "norm:mx:lft:art48",
        "norm:mx:lft:art50",
        "norm:mx:lft:art162",
      ],
    },
  },
  {
    id: "rescision_imputable_patron",
    label: "Rescision por causa imputable al patron",
    prioridad: 1,
    when: (h) => h.evento === "rescision_trabajador",
    then: {
      clasificacion: "rescision_imputable_patron",
      concepto: "concept:rescision_imputable_patron",
      obligaciones: [
        "indemnizacion_constitucional",
        "veinte_dias_por_anio",
        "prima_antiguedad",
        "partes_proporcionales",
      ],
      normas: ["norm:mx:lft:art51", "norm:mx:lft:art52", "norm:mx:lft:art50", "norm:mx:lft:art162"],
    },
  },
  {
    id: "despido_justificado",
    label: "Despido justificado",
    prioridad: 2,
    when: (h) => h.evento === "despido" && h.justificado === true,
    then: {
      clasificacion: "despido_justificado",
      concepto: null,
      obligaciones: ["prima_antiguedad", "partes_proporcionales"],
      normas: ["norm:mx:lft:art47", "norm:mx:lft:art162"],
    },
  },
  {
    id: "renuncia_voluntaria",
    label: "Renuncia voluntaria",
    prioridad: 2,
    when: (h) => h.evento === "renuncia",
    then: {
      clasificacion: "renuncia_voluntaria",
      concepto: null,
      obligaciones: ["prima_antiguedad_15_anios", "partes_proporcionales"],
      normas: ["norm:mx:lft:art162", "norm:mx:lft:art76", "norm:mx:lft:art80", "norm:mx:lft:art87"],
    },
  },
];
