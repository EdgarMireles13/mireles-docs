// Helpers para formatear citas de jurisprudencia mexicana
// Formato oficial segun Parte IV 4.2

export function formatearCita({ tipo, numero, epoca, sala, organo, fuente, libro, mes, anio, tomo, materia, pagina, registro, rubro }) {
  const tipoStr = tipo === "jurisprudencia" ? "Jurisprudencia" : tipo === "tesis" ? "Tesis aislada" : "Criterio";
  const salaStr = sala || "";
  const epocaStr = epoca ? ` (${epoca})` : "";
  const fuenteStr = fuente || "Semanario Judicial de la Federacion y su Gaceta";
  const libroStr = libro ? `, Libro ${libro}` : "";
  const mesAnio = mes && anio ? `, ${mes} de ${anio}` : "";
  const tomoStr = tomo ? `, Tomo ${tomo}` : "";
  const materiaStr = materia ? `, Materia ${materia}` : "";
  const paginaStr = pagina ? `, pagina ${pagina}` : "";
  const registroStr = registro ? `, Registro: ${registro}` : "";

  return `${tipoStr} ${numero}${epocaStr}, ${salaStr}, ${fuenteStr}${libroStr}${mesAnio}${tomoStr}${materiaStr}${paginaStr}${registroStr}.`;
}

export function validarCita(cita) {
  const errores = [];
  if (!cita.numero) errores.push("Numero de tesis requerido");
  if (!cita.epoca) errores.push("Epoca requerida (ej. 10a., 11a.)");
  if (!cita.sala) errores.push("Sala u organo requerido");
  if (!cita.pagina) errores.push("Pagina recomendada");
  if (!cita.registro) errores.push("Numero de Registro IUS recomendado");
  return { valida: errores.length === 0, errores };
}

export const SALAS = [
  { codigo: "P.", nombre: "Pleno de la SCJN" },
  { codigo: "1a.", nombre: "Primera Sala de la SCJN" },
  { codigo: "2a.", nombre: "Segunda Sala de la SCJN" },
  { codigo: "1a./J.", nombre: "Jurisprudencia de Primera Sala" },
  { codigo: "2a./J.", nombre: "Jurisprudencia de Segunda Sala" },
  { codigo: "P./J.", nombre: "Jurisprudencia del Pleno" },
  { codigo: "I.3o.C.", nombre: "Primer Circuito, Tercer TCC en Materia Civil" },
  { codigo: "IV.1o.C.", nombre: "Cuarto Circuito, Primer TCC en Materia Civil (NL)" },
  { codigo: "IV.2o.C.", nombre: "Cuarto Circuito, Segundo TCC en Materia Civil (NL)" },
  { codigo: "IV.2o.A.", nombre: "Cuarto Circuito, Segundo TCC en Materia Administrativa (NL)" },
  { codigo: "IV.P.", nombre: "Pleno del Cuarto Circuito" }
];

export const EPOCAS = [
  { codigo: "8a.", nombre: "Octava Epoca (1988-1995)" },
  { codigo: "9a.", nombre: "Novena Epoca (1995-2011)" },
  { codigo: "10a.", nombre: "Decima Epoca (2011-2021)" },
  { codigo: "11a.", nombre: "Undecima Epoca (2021 a la fecha)" }
];
