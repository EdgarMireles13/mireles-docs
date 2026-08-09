// Marco Normativo Mexicano - Datos estructurados
// Partes II, III, IV y V (5.1) del Manual de Litigacion

export const PARTES = [
  {
    id: "parte-ii",
    titulo: "Jerarquia Normativa Mexicana",
    secciones: [
      {
        id: "2-1",
        titulo: "Piramide Normativa (art. 133 CPEUM)",
        resumen: "Orden de prelacion normativa segun jurisprudencia firme de la SCJN.",
        niveles: [
          { nivel: 1, nombre: "Constitucion Politica de los Estados Unidos Mexicanos", detalle: "CPEUM + Tratados Internacionales en materia de DDHH (Bloque de Constitucionalidad, art. 1 CPEUM)", color: "emerald" },
          { nivel: 2, nombre: "Tratados Internacionales (materia diversa)", detalle: "SCJN: Tesis P. LXXVII/99 - Jerarquia de Tratados", color: "blue" },
          { nivel: 3, nombre: "Leyes Federales Constitucionales", detalle: "Leyes Generales y Leyes Federales", color: "indigo" },
          { nivel: 4, nombre: "Leyes Estatales (Nuevo Leon)", detalle: "Constitucion Politica del Estado de NL + Leyes Estatales", color: "violet" },
          { nivel: 5, nombre: "Reglamentos y Disposiciones Administrativas", detalle: "Reglamentos federales, estatales y municipales", color: "slate" }
        ],
        reglaConflicto: "En caso de antinomia entre norma federal y norma estatal, prevalece la federal. Sin embargo, en materia de derechos humanos, se aplica el principio pro persona (art. 1 CPEUM), eligiendo siempre la norma o interpretacion mas protectora del individuo."
      },
      {
        id: "2-2",
        titulo: "Normativa Principal Civil, Mercantil y Constitucional",
        categorias: [
          {
            materia: "Derecho Sustantivo Civil",
            leyes: [
              { nombre: "Codigo Civil para el Estado de Nuevo Leon (CCNL)", descripcion: "Aplicable a relaciones civiles entre particulares en NL." },
              { nombre: "Codigo Civil Federal (CCF)", descripcion: "Supletorio en lo no previsto por CCNL." }
            ]
          },
          {
            materia: "Derecho Procesal Civil",
            leyes: [
              { nombre: "Codigo de Procedimientos Civiles para el Estado de Nuevo Leon (CPCNL)", descripcion: "Rige procedimientos ante juzgados civiles y Tribunal Superior de Justicia. Aplicacion territorial en toda la entidad." },
              { nombre: "Codigo Federal de Procedimientos Civiles (CFPC)", descripcion: "Supletorio ante organos federales. Aplicable en amparo y controversias ante PJF." }
            ]
          },
          {
            materia: "Derecho Mercantil",
            leyes: [
              { nombre: "Codigo de Comercio (C.Co.)", descripcion: "Aplicable a toda la Republica (materia federal). Rige actos de comercio y procedimientos ejecutivos mercantiles." },
              { nombre: "Ley General de Titulos y Operaciones de Credito (LGTOC)", descripcion: "Regula titulos de credito (pagares, letras, cheques). Supletoria en cuestiones no previstas en C.Co." },
              { nombre: "Ley General de Sociedades Mercantiles (LGSM)", descripcion: "Regulacion de personas morales mercantiles." },
              { nombre: "Ley de Concursos Mercantiles", descripcion: "Insolvencia, quiebra y procedimientos concursales." }
            ]
          },
          {
            materia: "Derecho Procesal Constitucional",
            leyes: [
              { nombre: "Ley de Amparo (LA) - 2013 con reformas", descripcion: "Marco completo del juicio de amparo. Amparo indirecto, directo, recursos." },
              { nombre: "Ley Reglamentaria de las Fracciones I y II del Articulo 105 CPEUM", descripcion: "Controversias constitucionales y acciones de inconstitucionalidad." }
            ]
          },
          {
            materia: "Derechos Humanos (Bloque de Constitucionalidad)",
            leyes: [
              { nombre: "Convencion Americana sobre Derechos Humanos (CADH)", descripcion: "Interpretacion de derechos fundamentales. Jurisprudencia de la Corte IDH aplicable." },
              { nombre: "Pacto Internacional de Derechos Civiles y Politicos (PIDCP)", descripcion: "Estandares internacionales de garantias procesales." },
              { nombre: "Convencion de las Naciones Unidas contra la Corrupcion", descripcion: "En asuntos que toquen probidad de autoridades." }
            ]
          }
        ]
      },
      {
        id: "2-3",
        titulo: "Normativa Procesal Especifica de Nuevo Leon",
        descripcion: "El CPCNL regula los procedimientos ante el Poder Judicial del Estado de Nuevo Leon.",
        tabla: [
          { rango: "1-32", materia: "Disposiciones generales y competencia", aplicacion: "Competencia territorial y material" },
          { rango: "33-64", materia: "Partes procesales, capacidad y representacion", aplicacion: "Legitimacion, mandato judicial" },
          { rango: "65-100", materia: "Litisconsorcio y tercera", aplicacion: "Intervencion de terceros" },
          { rango: "101-160", materia: "Terminos y plazos procesales", aplicacion: "Computo de plazos, terminos" },
          { rango: "191-250", materia: "Demanda y contestacion", aplicacion: "Estructura de demanda, requisitos" },
          { rango: "251-320", materia: "Regimen probatorio", aplicacion: "Ofrecimiento, practica de pruebas" },
          { rango: "321-380", materia: "Sentencia y ejecucion", aplicacion: "Sentencia definitiva, recursos" },
          { rango: "381-450", materia: "Recursos ordinarios", aplicacion: "Apelacion, revision, nulidad" }
        ]
      },
      {
        id: "2-4",
        titulo: "Control de Convencionalidad (Bloque de Constitucionalidad)",
        principio: "Conforme al articulo 1 de la CPEUM (reforma de 2011), toda norma o acto estatal debe interpretarse de forma que otorgue la maxima proteccion a los derechos humanos.",
        formula: `"Conforme al principio pro persona consagrado en el articulo 1 de la Constitucion Politica de los Estados Unidos Mexicanos, esta H. Autoridad debera elegir la interpretacion mas favorable de [norma o tratado internacional], toda vez que [razon que justifica la aplicacion de la norma mas protectora]."`,
        ejemplos: [
          { titulo: "Ejemplo 1 - Derecho a la Audiencia (art. 14 CPEUM)", descripcion: "El CCNL puede establecer plazos breves, pero si un tratado internacional protege plazos mas amplios para el derecho de defensa, se aplica el plazo mas amplio." },
          { titulo: "Ejemplo 2 - Acceso a la Justicia (art. 17 CPEUM)", descripcion: "Si la ley estatal impone requisitos adicionales para acceder a una accion, pero violaran derechos reconocidos en la CADH, se declaran inaplicables los requisitos adicionales." }
        ]
      }
    ]
  },
  {
    id: "parte-iii",
    titulo: "Estructura del Poder Judicial",
    secciones: [
      {
        id: "3-1",
        titulo: "Poder Judicial del Estado de Nuevo Leon",
        organos: [
          {
            nombre: "Tribunal Superior de Justicia del Estado de Nuevo Leon (TSJNL)",
            integracion: [
              "Pleno del Tribunal Superior - Magistrados en cuerpo completo",
              "Sala Civil (Primera, Segunda, Tercera - segun materia y cuantia)",
              "Sala Familiar",
              "Sala Penal",
              "Sala Laboral (materia burocratica estatal)"
            ],
            competencia: [
              "Conocer de amparos indirectos en ampliacion (revision de sentencias de Juzgados de Distrito)",
              "Conocer de recursos de apelacion de sentencias de Juzgados de Primera Instancia",
              "Funcion constitucional en defensa de derechos humanos"
            ]
          },
          {
            nombre: "Juzgados de Primera Instancia (Monterrey y area metropolitana)",
            tipos: [
              "Juzgados Civiles (1 a N - numerados por competencia territorial)",
              "Juzgados Familiares (Asuntos de familia)",
              "Juzgados Mercantiles (Juicios ejecutivos mercantiles, contratos)",
              "Juzgados Especializados en materia de Extincion de Dominio"
            ],
            competencia: "Distrito Judicial Centro (Monterrey). Divisiones por circunscripcion territorial."
          },
          {
            nombre: "Jueces de Paz y Juzgados Municipales",
            competencia: "Asuntos de cuantia menor (definida por CPCNL). Cobertura: Municipios del Estado."
          }
        ]
      },
      {
        id: "3-2",
        titulo: "Poder Judicial de la Federacion en Nuevo Leon",
        circuito: "Para todo el Estado de Nuevo Leon, la competencia federal corresponde al Cuarto Circuito.",
        tribunales: [
          {
            nombre: "Tribunales Colegiados del Cuarto Circuito",
            ubicacion: "Monterrey, Nuevo Leon",
            funciones: [
              "Conocen amparo directo en materia civil, penal, mercantil y administrativa",
              "Conocen recursos de revision en amparo indirecto",
              "Emiten criterios jurisprudenciales vinculantes en el Cuarto Circuito"
            ],
            integracion: [
              "Primer Tribunal Colegiado en Materia Civil",
              "Segundo Tribunal Colegiado en Materia Civil",
              "Tribunal Colegiado en Materia Penal",
              "Tribunal Colegiado en Materia Administrativa"
            ]
          },
          {
            nombre: "Juzgados de Distrito en el Estado de Nuevo Leon",
            ubicacion: "Monterrey (Nuevo Leon)",
            funciones: [
              "Conocen amparo indirecto (primera instancia)",
              "Conocen controversias constitucionales (por delegacion)",
              "Conocen acciones de inconstitucionalidad (por delegacion)"
            ],
            numeracion: [
              "Juzgados de Distrito en Materias Civiles",
              "Juzgados de Distrito en Materia Penal",
              "Juzgados de Distrito en Materia Administrativa"
            ]
          },
          {
            nombre: "Suprema Corte de Justicia de la Nacion (SCJN)",
            ubicacion: "Ciudad de Mexico",
            integracion: [
              "Pleno - Todos los Ministros",
              "Primera Sala - Civil y Penal",
              "Segunda Sala - Administrativa y Laboral"
            ],
            competencia: [
              "Conocer de amparos en revision (contra sentencias de amparo directo)",
              "Conocer de contradicciones de tesis jurisprudenciales",
              "Emitir jurisprudencia obligatoria a nivel nacional"
            ]
          }
        ]
      },
      {
        id: "3-3",
        titulo: "Encabezamiento Correcto de Escritos segun Organo",
        descripcion: "La correcta identificacion del organo receptor es el primer filtro de profesionalismo de un escrito.",
        encabezados: [
          { id: "civil-nl", organo: "Juzgados Civiles de NL", plantilla: "C. JUEZ [NUMERO] CIVIL DEL PRIMER DISTRITO JUDICIAL\nEN EL ESTADO DE NUEVO LEON\nP  R  E  S  E  N  T  E", ejemplo: "C. JUEZ TERCERO CIVIL DEL PRIMER DISTRITO JUDICIAL\nEN EL ESTADO DE NUEVO LEON\nP  R  E  S  E  N  T  E" },
          { id: "tsjnl", organo: "Tribunal Superior de Justicia de NL", plantilla: "H. [PRIMERA/SEGUNDA/TERCERA] SALA CIVIL DEL\nH. TRIBUNAL SUPERIOR DE JUSTICIA DEL\nESTADO DE NUEVO LEON\nP  R  E  S  E  N  T  E", ejemplo: "H. SEGUNDA SALA CIVIL DEL\nH. TRIBUNAL SUPERIOR DE JUSTICIA DEL\nESTADO DE NUEVO LEON\nP  R  E  S  E  N  T  E" },
          { id: "amparo-indirecto", organo: "Amparo indirecto", plantilla: "C. JUEZ DE DISTRITO EN MATERIAS CIVILES Y DE TRABAJO\nEN EL ESTADO DE NUEVO LEON\nP  R  E  S  E  N  T  E", nota: 'Usar "Y DE TRABAJO" incluso para amparo en materia civil pura.' },
          { id: "amparo-directo-civil", organo: "Amparo directo civil/trabajo", plantilla: "H. TRIBUNAL COLEGIADO EN MATERIAS CIVIL Y DE TRABAJO\nDEL CUARTO CIRCUITO (EN TURNO)\nP  R  E  S  E  N  T  E" },
          { id: "amparo-directo-penal", organo: "Amparo directo penal", plantilla: "H. TRIBUNAL COLEGIADO EN MATERIA PENAL DEL CUARTO CIRCUITO\nP  R  E  S  E  N  T  E" },
          { id: "amparo-directo-admin", organo: "Amparo directo administrativo", plantilla: "H. TRIBUNAL COLEGIADO EN MATERIA ADMINISTRATIVA DEL CUARTO CIRCUITO\nP  R  E  S  E  N  T  E" },
          { id: "amparo-revision-scjn", organo: "Amparo en revision ante SCJN", plantilla: "C. MINISTRO EN TURNO DE LA SUPREMA CORTE DE JUSTICIA\nDE LA NACION\nP  R  E  S  E  N  T  E" }
        ]
      },
      {
        id: "3-4",
        titulo: "Errores Comunes en Encabezamientos",
        errores: [
          { error: 'Omitir "EN EL ESTADO DE NUEVO LEON"', efecto: "Juzgado no sabe donde fue presentado", solucion: "Copiar exactamente del CPCNL art. 1" },
          { error: 'Usar "Juzgado" en lugar de "Juez"', efecto: "Imprecision formal", solucion: 'Usar "C. JUEZ" (ante organo singular)' },
          { error: "No especificar la Sala (Civil/Penal)", efecto: "Incompetencia", solucion: "Verificar la materia del asunto" },
          { error: 'Olvidar "EN TURNO" para Tribunal Colegiado', efecto: "Incertidumbre sobre destino", solucion: "Siempre usar en Colegiados" },
          { error: "Mal nombre del circuito", efecto: "Rechazo por incompetencia", solucion: "Verificar que sea CUARTO CIRCUITO" }
        ]
      }
    ]
  },
  {
    id: "parte-iv",
    titulo: "Jurisprudencia Mexicana: Cita y Subsuncion",
    secciones: [
      {
        id: "4-1",
        titulo: "El Sistema de Jurisprudencia en Mexico",
        descripcion: "El sistema de precedentes mexicano opera de forma radicalmente distinta al anglosajon. La jurisprudencia en Mexico es obligatoria cuando cumple los supuestos de la Ley de Amparo y del Codigo de Comercio.",
        tipos: [
          { tipo: "Jurisprudencia por reiteracion", fuerza: "Obligatoria", requisito: "5 ejecutorias en el mismo sentido, sin interrupcion" },
          { tipo: "Jurisprudencia por contradiccion", fuerza: "Obligatoria", requisito: "Resolucion de contradiccion de tesis por SCJN o TCC" },
          { tipo: "Jurisprudencia por sustitucion", fuerza: "Obligatoria", requisito: "Reemplaza criterio anterior establecido formalmente" },
          { tipo: "Tesis aislada", fuerza: "Orientadora", requisito: "No vinculante, pero altamente persuasiva" },
          { tipo: "Tesis de Pleno", fuerza: "Alta jerarquia", requisito: "Obligatoria para Salas y Tribunales inferiores" }
        ],
        jerarquia: [
          { nivel: 1, nombre: "Jurisprudencia del Pleno de la SCJN", alcance: "Obligatoria para TODOS (Salas, TCC, juzgados)" },
          { nivel: 2, nombre: "Jurisprudencia de las Salas de la SCJN", alcance: "Obligatoria para TCC y organos inferiores" },
          { nivel: 3, nombre: "Jurisprudencia de los Plenos Regionales", alcance: "Obligatoria en su circuito" },
          { nivel: 4, nombre: "Jurisprudencia de Tribunales Colegiados de Circuito", alcance: "Obligatoria en su circuito (IV para Nuevo Leon)" }
        ]
      },
      {
        id: "4-2",
        titulo: "Como Citar Correctamente la Jurisprudencia Mexicana",
        formato: "[Numero de Tesis / Epoca], [Sala o Tribunal], [Semanario Judicial de la Federacion y su Gaceta o SJF], [Tomo/Libro], [Mes y Anio], [Materia(s)], [Pagina], [Numero de Registro IUS].",
        ejemplos: [
          { tipo: "Jurisprudencia", rubro: "RESPONSABILIDAD CIVIL OBJETIVA. SUS ELEMENTOS CONSTITUTIVOS.", cita: "Jurisprudencia 1a./J. 54/2016 (10a.), Primera Sala de la Suprema Corte de Justicia de la Nacion, Gaceta del Semanario Judicial de la Federacion, Libro 33, agosto de 2016, Tomo II, Materia Civil, pagina 652, Registro: 2012262." },
          { tipo: "Tesis Aislada", rubro: "DANIO MORAL. CRITERIOS PARA SU CUANTIFICACION.", cita: "Tesis aislada I.3o.C.1121 C (9a.), Tercer Tribunal Colegiado en Materia Civil del Primer Circuito, Semanario Judicial de la Federacion y su Gaceta, Tomo XXXIV, agosto de 2011, Materia Civil, pagina 1891, Registro: 161212." }
        ],
        identificadoresSala: [
          { codigo: "P.", nombre: "Pleno de la SCJN" },
          { codigo: "1a.", nombre: "Primera Sala de la SCJN" },
          { codigo: "2a.", nombre: "Segunda Sala de la SCJN" },
          { codigo: "1a./J.", nombre: "Jurisprudencia de Primera Sala" },
          { codigo: "P./J.", nombre: "Jurisprudencia del Pleno" },
          { codigo: "I.3o.C.", nombre: "Primer Circuito, Tercer Tribunal Colegiado en Materia Civil" },
          { codigo: "IV.1o.C.", nombre: "Cuarto Circuito, Primer Tribunal Colegiado en Materia Civil (NL)" },
          { codigo: "IV.2o.A.", nombre: "Cuarto Circuito, Segundo Tribunal Colegiado en Materia Administrativa (NL)" }
        ],
        epocas: [
          { codigo: "(8a.)", nombre: "Octava Epoca (1988-1995)" },
          { codigo: "(9a.)", nombre: "Novena Epoca (1995-2011)" },
          { codigo: "(10a.)", nombre: "Decima Epoca (2011-2021)" },
          { codigo: "(11a.)", nombre: "Undecima Epoca (2021 a la fecha)" }
        ]
      },
      {
        id: "4-3",
        titulo: "Donde Buscar la Jurisprudencia",
        fuentes: [
          { nombre: "SCJN - Buscador Jurisprudencial", url: "https://sjf2.scjn.gob.mx", descripcion: "Base de datos oficial, mas actualizada. Busqueda por rubro, numero de registro, palabra clave." },
          { nombre: "Semanario Judicial de la Federacion (SJF Digital)", url: "https://sjf.scjn.gob.mx", descripcion: "Version digital del Semanario oficial." },
          { nombre: "IUS Plus", url: null, descripcion: "Para sentencias completas y ejecutorias. Acceso mediante suscripcion (despachos)." },
          { nombre: "Gaceta del SJF", url: null, descripcion: "Version impresa y digital oficial. Publicacion periodica de criterios." }
        ],
        busquedaNL: [
          "Entra a https://sjf2.scjn.gob.mx",
          "Filtra por circuito: IV (Cuarto Circuito)",
          'Selecciona "Tribunales Colegiados del Cuarto Circuito"',
          "Busca por materia (Civil, Penal, Administrativo)"
        ]
      },
      {
        id: "4-4",
        titulo: "El Metodo de Subsuncion Juridica Mexicano",
        descripcion: "El metodo de subsuncion en Mexico sigue la misma estructura tripartita del razonamiento juridico clasico, adaptada a la terminologia nacional.",
        pasos: [
          { paso: 1, nombre: "Premisa Mayor (Norma o Criterio Jurisprudencial)", formula: '"El [Pleno / Primera Sala / TCC del Cuarto Circuito] de la Suprema Corte / del PJF ha sostenido que [doctrina]."' },
          { paso: 2, nombre: "Premisa Menor (Los Hechos del Caso)", formula: '"En el caso sub judice / En el asunto que nos ocupa, los hechos demuestran que [hechos concretos con fechas, documentos y circunstancias especificas]."' },
          { paso: 3, nombre: "Conclusion Juridica (Consecuencia Inevitable)", formula: '"Por tanto, resulta palmario / no cabe sino concluir que [consecuencia juridica inevitable]."' }
        ],
        conectores: [
          { texto: "En el caso sub judice...", uso: "Aplicacion directa al caso" },
          { texto: "Proyectando este criterio al asunto que nos ocupa...", uso: "Transicion formal" },
          { texto: "Subsumiendo los hechos probados en la hipotesis normativa...", uso: "Tecnico-procesal" },
          { texto: "La conducta del demandado encuadra plenamente en...", uso: "Para imputacion" },
          { texto: "Mi representado se encuentra exactamente en el supuesto previsto por...", uso: "Para derechos" },
          { texto: "Pues bien, [nombre de parte] fractura/viola/infringe...", uso: "Para infracciones" }
        ]
      },
      {
        id: "4-5",
        titulo: "Ejemplo Completo: Antes y Despues de la Subsuncion",
        antes: {
          contenido: "La tesis 1a./J. 54/2016 establece que la responsabilidad civil objetiva requiere demostrar el dano, el hecho generador y la relacion de causalidad.",
          defectos: ["Cita incompleta (faltan: epoca, Sala, Gaceta, pagina, registro)", "Sin conexion con hechos del caso", "No hay desarrollo de que dice exactamente la jurisprudencia", "Falta conclusion juridica"]
        },
        despues: {
          contenido: `La Primera Sala de la Suprema Corte de Justicia de la Nacion, en la jurisprudencia de rubro "RESPONSABILIDAD CIVIL OBJETIVA. SUS ELEMENTOS CONSTITUTIVOS" (1a./J. 54/2016 (10a.), Gaceta del Semanario Judicial de la Federacion, Libro 33, agosto de 2016, Tomo II, pagina 652, Registro: 2012262), ha establecido con claridad meridiana que la accion de responsabilidad civil objetiva exige la acreditacion concurrente de tres elementos: (i) la existencia del dano; (ii) el hecho generador imputable al demandado; y (iii) el nexo causal entre ambos.\n\nEn el caso sub judice, la concurrencia de los tres elementos es incontrovertible:\n\nEn cuanto al dano, el peritaje valuatorio que se ofrece como prueba pericial acredita que los activos del actor sufrieron una depreciacion de $[cantidad] pesos, como consecuencia directa del evento del [fecha] (Hecho Tercero de la presente demanda).\n\nEn cuanto al hecho generador, las videograbaciones y el parte de hechos levantado el mismo [fecha] identifican al vehiculo propiedad del demandado como el elemento activo del evento (Documento numero [X]).\n\nEn cuanto a la relacion de causalidad, el dictamen del perito en accidentologia vial que se ofrece como prueba pericial demuestra que, sin la conducta del demandado, el dano no se habria producido; la causalidad es directa, inmediata y sin concausa rompedora.\n\nNo cabe sino concluir que los tres elementos exigidos por la jurisprudencia de la Primera Sala concurren de forma plena y acreditada, lo que impone al H. Juzgado el deber de declarar la responsabilidad civil objetiva del demandado y condenarlo a la reparacion integral del dano causado.`,
          fortalezas: ["Cita completa y verificable", "Desglose detallado de elementos", "Conexion explicita con Hechos y Documentos de la demanda", "Conclusion juridica categorica e inevitable", "Tono profesional infalible"]
        }
      }
    ]
  },
  {
    id: "parte-v",
    titulo: "Estructura de Escritos Procesales",
    secciones: [
      {
        id: "5-1",
        titulo: "La Demanda Civil ante Juzgados de Nuevo Leon",
        requisitos: {
          titulo: "Requisitos Formales (art. 191 CPCNL)",
          introduccion: "La demanda civil en Nuevo Leon debe contener, bajo pena de prevencion o rechazo:",
          items: [
            { num: 1, nombre: "El tribunal ante quien se promueve", detalle: "Con identificacion completa del juzgado y su ubicacion" },
            { num: 2, nombre: "Nombre y domicilio del actor", detalle: "Incluyendo domicilio para oir notificaciones en Monterrey o area metropolitana" },
            { num: 3, nombre: "Nombre y domicilio del demandado", detalle: "Con precision suficiente para el emplazamiento" },
            { num: 4, nombre: "El objeto u objetos que se reclamen", detalle: "Con sus accesorios (intereses, danos, costas)" },
            { num: 5, nombre: "Los hechos", detalle: "Numerados, en orden cronologico, con precision suficiente" },
            { num: 6, nombre: "Los fundamentos de derecho", detalle: "Preceptos legales aplicables y jurisprudencia" },
            { num: 7, nombre: "El tipo y la clase de procedimiento", detalle: "Ordinario, ejecutivo, especial, etc." },
            { num: 8, nombre: "La firma del actor o de quien promueva en su nombre", detalle: "Con cedula profesional" }
          ]
        },
        plantilla: `[LOGO / DATOS DEL DESPACHO]

[CIUDAD], [ESTADO], A [DD] DE [MES] DE [ANIO].

C. JUEZ [NUMERO] CIVIL DEL PRIMER DISTRITO JUDICIAL
EN EL ESTADO DE NUEVO LEON
P  R  E  S  E  N  T  E

[NOMBRE DEL LICENCIADO], Licenciado en Ciencias Juridicas, con Cedula Profesional numero [NUMERO], miembro activo del [COLEGIO DE ABOGADOS], con domicilio profesional en [DOMICILIO COMPLETO], Monterrey, Nuevo Leon, en mi caracter de [apoderado legal / mandatario judicial] de [NOMBRE COMPLETO DEL ACTOR], segun poder notarial que se adjunta como Documento numero Uno; ante Usted con el debido respeto comparezco y expongo:

Que por medio del presente ocurso, y con fundamento en los articulos 191, 192 y demas relativos y aplicables del Codigo de Procedimientos Civiles para el Estado de Nuevo Leon, vengo a interponer DEMANDA EN JUICIO [TIPO] en contra de [NOMBRE COMPLETO DEL DEMANDADO], con domicilio conocido en [DOMICILIO], o en el que resulte al momento del emplazamiento, con base en los siguientes:

                     H E C H O S

HECHO PRIMERO.- [descripcion precisa, fecha, lugar, documento]
HECHO SEGUNDO.- [descripcion precisa, fecha, lugar, documento]
[...continuar numeracion...]

                  FUNDAMENTOS DE DERECHO

PRIMERO.- [Competencia]
SEGUNDO.- [Legitimacion activa]
TERCERO.- [Legitimacion pasiva]
CUARTO.- [Fundamentos sustantivos - aqui se aplica la subsuncion juridica completa]
QUINTO.- [Jurisprudencia aplicable - con subsuncion]

              P E T I T O R I O  (SUPLICO)`
      }
    ]
  }
];

export const CONECTORES_SUBSUNCION = [
  { texto: "En el caso sub judice...", uso: "Aplicacion directa al caso" },
  { texto: "Proyectando este criterio al asunto que nos ocupa...", uso: "Transicion formal" },
  { texto: "Subsumiendo los hechos probados en la hipotesis normativa...", uso: "Tecnico-procesal" },
  { texto: "La conducta del demandado encuadra plenamente en...", uso: "Para imputacion" },
  { texto: "Mi representado se encuentra exactamente en el supuesto previsto por...", uso: "Para derechos" },
  { texto: "Pues bien, [nombre de parte] fractura/viola/infringe...", uso: "Para infracciones" }
];

export const ENCABEZADOS_OFICIALES = [
  { id: "civil-nl", organo: "Juzgados Civiles de NL", plantilla: "C. JUEZ [NUMERO] CIVIL DEL PRIMER DISTRITO JUDICIAL\nEN EL ESTADO DE NUEVO LEON\nP  R  E  S  E  N  T  E" },
  { id: "tsjnl", organo: "Tribunal Superior de Justicia de NL", plantilla: "H. [PRIMERA/SEGUNDA/TERCERA] SALA CIVIL DEL\nH. TRIBUNAL SUPERIOR DE JUSTICIA DEL\nESTADO DE NUEVO LEON\nP  R  E  S  E  N  T  E" },
  { id: "amparo-indirecto", organo: "Amparo indirecto", plantilla: "C. JUEZ DE DISTRITO EN MATERIAS CIVILES Y DE TRABAJO\nEN EL ESTADO DE NUEVO LEON\nP  R  E  S  E  N  T  E" },
  { id: "amparo-directo-civil", organo: "Amparo directo civil/trabajo", plantilla: "H. TRIBUNAL COLEGIADO EN MATERIAS CIVIL Y DE TRABAJO\nDEL CUARTO CIRCUITO (EN TURNO)\nP  R  E  S  E  N  T  E" },
  { id: "amparo-directo-penal", organo: "Amparo directo penal", plantilla: "H. TRIBUNAL COLEGIADO EN MATERIA PENAL DEL CUARTO CIRCUITO\nP  R  E  S  E  N  T  E" },
  { id: "amparo-directo-admin", organo: "Amparo directo administrativo", plantilla: "H. TRIBUNAL COLEGIADO EN MATERIA ADMINISTRATIVA DEL CUARTO CIRCUITO\nP  R  E  S  E  N  T  E" },
  { id: "amparo-revision-scjn", organo: "Amparo en revision ante SCJN", plantilla: "C. MINISTRO EN TURNO DE LA SUPREMA CORTE DE JUSTICIA\nDE LA NACION\nP  R  E  S  E  N  T  E" }
];