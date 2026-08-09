export const TIPOS = [
  { v: "amparo_indirecto", l: "Amparo indirecto" },
  { v: "amparo_directo",   l: "Amparo directo" },
  { v: "queja",            l: "Recurso de queja" },
  { v: "laboral",          l: "Demanda laboral" },
  { v: "civil",            l: "Juicio civil" },
  { v: "familiar",         l: "Juicio familiar" },
  { v: "libre",            l: "Escrito libre" },
];

export const ESTADOS = [
  { v: "activo",    l: "Activo",    cls: "bg-emerald-100 text-emerald-700" },
  { v: "suspension",l: "Suspendido",cls: "bg-amber-100 text-amber-700" },
  { v: "concluido", l: "Concluido", cls: "bg-gray-200 text-gray-700" },
  { v: "archivo",   l: "Archivo",   cls: "bg-slate-200 text-slate-700" },
];

export const PLANTILLAS = [
  { id: "amparo_conceptos", label: "Amparo — Conceptos de violacion",   tipo: "amparo_indirecto", icon: "⚖️", desc: "Conceptos de violacion para amparo indirecto" },
  { id: "queja",            label: "Recurso de Queja",                  tipo: "queja",            icon: "📜", desc: "Recurso de queja Ley de Amparo" },
  { id: "laboral",          label: "Demanda laboral (via ordinaria)",   tipo: "laboral",          icon: "💼", desc: "Demanda en via ordinaria laboral" },
  { id: "libre",            label: "Escrito libre",                     tipo: "libre",            icon: "✍️", desc: "Escrito juridico generico" },
];

export const FIELD_CFG = {
  amparo: [
    { id: "art_violado",           label: "Articulos violados",                 type: "text", ph: "ej. 14, 16, 20 Constitucionales" },
    { id: "acto_reclamado",        label: "Acto reclamado",                     type: "text", ph: "Descripcion del acto" },
    { id: "doctrina",              label: "DOCTRINA · Tesis / Jurisprudencia",  type: "ta", rows: 4, ph: "Rubro, numero, epoca, libro, fecha, pagina y registro" },
    { id: "hechos_conceptos",      label: "HECHOS · Subsuncion",                type: "ta", rows: 4 },
    { id: "conclusion",            label: "CONCLUSION",                         type: "ta", rows: 3 },
    { id: "conceptos_adicionales", label: "Conceptos adicionales (opcional)",   type: "ta", rows: 5 },
    { id: "petitorios_adicionales",label: "Petitorios adicionales (opcional)",  type: "ta", rows: 2 },
  ],
  queja: [
    { id: "fecha_auto",           label: "Fecha del auto impugnado",          type: "text", ph: "dd de mes de 2026" },
    { id: "art_fracturado",       label: "Articulo fracturado",               type: "text" },
    { id: "agravio_1",            label: "Primer agravio",                    type: "ta", rows: 5 },
    { id: "agravio_2",            label: "Segundo agravio",                   type: "ta", rows: 5 },
    { id: "agravios_adicionales", label: "Agravios adicionales (opcional)",  type: "ta", rows: 4 },
  ],
  laboral: [
    { id: "actor",               label: "Actor (nombre completo)",            type: "text" },
    { id: "demandado",           label: "Empresa / Patron demandado",         type: "text" },
    { id: "domicilio_demandado", label: "Domicilio de la demandada",          type: "text" },
    { id: "salario_diario",      label: "Salario diario integrado ($)",      type: "text", ph: "ej. 450.00" },
    { id: "fecha_ingreso",       label: "Fecha de ingreso",                   type: "text", ph: "dd/mm/aaaa" },
    { id: "fecha_despido",       label: "Fecha del despido injustificado",   type: "text", ph: "dd/mm/aaaa" },
    { id: "prestaciones",        label: "Prestaciones adicionales (opcional)",type: "ta", rows: 4 },
    { id: "hechos",              label: "Hechos adicionales (opcional)",      type: "ta", rows: 4 },
    { id: "pruebas",             label: "Ofrecimiento de pruebas",            type: "ta", rows: 4 },
  ],
};

export const BLANK_EXP = {
  numero: "",
  tipo: "amparo_indirecto",
  juzgado: "",
  quejoso: "",
  autoridad: "",
  tercero: "",
  estado: "activo",
  notas: "",
};
