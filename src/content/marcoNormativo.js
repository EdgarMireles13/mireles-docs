// Marco Normativo Mexicano - Datos estructurados
// Partes II, III, IV, V y VI (parcial) del Manual de Litigacion

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
[Solicitar suspension provisional y definitiva, con fundamento en arts. 128-147 LA, senialando el perjuicio... CONTINUA]`,
        seccionesExplicadas: [
          { num: "I", nombre: "Nombre y domicilio del quejoso", detalle: "Nombre completo y domicilio para notificaciones" },
          { num: "II", nombre: "Tercero interesado", detalle: "Parte contraria en el juicio de origen" },
          { num: "III", nombre: "Autoridades responsables", detalle: "Separar ordenadora y ejecutora" },
          { num: "IV", nombre: "Acto reclamado", detalle: "Descripcion precisa con fecha y expediente" },
          { num: "V", nombre: "Preceptos violados", detalle: "Art. 14, 16 CPEUM y los que apliquen" },
          { num: "VI", nombre: "Conceptos de violacion", detalle: "Numerados (PRIMERO, SEGUNDO, ...)" },
          { num: "VII", nombre: "Suspension", detalle: "Arts. 128-147 LA; provisional y definitiva" }
        ],
        enConstruccion: true
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