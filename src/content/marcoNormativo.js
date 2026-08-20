
// Partes II, III, IV, V, VI, VII, IX, X, XI y XII del Manual de Litigacion
// Partes II, III, IV, V, VI y VII (parcial) del Manual de Litigacion

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

              P E T I T O R I O  (SUPLICO)

Por lo anteriormente expuesto y fundado, a Usted
C. Juez, con todo respeto pido y suplico:
PRIMERO.- [solicitud precisa]
SEGUNDO.- [solicitud precisa]
[...]

                  P R U E B A S

Esta parte ofrece como medios de prueba:
I. DOCUMENTAL PUBLICA: [especificar, referencias a Hechos]
II. DOCUMENTAL PRIVADA: [especificar, referencias a Hechos]
III. PERICIAL: [especificar materia, referencias a Hechos]
IV. TESTIMONIAL: [especificar testigos, referencias a Hechos]
V. CONFESIONAL: [contra demandado, referencias a Hechos]
VI. INSPECCION JUDICIAL: [si aplica]
VII. PRESUNCIONAL LEGAL Y HUMANA: [si aplica]
VIII. INSTRUMENTAL DE ACTUACIONES: [certificaciones]

                  A T E N T A M E N T E

[FIRMA]
[NOMBRE COMPLETO - LICENCIADO EN CIENCIAS JURIDICAS]
CEDULA PROFESIONAL: [NUMERO]`
      },
      {
        id: "5-1-3",
        titulo: "Competencia Territorial en Nuevo Leon (arts. 14-32 CPCNL)",
        descripcion: "La competencia se determina al momento de presentacion de la demanda y no se pierde por cambios posteriores.",
        tabla: [
          { materia: "Obligaciones personales", foro: "Domicilio del demandado" },
          { materia: "Inmuebles", foro: "Lugar del inmueble" },
          { materia: "Sucesiones", foro: "Ultimo domicilio del de cujus" },
          { materia: "Alimentos", foro: "A eleccion del alimentista" },
          { materia: "Arrendamiento", foro: "Lugar del inmueble" },
          { materia: "Danios", foro: "Lugar donde se produjo el danio" },
          { materia: "Contratos", foro: "Lugar pactado o domicilio del demandado" }
        ],
        reglaOro: "La competencia se determina al momento de presentacion de la demanda y no se pierde por cambios posteriores."
      },
      {
        id: "5-1-4",
        titulo: "El Emplazamiento y sus Consecuencias",
        introduccion: "El emplazamiento es el acto procesal mas importante del procedimiento civil. Un emplazamiento deficiente puede anular todo lo actuado.",
        requisitos: [
          "Entrega personal de la cedula de notificacion en el domicilio del demandado",
          "Entrega de copia de la demanda y documentos anexos",
          "Apercibimiento expreso del plazo para contestar",
          "Constancia de actuario con lugar, hora y fecha"
        ],
        argumentoNulidad: `"El emplazamiento practicado en autos adolece de nulidad procesal absoluta, toda vez que el actuario no dio cumplimiento al imperativo legal contenido en el articulo [X] del CPCNL, que exige [requisito omitido]. Esta omision priva a mi representado del derecho fundamental de audiencia consagrado en el articulo 14 de la Constitucion Politica de los Estados Unidos Mexicanos, cuya violacion es impugnable en cualquier estado del proceso."`
      },
      {
        id: "5-2",
        titulo: "El Juicio Ejecutivo Mercantil ante Juzgados de Nuevo Leon",
        descripcion: "Para creditos documentados en titulos de credito (pagare, letra de cambio, cheque), el juicio ejecutivo mercantil ofrece ventajas procesales significativas al acreedor.",
        fundamento: "Arts. 1391-1414 del Codigo de Comercio",
        documentosEjecucion: [
          "Sentencias ejecutoriadas",
          "Escrituras publicas",
          "Titulos de credito (pagares, letras, cheques)",
          "Polizas de seguros",
          "Documentos privados reconocidos judicialmente"
        ],
        estructura: {
          hechoPrimero: {
            titulo: "CREDITO Y SU DOCUMENTACION",
            descripcion: "Describir el titulo ejecutivo con precision:",
            items: ["Tipo de documento", "Fecha de suscripcion", "Monto", "Vencimiento", "Partes intervinientes"]
          },
          hechoSegundo: {
            titulo: "INCUMPLIMIENTO",
            items: ["Fecha de vencimiento", "Presentacion al cobro (en su caso)", "Negativa de pago", "Protesto (si aplica)"]
          },
          hechoTercero: {
            titulo: "SALDO INSOLUTO Y ACCESORIOS",
            items: ["Suerte principal", "Intereses ordinarios", "Intereses moratorios", "Demas accesorios pactados"]
          }
        },
        petitorio: `PRIMERO.- Tener por interpuesta la presente demanda en JUICIO EJECUTIVO MERCANTIL.
SEGUNDO.- Ordenar el auto de exequendo, despachando ejecucion para que se embarguen bienes del demandado suficientes para cubrir [monto] por concepto de suerte principal, mas los intereses que se sigan generando hasta el pago total.
TERCERO.- Una vez ejecutado el embargo, emplazar al demandado para que oponga excepciones dentro del termino legal.
CUARTO.- En su momento, dictar sentencia de remate condenando al demandado al pago de las prestaciones reclamadas y al pago de gastos y costas del juicio.`
      },
      {
        id: "5-3-1",
        titulo: "Recurso de Apelacion (arts. 381-430 CPCNL)",
        plazo: "Nueve dias habiles a partir de la notificacion de la resolucion impugnada (verificar reforma mas reciente del CPCNL).",
        plantilla: `A G R A V I O S

PRIMERO.- La resolucion impugnada viola en mi perjuicio los articulos [X] del CPCNL / [Y] del CCNL, en virtud de que [describir la violacion con precision, indicando por que esta equivocado, que debio haber resuelto y por que].

SEGUNDO.- Adicionalmente, el a quo incurrio en [describir otra violacion]. [Cada agravio debe ser autosuficiente: debe poder leerse de forma independiente y contener toda la argumentacion necesaria para que la Sala lo evalue sin necesidad de remitirse a los demas.]`,
        reglaOro: "El agravio que no ataca de forma directa y especifica la motivacion del juez es inoperante. La Sala unicamente puede examinar lo que el apelante le plantea; lo que no se plantea, no se resuelve."
      }
    ]
  },
  {
    id: "parte-vi",
    titulo: "El Juicio de Amparo: Herramienta Estrategica",
    enConstruccion: true,
    secciones: [
      {
        id: "6-1",
        titulo: "Tipos de Amparo y su Aplicacion Estrategica",
        descripcion: "El juicio de amparo es la herramienta procesal mas poderosa del sistema juridico mexicano. Su uso estrategico diferencia al litigante de elite del promedio.",
        tipos: [
          {
            nombre: "Amparo Indirecto (ante Juzgado de Distrito - art. 107 CPEUM y art. 10 LA)",
            procedeContra: [
              "Actos de autoridad que NO son sentencias definitivas",
              "Leyes (amparo contra normas)",
              "Actos de autoridades fuera de juicio",
              "Actos en juicio que afectan derechos sustantivos (personalidad, embargo, etc.)",
              "Actos de ejecucion imposible de reparar en sentencia definitiva"
            ],
            ventaja: "Detiene el acto impugnado mediante medidas cautelares (suspension provisional y definitiva)."
          },
          {
            nombre: "Amparo Directo (ante Tribunal Colegiado - art. 170 LA)",
            procedeContra: [
              "Sentencias definitivas",
              "Laudos de tribunales de trabajo",
              "Resoluciones que ponen fin al juicio"
            ],
            ventaja: "Ultima instancia para revocar o modificar sentencia desfavorable en primera instancia."
          }
        ]
      },
      {
        id: "6-2",
        titulo: "Estructura de la Demanda de Amparo Indirecto",
        plantilla: `C. JUEZ DE DISTRITO EN MATERIAS CIVILES Y DE TRABAJO
EN EL ESTADO DE NUEVO LEON
P  R  E  S  E  N  T  E

[NOMBRE], Licenciado en Ciencias Juridicas, Cedula Profesional [NUMERO], en representacion de [QUEJOSO], segun poder que adjunto, ante Usted respetuosamente comparezco y expongo:

Con fundamento en los articulos 103 y 107 de la Constitucion Politica de los Estados Unidos Mexicanos, y los articulos 107, 108 y demas relativos de la Ley de Amparo, vengo a promover JUICIO DE AMPARO INDIRECTO, con base en los siguientes datos:

I. NOMBRE Y DOMICILIO DEL QUEJOSO:
[Nombre completo y domicilio para notificaciones]

II. NOMBRE Y DOMICILIO DEL TERCERO INTERESADO:
[Parte contraria en el juicio de origen]

III. AUTORIDADES RESPONSABLES:
a) ORDENADORA: C. Juez [N°] Civil del [Distrito] Judicial en el Estado de Nuevo Leon, con sede en [ciudad].
b) EJECUTORA: C. Actuario adscrito al mismo juzgado.

IV. ACTO RECLAMADO:
[Describir con precision el acto: auto, resolucion, decreto, incluyendo fecha y expediente de origen]

V. PRECEPTOS CONSTITUCIONALES VIOLADOS:
Articulos 14, 16 [y los que apliquen] de la CPEUM.

VI. CONCEPTOS DE VIOLACION:
PRIMERO.- [Violacion al derecho...]
SEGUNDO.- [Violacion al derecho...]

VII. SUSPENSION DEL ACTO RECLAMADO:
[Solicitar suspension provisional y definitiva, con fundamento en arts. 128-147 LA, senialando el perjuicio de dificil reparacion y el interes social que no se afecta]

                  A T E N T A M E N T E

[FIRMA Y DATOS DEL PROFESIONAL]`
      },
      {
        id: "6-3",
        titulo: "Los Conceptos de Violacion: Tecnica de Redaccion",
        descripcion: "Los conceptos de violacion son el corazon del amparo. Su redaccion deficiente es la causa mas frecuente de sentencias desfavorables.",
        estructuraConcepto: `[NOMBRE DEL DERECHO O GARANTIA VIOLADA]:
La resolucion reclamada vulnera en perjuicio de mi representado el derecho [fundamental / garantia] de [nombre], consagrado en el articulo [X] Constitucional, en virtud de que:
1. [Explicar que dice la Constitucion / Ley de Amparo / Tratado Internacional]
2. [Explicar que hizo la autoridad responsable]
3. [Demostrar la discrepancia entre ambas]
4. [Senialar el criterio jurisprudencial que apoya la violacion]
5. [Concluir con la consecuencia juridica: la nulidad / revocacion / modificacion del acto]`,
        violaciones: [
          {
            articulo: "Articulo 14 CPEUM (Audiencia)",
            ejemplo: `La autoridad dicto resolucion sin dar oportunidad al quejoso de ser oido en defensa propia.

Conforme a la jurisprudencia reiterada del Pleno de la SCJN (Tesis P. XXXIV/2016 (10a.), Libro 25, mayo de 2016, Tomo I, pagina 451, Registro: 2010867), la violacion del derecho de audiencia es absoluta y no requiere proyeccion de danio alguno.

En el caso sub judice, el auto impugnado de fecha [FECHA] no contiene constancia alguna de que la parte quejosa haya sido oida en defensa de sus derechos antes de dictarse.`
          },
          {
            articulo: "Articulo 16 CPEUM (Legalidad y Fundamentacion)",
            ejemplo: `La resolucion carece de fundamentacion y motivacion adecuadas. La autoridad no cito el precepto legal que le faculta para actuar ni explico las razones de hecho que la llevaron a resolver como lo hizo.

La jurisprudencia del Pleno de la SCJN ha establecido que toda resolucion administrativa debe contener: (i) el precepto legal aplicable; (ii) los hechos que lo integran; y (iii) la interpretacion juridica que justifica la conclusion.

En el caso sub judice, el auto impugnado carece de [deficiencia especifica], lo que genera incertidumbre sobre los fundamentos de la resolucion.`
          },
          {
            articulo: "Articulo 17 CPEUM (Acceso a la Justicia)",
            ejemplo: `La autoridad impuso requisitos no previstos en la ley para el ejercicio de la accion, obstaculizando el acceso a la justicia.`
          }
        ]
      }
    ]
  },
  {
    id: "parte-vii",
    titulo: "Contratos: Principios de Redaccion",
    enConstruccion: true,
    secciones: [
      {
        id: "7-1",
        titulo: "Jerarquia de Fuentes en Materia Contractual (Nuevo Leon)",
        subsecciones: [
          {
            tipo: "Contratos Civiles en Nuevo Leon",
            jerarquia: [
              "1. Voluntad de las partes (autonomia de la voluntad - art. 1796 CCNL)",
              "2. Codigo Civil para el Estado de Nuevo Leon",
              "3. Codigo Civil Federal (supletorio)",
              "4. Usos y costumbres del lugar",
              "5. Principios generales del derecho"
            ]
          },
          {
            tipo: "Contratos Mercantiles",
            jerarquia: [
              "1. Codigo de Comercio (aplicable a toda la Republica)",
              "2. LGTOC (si aplica)",
              "3. CCF (suple C.Co.)"
            ]
          }
        ]
      },
      {
        id: "7-2",
        titulo: "Clausulas de Blindaje Permitidas en Contratos Civiles (NL)",
        descripcion: "Las clausulas mas importantes para la proteccion contractual en la practica neoleonesa.",
        clausulas: [
          {
            nombre: "Clausula Penal (art. 1840 CCNL)",
            definicion: "Indemnizacion pactada expresamente.",
            ventajas: [
              "No requiere acreditar danio real",
              "Su sola existencia facilita la ejecucion",
              "El juzgado unicamente puede moderarla si es notoriamente excesiva y el incumplimiento fue parcial"
            ],
            redaccion: `CLAUSULA PENAL:
Las partes acuerdan que en caso de incumplimiento de cualquiera de las obligaciones estipuladas en este contrato, el incumplidor pagara al acreedor, a titulo de pena, una cantidad equivalente a [porcentaje]% del valor total del contrato, sin que esto impida al acreedor reclamar, ademas, el cumplimiento de la obligacion incumplida y los danios y perjuicios que deriven de tal incumplimiento.`
          },
          {
            nombre: "Clausula Compromisoria / Arbitral",
            definicion: "Sometimiento a arbitraje privado o al Centro de Mediacion y Arbitraje de la Camara de Comercio de Monterrey (CANACO).",
            ventajas: [
              "Evita los tiempos del Poder Judicial",
              "Confidencialidad",
              "Pericia en materia mercantil",
              "Sentencia es ejecutable judicialmente"
            ],
            redaccion: `CLAUSULA ARBITRAL:
Cualquier controversia que se derive de la interpretacion, cumplimiento o incumplimiento del presente contrato sera resuelta mediante arbitraje, de conformidad con las reglas del Centro de Mediacion y Arbitraje de la Camara de Comercio de Monterrey (CANACO), siendo designado un arbitro conforme a dichas reglas.`
          },
          {
            nombre: "Clausula de Jurisdiccion",
            definicion: "Prorroga expresa de competencia territorial.",
            ventaja: "Permite fijar Monterrey como sede, incluso para partes domiciliadas fuera del estado.",
            redaccion: `CLAUSULA DE JURISDICCION:
Por este acto, las partes se someten expresamente a la jurisdiccion de los Juzgados de lo Civil del Estado de Nuevo Leon, en Monterrey, renunciando a cualquier otra competencia que por razon de domicilio, ubicacion de bienes o cualquier otra causa pudiera corresponderles.`,
          },
          {
            nombre: "Clausula de Intereses Moratorios",
            definicion: "En contratos civiles, pactar interes moratorio superior al legal.",
            ventaja: "Genera rendimiento automatico en caso de mora.",
            redaccion: `CLAUSULA DE INTERESES MORATORIOS:
En caso de atraso en el pago de cualquier suma adeudada conforme a este contrato, se causaran intereses moratorios a razon de [porcentaje]% mensual sobre el saldo insoluto, sin perjuicio de los derechos del acreedor para reclamar los danios y perjuicios que se deriven del incumplimiento.

NOTA: El porcentaje no puede ser usurario. La SCJN ha establecido criterios de usura que deben considerarse.`,
            nota: "Restriccion: No puede ser usurario. La SCJN ha establecido criterios de usura que deben considerarse."
          },
          {
            nombre: "Clausula de Reconocimiento de Adeudo",
            definicion: "Cada mensualidad o parcialidad constituye titulo ejecutivo independiente.",
            ventaja: "Simplifica la via procesal ejecutiva.",
            redaccion: `CLAUSULA DE RECONOCIMIENTO DE ADEUDO:
Por este acto, [deudor] reconoce tener a favor de [acreedor] la obligacion de pagar [cantidad] pesos en los terminos establecidos en este contrato. Cada pago vencido constituye auto de exequendo conforme al articulo 1391 del Codigo de Comercio.`
          }
        ]
      },
      {
        id: "7-3",
        titulo: "Estructura Obligatoria de Todo Contrato",
        secciones: [
          {
            nombre: "Datos de Identificacion",
            items: [
              "Tipo de contrato (Venta, Arrendamiento, Servicios Profesionales, etc.)",
              "Numero de contrato (para control interno del despacho)",
              "Lugar y fecha de celebracion",
              "Legislacion aplicable"
            ]
          },
          {
            nombre: "Comparecientes",
            items: [
              "Identificacion completa de cada parte",
              "Capacidad juridica (persona fisica o moral)",
              "Representacion (poder notarial, acta constitutiva)"
            ]
          },
          {
            nombre: "Declaraciones",
            plantilla: `Dec. I: Que el [vendedor/arrendador/prestador] es legitimo titular del bien/derecho/servicio objeto del contrato.
Dec. II: Que el [comprador/arrendatario/receptor] conoce el estado del bien/servicio y lo acepta en esas condiciones.
Dec. III: Que ambas partes actuan sin coaccion ni dolo.`
          },
          {
            nombre: "Clausulas",
            items: [
              "Objeto (con descripcion tecnica precisa)",
              "Precio y forma de pago",
              "Plazo y entrega",
              "Obligaciones del vendedor/arrendador/prestador",
              "Obligaciones del comprador/arrendatario/receptor",
              "Garantias",
              "Causas de rescision",
              "Clausula penal",
              "Domicilios para notificaciones",
              "Legislacion y jurisdiccion aplicable",
              "Forma de resolucion de controversias"
            ]
          },
          {
            nombre: "Firmas",
            items: [
              "Lugar, fecha y firmas de ambas partes",
              "Firmas de testigos (cuando aplique)",
              "Firma y sello del Notario (cuando aplique)"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "parte-ix",
    titulo: "Vocabulario Juridico de Elite (Mexicano)",
    enConstruccion: true,
    secciones: [
      {
        id: "9-1",
        titulo: "Verbos de Alta Precision para Escritos Mexicanos",
        verbos: [
          { verbo: "fractura", uso: "Incumplimiento grave de estandar juridico" },
          { verbo: "quebranta", uso: "Violacion de norma imperativa" },
          { verbo: "infringe", uso: "Incumplimiento de disposicion legal" },
          { verbo: "transgrede", uso: "Violacion de garantia constitucional" },
          { verbo: "vulnera", uso: "Lesion a derechos fundamentales" },
          { verbo: "subsume", uso: "Encuadramiento de hechos en norma" },
          { verbo: "acredita", uso: "Prueba de un hecho" },
          { verbo: "evidencia", uso: "Demostracion ostensible de un hecho" },
          { verbo: "constata", uso: "Verificacion de un hecho documentado" },
          { verbo: "impone", uso: "Obligacion ineludible del juzgador" },
          { verbo: "exige", uso: "Imperativo legal o jurisprudencial" },
          { verbo: "deviene", uso: "Se convierte, llega a ser" },
          { verbo: "dicta", uso: "Pronuncia una resolucion" },
          { verbo: "establece", uso: "Fija criterio jurisprudencial" },
          { verbo: "sostiene", uso: "Mantiene criterio de manera reiterada" }
        ]
      },
      {
        id: "9-2",
        titulo: "Latinismos de Uso Forense Mexicano",
        latinismos: [
          { termino: "sub judice", significado: "Bajo conocimiento del juez; el asunto que se litiga" },
          { termino: "a quo", significado: "El juez de primera instancia (en el recurso)" },
          { termino: "ad quem", significado: "El tribunal de alzada (en el recurso)" },
          { termino: "litis", significado: "La controversia planteada" },
          { termino: "ex officio", significado: "De oficio, sin peticion de parte" },
          { termino: "iter criminis", significado: "Camino del delito (materia penal)" },
          { termino: "non bis in idem", significado: "No dos veces por lo mismo" },
          { termino: "per se", significado: "Por si mismo; en si" },
          { termino: "ultra petita", significado: "Mas alla de lo pedido (vicio de la sentencia)" },
          { termino: "erga omnes", significado: "Con efectos frente a todos" },
          { termino: "ex ante", significado: "Antes del hecho; a priori" },
          { termino: "ex post", significado: "Despues del hecho; a posteriori" },
          { termino: "sui generis", significado: "De su genero; unico en su clase" },
          { termino: "pro bono", significado: "Por el bien publico" }
        ],
        enConstruccion: true
      },
      {
        id: "9-3",
        titulo: "Frases de Apertura para Fundamentos de Derecho",
        frases: [
          "Tal y como lo ha sostenido de manera reiterada el Pleno / la Primera Sala de la Suprema Corte de Justicia de la Nacion...",
          "La jurisprudencia firme del Poder Judicial de la Federacion ha establecido con claridad meridiana que...",
          "En perfecta congruencia con el criterio del Alto Tribunal...",
          "El Tribunal Colegiado del Cuarto Circuito, en criterio que resulta aplicable al presente asunto, ha determinado que...",
          "Resulta palmario que, en terminos del articulo [X] del [ordenamiento]...",
          "Conforme a lo establecido en la jurisprudencia de rubro '[RUBRO]'...",
          "A mayor abundamiento, la normativa aplicable prevista en el articulo [X] establece que...",
          "De conformidad con los principios mas elementales del ordenamiento juridico mexicano..."
        ]
      },
      {
        id: "9-4",
        titulo: "Frases de Cierre para Bloques de Subsuncion",
        frases: [
          "Por tanto, no cabe sino concluir que...",
          "La subsuncion es inevitable: al concurrir [elementos], esta H. Autoridad debera...",
          "De lo anterior se infiere, sin posibilidad de interpretacion contraria, que...",
          "En consecuencia, y atendiendo al principio de legalidad que rige la actuacion de las autoridades jurisdiccionales, el H. Juzgado debera declarar...",
          "El analisis conjunto de los hechos probados y de los criterios jurisprudenciales citados conduce, de forma ineluctable, a la conclusion de que...",
          "No es posible llegar a otra conclusion que la de que...",
          "Resulta evidente que [conclusion]...",
          "Advierto que la subsuncion propuesta es la unica compatible con [norma/jurisprudencia]..."
        ]
      },
      {
        id: "9-5",
        titulo: "Expresiones PROHIBIDAS y Sus Sustitutos",
        descripcion: "Tabla esencial para la revision final de todo escrito juridico.",
        pares: [
          { prohibido: '"creo que / me parece"', sustituto: '"Resulta palmario que" / "Conforme a..."' },
          { prohibido: '"dicho" (pronombre)', sustituto: '"tal" / "el referido" / "el antes mencionado"' },
          { prohibido: '"el mismo / la misma"', sustituto: "Repetir sustantivo o usar 'aquel'" },
          { prohibido: '"proceder a"', sustituto: '"proceder" / "realizar" / "ejecutar"' },
          { prohibido: '"en aras de"', sustituto: '"en beneficio de" / "en favor de"' },
          { prohibido: '"toda vez que"', sustituto: '"en virtud de que" / "dado que" / "puesto que"' },
          { prohibido: '"quizas / tal vez"', sustituto: "Eliminar en Fundamentos; usar en analisis adversario" },
          { prohibido: '"podria" (en propia tesis)', sustituto: "Suprimir o usar afirmacion categorica" }
        ]
      }
    ]
  },
  {
    id: "parte-x",
    titulo: "Hoja de Encargo Profesional (Nuevo Leon)",
    enConstruccion: true,
    secciones: [
      {
        id: "10-1",
        titulo: "Marco Legal de la Relacion Abogado-Cliente en Mexico",
        leyes: [
          { nombre: "Codigo Civil para el Estado de Nuevo Leon", detalle: "Contrato de prestacion de servicios profesionales (arts. 2545-2581 CCNL)" },
          { nombre: "Ley Reglamentaria del Articulo 5° Constitucional", detalle: "Relativa al ejercicio de las profesiones en el Distrito Federal (supletoria en estados)" },
          { nombre: "Estatuto y Codigo de Etica del Colegio de Abogados de Monterrey / Barra Mexicana", detalle: "Codigo deontologico profesional (BMA)" },
          { nombre: "Ley Federal para la Prevencion e Identificacion de Operaciones con Recursos de Procedencia Ilicita (LFPIORPI)", detalle: "Obliga al abogado a identificar al cliente en asuntos de riesgo" }
        ]
      },
      {
        id: "10-2",
        titulo: "Estructura de la Hoja de Encargo (Adaptada a Mexico)",
        secciones: [
          {
            num: 1,
            nombre: "Datos del Profesional",
            items: ["Nombre completo", "Cedula profesional federal", "Institucion que la expidio", "Membresia en Colegio de Abogados (numero)", "Domicilio del despacho", "Correo electronico y telefono"]
          },
          {
            num: 2,
            nombre: "Datos del Cliente",
            items: ["Nombre completo / razon social", "RFC con homoclave", "CURP (personas fisicas)", "Domicilio fiscal / contractual", "Identificacion oficial (numero y tipo)"]
          },
          {
            num: 3,
            nombre: "Objeto del Encargo",
            items: ["Descripcion precisa del asunto", "Alcance del servicio (que se incluye y que NO)", "Instancias cubiertas (primera instancia, recurso, amparo)"]
          },
          {
            num: 4,
            nombre: "Honorarios",
            items: ["Tipo: fijo / por hora / por resultado / mixto", "Monto en moneda nacional (pesos mexicanos)", "Condicion de IVA (16% sobre honorarios)", "Calendario de pagos"]
          },
          {
            num: 5,
            nombre: "Gastos Procesales",
            items: ["Distincion clara entre honorarios y gastos", "Fondo de gastos inicial (si se requiere)", "Desglose de gastos previsibles (peritajes, notificaciones, copias)"]
          },
          {
            num: 6,
            nombre: "Advertencias Obligatorias",
            items: [
              "El resultado del proceso depende de factores ajenos al profesional",
              "Existe posibilidad de condena en costas para el cliente",
              "La obligacion del profesional es de MEDIOS, no de RESULTADO",
              "Sujecion a la LFPIORPI y obligacion de identificar al cliente"
            ]
          },
          {
            num: 7,
            nombre: "Proteccion de Datos Personales",
            items: [
              "Conforme a la Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares (LFPDPPP)",
              "Aviso de privacidad simplificado integrado o por referencia"
            ]
          },
          {
            num: 8,
            nombre: "Confidencialidad",
            items: ["Deber de secreto profesional", "Excepciones legales"]
          },
          {
            num: 9,
            nombre: "Terminacion del Encargo",
            items: ["Causas de terminacion unilateral por el cliente", "Causas de renuncia del profesional", "Liquidacion de honorarios devengados"]
          },
          {
            num: 10,
            nombre: "Jurisdiccion y Ley Aplicable",
            items: ["Leyes del Estado de Nuevo Leon", "Competencia: Tribunales de Nuevo Leon", "Idioma: espanol"]
          },
          {
            num: 11,
            nombre: "Firmas",
            items: ["Lugar y fecha", "Firma autografa del profesional", "Firma autografa del cliente", "Huella digital del cliente (recomendable)"]
          }
        ]
      },
      {
        id: "10-3",
        titulo: "Redaccion de Clausulas Clave",
        clausulas: [
          {
            nombre: "Clausula de Obligacion de Medios",
            redaccion: `El Licenciado se compromete a actuar conforme a los mas altos estandares eticos y de diligencia profesional en la defensa de los derechos del cliente. Sin embargo, la ley mexicana impone que la obligacion del profesional es de MEDIOS y no de RESULTADO. Por tanto, el Licenciado no garantiza el resultado del juicio, el cual depende de factores ajenos a su control, incluyendo las decisiones de los organos jurisdiccionales.`
          },
          {
            nombre: "Clausula de Condena en Costas",
            redaccion: `El cliente reconoce que, conforme a las normas procesales aplicables, existe la posibilidad de que el organo jurisdiccional condene al cliente al pago de gastos y costas procesales en favor de la parte contraria. El Licenciado asesorara al cliente sobre estos riesgos, pero la decision final corresponde al cliente.`
          },
          {
            nombre: "Clausula LFPIORPI",
            redaccion: `Conforme a la Ley Federal para la Prevencion e Identificacion de Operaciones con Recursos de Procedencia Ilicita (LFPIORPI), el Licenciado esta obligado a obtener informacion verificable sobre la identidad del cliente. El cliente acepta proporcionar toda la informacion y documentacion requerida, incluyendo identificacion oficial con fotografia, RFC y comprobante de domicilio.`
          }
        ]
      }
    ]
  },
  {
    id: "parte-xi",
    titulo: "Integracion de Skills: Flujo de Trabajo Completo",
    enConstruccion: true,
    secciones: [
      {
        id: "11-1",
        titulo: "Orden de Ejecucion Recomendado para Escritos",
        pasos: [
          { paso: 1, nombre: "Analisis del Caso", items: ["Leer todos los documentos del cliente", "Construir la MATRIZ DE HECHOS", "Identificar la accion procesal correcta", "Verificar plazos y prescripcion"] },
          { paso: 2, nombre: "Investigacion Normativa y Jurisprudencial", items: ["Identificar normas del CCNL / CPCNL / C.Co. aplicables", "Buscar tesis en SJF (sjf2.scjn.gob.mx)", "Verificar vigencia y jerarquia de cada tesis", "Construir la MATRIZ HECHOS-DOCTRINA"] },
          { paso: 3, nombre: "Redaccion del Escrito", items: ["Encabezamiento correcto (Parte III 3.3)", "Hechos: cronologicos, numerados, documentados", "Fundamentos: subsuncion completa por patron (Parte IV 4.4)", "Petitorio: preciso y congruente", "Pruebas: clasificadas y relacionadas con hechos"] },
          { paso: 4, nombre: "Revision de Calidad", items: ["Checklist completo (Parte XII)", "Verificacion de citas del SJF", "Revision de estilo (Parte IX 9.5)", "Congruencia petitorio-hechos-fundamentos"] },
          { paso: 5, nombre: "Generacion del Documento", items: ["Formato Word profesional", "Papel tamano carta (Mexico): 12240 x 15840 DXA", "Fuente: Times New Roman 12pt o Arial 12pt", "Margenes minimos 2.5 cm (practica NL)"] }
        ]
      },
      {
        id: "11-2",
        titulo: "Advertencias sobre el Uso de IA en la Practica Juridica",
        advertencia: {
          titulo: "Responsabilidad del Profesional",
          contenido: "La jurisprudencia citada en cualquier escrito generado con la asistencia de este manual debe ser verificada de forma independiente por el licenciado en ciencias juridicas antes de presentar el escrito ante cualquier organo jurisdiccional.",
          erroresPosibles: ["Numeros de registro SJF", "Datos de publicacion", "Vigencia de tesis", "Interpretacion de jurisprudencia"],
          conclusion: "El profesional es, en todo momento, el responsable tecnico y etico del contenido del escrito."
        },
        reglaPractica: "Antes de presentar cualquier escrito, verificar cada cita del SJF directamente en https://sjf2.scjn.gob.mx. Introduce el numero de registro o el rubro exacto.",
        validacionDatos: ["Numero de registro correcto", "Tribunal emisor identificado con precision", "Epoca correcta", "Libro/Tomo/Pagina coinciden", "Rubro identico al citado"]
      }
    ]
  },
  {
    id: "parte-xii",
    titulo: "Checklist Maestro de Elite",
    enConstruccion: true,
    secciones: [
      {
        id: "12-1",
        titulo: "Pre-Redaccion",
        items: [
          "¿Se construyo la Matriz de Hechos con fechas, documentos y numeros?",
          "¿Se verifico la competencia del organo jurisdiccional?",
          "¿Se verificaron los plazos procesales y de prescripcion?",
          "¿Se identifico el tipo de procedimiento correcto?",
          "¿Se localizaron las tesis jurisprudenciales aplicables en el SJF?",
          "¿Se verifico la competencia territorial correcta?",
          "¿Se identificaron todos los documentos acreditatorios disponibles?",
          "¿Se realizo analisis de riesgo procesal preliminar?"
        ]
      },
      {
        id: "12-2",
        titulo: "Durante la Redaccion",
        subsecciones: [
          { nombre: "Encabezamiento", items: ["¿El encabezamiento identifica correctamente al juzgado / tribunal?", "¿Se incluyo el numero del juzgado (si aplica)?", "¿Se identifico el distrito judicial (si aplica)?", "¿Se escribio P R E S E N T E con espacios?"] },
          { nombre: "Hechos", items: ["¿Los Hechos estan numerados de forma secuencial?", "¿Cada Hecho tiene fecha precisa?", "¿Cada Hecho tiene lugar identificable?", "¿Cada Hecho cita el Documento que lo acredita?", "¿Los Hechos estan en orden cronologico?", "¿No hay argumentacion juridica en los Hechos (solo narrativa)?", "¿La narracion es precisa y evita generalizaciones?"] },
          { nombre: "Fundamentos de Derecho", items: ["¿Cada Fundamento aplica el metodo DOCTRINA / HECHOS / CONCLUSION?", "¿Las citas del SJF incluyen: rubro, numero de tesis, epoca, libro/tomo, fecha, pagina, registro?", "¿Cada cita se conecta con al menos un Hecho numerado de la demanda?", "¿Se usan los conectores de subsuncion correctos (Parte IV 4.4)?", "¿Hay conclusion juridica tras cada bloque de subsuncion?", "¿No hay frases dubitativas?", "¿El tono es categorico en toda la extension?"] },
          { nombre: "Petitorio", items: ["¿El petitorio es claro en una lectura rapida?", "¿Cada peticion es precisa y no ambigua?", "¿El petitorio es congruente con los Hechos y Fundamentos?", "¿No hay peticiones ultra petita (mas alla de lo pedido)?", "¿Las cuantias estan correctamente calculadas?"] },
          { nombre: "Pruebas", items: ["¿El ofrecimiento de pruebas clasifica correctamente cada medio probatorio?", "¿Cada prueba esta relacionada con el (los) Hecho(s) que acredita?", "¿Se utilizan los numeros de Hechos en el ofrecimiento de pruebas?", "¿Las pruebas documentales citan los expedientes o referencias correctas?", "¿Las pruebas periciales especifican la materia correctamente?", "¿Las pruebas testimoniales identifican a los testigos (nombre, domicilio)?"] }
        ]
      },
      {
        id: "12-3",
        titulo: "Post-Redaccion",
        subsecciones: [
          { nombre: "Estilo y Lenguaje", items: ["¿Se eliminaron todos los arcaismos?", "¿Se eliminaron las expresiones prohibidas (Parte IX 9.5)?", "pregunta dicho pronombre", "pregunta mismo misma", "pregunta proceder a", "pregunta toda vez que", "¿El vocabulario es de elite forense mexicana (Parte IX 9.1, 9.2)?", "¿Las frases de apertura y cierre son de impacto (Parte IX 9.3, 9.4)?"] },
          { nombre: "Verificacion Juridica", items: ["¿Se verificaron TODAS las tesis citadas en sjf2.scjn.gob.mx?", "¿Los numeros de registro SJF son exactos?", "¿Los datos de publicacion coinciden?", "¿Las tesis estan vigentes?", "¿La jerarquia es correcta (Parte IV 4.1)?"] },
          { nombre: "Congruencia", items: ["Sin contradiccion Hechos-Fundamentos", "Sin contradiccion entre Fundamentos", "Petitorio coherente con Hechos+Fundamentos", "Numeros de Hechos citados existen", "Numeros de Documentos coinciden"] },
          { nombre: "Formato y Presentacion", items: ["Formato carta con margenes", "Times New Roman 12pt o Arial 12pt", "Margenes minimo 2.5 cm", "TODOS los documentos adjuntos", "Firma y cedula correctas", "Fecha correcta", "Logo del despacho"] },
          { nombre: "Ultima Revision", items: ["Coherencia logica", "Legible sin adjuntos", "Sin errores ortograficos", "Abreviaturas consistentes", "Numeracion consistente"] }
        ]
      },
      {
        id: "12-4",
        titulo: "Checklist Especifico por Tipo de Escrito",
        subsecciones: [
          { nombre: "Para Demandas Civiles", items: ["Demandado tiene domicilio conocido", "Primer domicilio para notificaciones correcto", "Dentro de plazos de prescripcion", "Competencia territorial correcta (Parte V 5.1.3)"] },
          { nombre: "Para Amparos Indirectos", items: ["Autoridades identificadas (Ordenadora+Ejecutora)", "Cada Concepto autosuficiente", "Suspension provisional y definitiva", "Perjuicio dificil reparacion acreditado"] },
          { nombre: "Para Amparos Directos", items: ["Sentencia combatida identificada", "Agravios atacan motivacion directamente", "Sin agravios genericos"] },
          { nombre: "Para Recursos de Apelacion", items: ["Resolucion impugnada identificada", "Cada Agravio autonomo", "Sin agravios que reiteren lo favorable"] }
        ]
      },
      {
        id: "12-5",
        titulo: "Fin del Manual ARCHITECT-LITIGATOR-PRO MX-NL v1.0",
        esFinal: true,
        resumenEjecutivo: {
          titulo: "Resumen Ejecutivo",
          componentes: ["12 PARTES de instruccion completa", "3 PILARES de redaccion de elite", "4 PATRONES de subsuncion jurisprudencial", "10+ plantillas de escritos procesales", "CHECKLISTS maestros", "NORMATIVA aplicable a Nuevo Leon y PJF", "JURISPRUDENCIA del Pleno y Salas de la SCJN"],
          verificacion: "Toda cita jurisprudencial DEBE validarse en https://sjf2.scjn.gob.mx",
          responsabilidad: "El profesional firmante es el unico responsable del contenido.",
          metadata: [
            { campo: "Ultima actualizacion", valor: "24 de junio de 2026" },
            { campo: "Version", valor: "1.0" },
            { campo: "Autor", valor: "Edgar Jair Mireles Gonzalez" },
            { campo: "Jurisdiccion", valor: "Mexico / Nuevo Leon / Cuarto Circuito" }
          ]
        }
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