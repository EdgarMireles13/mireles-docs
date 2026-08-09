import { useState, useEffect } from "react";

export function MarcoNormativo({ partes }) {
  const [parteActiva, setParteActiva] = useState(partes[0]?.id || null);
  const [seccionActiva, setSeccionActiva] = useState(partes[0]?.secciones[0]?.id || null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (!parteActiva && partes.length > 0) {
      setParteActiva(partes[0].id);
      setSeccionActiva(partes[0].secciones[0]?.id || null);
    }
  }, [partes, parteActiva]);

  const parte = partes.find((p) => p.id === parteActiva);

  const seccionesFiltradas = parte?.secciones.filter((s) => {
    if (!busqueda.trim()) return true;
    const texto = JSON.stringify(s).toLowerCase();
    return texto.includes(busqueda.toLowerCase());
  }) || [];

  const irASeccion = (parteId, secId) => {
    setParteActiva(parteId);
    setSeccionActiva(secId);
    setTimeout(() => {
      document.getElementById(`sec-${secId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-5" data-testid="marco-normativo">
      {/* Sidebar */}
      <aside className="lg:sticky lg:top-4 lg:self-start bg-white border border-gray-200 rounded-lg p-4 max-h-[85vh] overflow-y-auto">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Buscar..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-slate-700"
          />
        </div>
        {partes.map((p) => (
          <div key={p.id} className="mb-3">
            <div
              className={`text-xs font-bold uppercase tracking-wide mb-1 ${parteActiva === p.id ? "text-slate-800" : "text-gray-500"}`}
            >
              {p.titulo}
            </div>
            <ul className="space-y-1">
              {p.secciones.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => irASeccion(p.id, s.id)}
                    className={`w-full text-left text-xs px-2 py-1.5 rounded transition ${
                      parteActiva === p.id && seccionActiva === s.id
                        ? "bg-slate-100 text-slate-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {s.titulo}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Contenido */}
      <main className="bg-white border border-gray-200 rounded-lg p-6">
        {seccionesFiltradas.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <div className="text-3xl mb-2">🔍</div>
            <div className="text-sm">Sin resultados para "{busqueda}"</div>
          </div>
        ) : (
          seccionesFiltradas.map((s) => (
            <section key={s.id} id={`sec-${s.id}`} className="mb-8 pb-8 border-b border-gray-100 last:border-0">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{s.titulo}</h3>
              {s.resumen && <p className="text-sm text-gray-700 mb-3">{s.resumen}</p>}
              {s.descripcion && <p className="text-sm text-gray-700 mb-3">{s.descripcion}</p>}

              {s.niveles && s.niveles.length > 0 && (
                <div className="my-4">
                  <PiramideAuto niveles={s.niveles} />
                </div>
              )}

              {s.reglaConflicto && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 my-3 text-sm">
                  <div className="font-semibold text-amber-900 mb-1">Regla de Conflicto Normativo</div>
                  <div className="text-amber-800">{s.reglaConflicto}</div>
                </div>
              )}

              {s.categorias && (
                <div className="space-y-4 my-4">
                  {s.categorias.map((cat, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-200 rounded p-3">
                      <div className="font-semibold text-sm text-gray-800 mb-2">{cat.materia}</div>
                      <ul className="space-y-1.5">
                        {cat.leyes.map((l, j) => (
                          <li key={j} className="text-sm">
                            <span className="font-medium text-gray-900">{l.nombre}</span>
                            <span className="text-gray-600"> — {l.descripcion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {s.tabla && <TablaCPCNL data={s.tabla} />}

              {s.principio && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-3 text-sm">
                  <div className="font-semibold text-blue-900 mb-1">Principio Pro Persona</div>
                  <div className="text-blue-800">{s.principio}</div>
                </div>
              )}

              {s.formula && (
                <div className="bg-slate-50 border-l-4 border-slate-700 p-3 my-3">
                  <div className="text-xs font-bold text-slate-700 mb-1">FORMULA</div>
                  <pre className="whitespace-pre-wrap font-mono text-xs text-slate-800">{s.formula}</pre>
                </div>
              )}

              {s.ejemplos && (
                <div className="space-y-3 my-4">
                  {s.ejemplos.map((e, i) => (
                    <div key={i} className="bg-emerald-50 border-l-4 border-emerald-500 p-3">
                      <div className="font-semibold text-sm text-emerald-900 mb-1">{e.titulo}</div>
                      <div className="text-sm text-emerald-800">{e.descripcion}</div>
                    </div>
                  ))}
                </div>
              )}

              {s.organos && (
                <div className="space-y-4 my-4">
                  {s.organos.map((o, i) => (
                    <div key={i} className="border border-gray-200 rounded p-3">
                      <div className="font-semibold text-sm text-gray-900 mb-2">{o.nombre}</div>
                      {o.integracion && (
                        <div className="mb-2">
                          <div className="text-xs font-bold text-gray-600 uppercase mb-1">Integracion</div>
                          <ul className="text-xs text-gray-700 space-y-0.5">
                            {o.integracion.map((x, j) => <li key={j}>• {x}</li>)}
                          </ul>
                        </div>
                      )}
                      {o.funciones && (
                        <div className="mb-2">
                          <div className="text-xs font-bold text-gray-600 uppercase mb-1">Funciones</div>
                          <ul className="text-xs text-gray-700 space-y-0.5">
                            {o.funciones.map((x, j) => <li key={j}>• {x}</li>)}
                          </ul>
                        </div>
                      )}
                      {o.tipos && (
                        <div className="mb-2">
                          <div className="text-xs font-bold text-gray-600 uppercase mb-1">Tipos</div>
                          <ul className="text-xs text-gray-700 space-y-0.5">
                            {o.tipos.map((x, j) => <li key={j}>• {x}</li>)}
                          </ul>
                        </div>
                      )}
                      {o.competencia && (
                        <div className="text-xs text-gray-600">
                          <span className="font-bold">Competencia: </span>
                          {Array.isArray(o.competencia) ? (
                            <ul className="mt-1 space-y-0.5">{o.competencia.map((x, j) => <li key={j}>• {x}</li>)}</ul>
                          ) : o.competencia}
                        </div>
                      )}
                      {o.numeracion && (
                        <div>
                          <div className="text-xs font-bold text-gray-600 uppercase mb-1">Numeracion</div>
                          <ul className="text-xs text-gray-700 space-y-0.5">
                            {o.numeracion.map((x, j) => <li key={j}>• {x}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {s.circuito && (
                <div className="bg-violet-50 border-l-4 border-violet-500 p-3 my-3 text-sm">
                  <span className="font-semibold text-violet-900">Circuito aplicable: </span>
                  <span className="text-violet-800">{s.circuito}</span>
                </div>
              )}

              {s.tribunales && (
                <div className="space-y-4 my-4">
                  {s.tribunales.map((t, i) => (
                    <div key={i} className="border border-gray-200 rounded p-3">
                      <div className="font-semibold text-sm text-gray-900 mb-2">{t.nombre}</div>
                      {t.ubicacion && <div className="text-xs text-gray-600 mb-2"><b>Ubicacion:</b> {t.ubicacion}</div>}
                      {t.funciones && (
                        <div>
                          <div className="text-xs font-bold text-gray-600 uppercase mb-1">Funciones</div>
                          <ul className="text-xs text-gray-700 space-y-0.5">
                            {t.funciones.map((x, j) => <li key={j}>• {x}</li>)}
                          </ul>
                        </div>
                      )}
                      {t.integracion && (
                        <div className="mt-2">
                          <div className="text-xs font-bold text-gray-600 uppercase mb-1">Integracion</div>
                          <ul className="text-xs text-gray-700 space-y-0.5">
                            {t.integracion.map((x, j) => <li key={j}>• {x}</li>)}
                          </ul>
                        </div>
                      )}
                      {t.competencia && (
                        <div className="mt-2">
                          <div className="text-xs font-bold text-gray-600 uppercase mb-1">Competencia</div>
                          <ul className="text-xs text-gray-700 space-y-0.5">
                            {t.competencia.map((x, j) => <li key={j}>• {x}</li>)}
                          </ul>
                        </div>
                      )}
                      {t.numeracion && (
                        <div className="mt-2">
                          <div className="text-xs font-bold text-gray-600 uppercase mb-1">Numeracion</div>
                          <ul className="text-xs text-gray-700 space-y-0.5">
                            {t.numeracion.map((x, j) => <li key={j}>• {x}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {s.encabezados && <EncabezadosLista encabezados={s.encabezados} />}

              {s.errores && (
                <div className="my-4">
                  <table className="w-full text-xs border border-gray-200 rounded overflow-hidden">
                    <thead className="bg-red-50">
                      <tr>
                        <th className="text-left p-2 font-semibold text-red-900">Error</th>
                        <th className="text-left p-2 font-semibold text-red-900">Efecto</th>
                        <th className="text-left p-2 font-semibold text-red-900">Solucion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.errores.map((e, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="p-2 font-medium">{e.error}</td>
                          <td className="p-2 text-gray-600">{e.efecto}</td>
                          <td className="p-2 text-emerald-700">{e.solucion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {s.tipos && s.jerarquia && (
                <div className="space-y-4 my-4">
                  <div>
                    <div className="font-semibold text-sm mb-2">Tipos de criterios</div>
                    <table className="w-full text-xs border border-gray-200 rounded overflow-hidden">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-2 font-semibold">Tipo</th>
                          <th className="text-left p-2 font-semibold">Fuerza</th>
                          <th className="text-left p-2 font-semibold">Requisito</th>
                        </tr>
                      </thead>
                      <tbody>
                        {s.tipos.map((t, i) => (
                          <tr key={i} className="border-t border-gray-100">
                            <td className="p-2 font-medium">{t.tipo}</td>
                            <td className="p-2">
                              <span className={`px-2 py-0.5 rounded-full text-xs ${t.fuerza === "Obligatoria" ? "bg-emerald-100 text-emerald-800" : t.fuerza === "Alta jerarquia" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-700"}`}>
                                {t.fuerza}
                              </span>
                            </td>
                            <td className="p-2 text-gray-600">{t.requisito}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-2">Jerarquia (art. 217 LA)</div>
                    <ol className="space-y-2">
                      {s.jerarquia.map((j, i) => (
                        <li key={i} className="bg-blue-50 border-l-4 border-blue-500 p-2 rounded-r">
                          <div className="font-medium text-sm text-blue-900">{i + 1}. {j.nombre}</div>
                          <div className="text-xs text-blue-700">{j.alcance}</div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              {s.formato && (
                <div className="bg-slate-50 border-l-4 border-slate-700 p-3 my-3">
                  <div className="text-xs font-bold text-slate-700 mb-1">FORMATO OFICIAL</div>
                  <pre className="whitespace-pre-wrap font-mono text-xs text-slate-800">{s.formato}</pre>
                </div>
              )}

              {s.ejemplos && s.ejemplos[0]?.cita && (
                <div className="space-y-3 my-4">
                  {s.ejemplos.map((e, i) => (
                    <div key={i} className="border border-gray-200 rounded p-3 bg-white">
                      <div className="text-xs font-bold text-gray-700 uppercase mb-1">{e.tipo}</div>
                      {e.rubro && <div className="font-medium text-sm mb-1">{e.rubro}</div>}
                      <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 bg-gray-50 p-2 rounded">{e.cita}</pre>
                    </div>
                  ))}
                </div>
              )}

              {s.identificadoresSala && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">Identificadores de Sala/Organo</div>
                  <table className="w-full text-xs border border-gray-200 rounded overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-2 font-mono font-semibold">Codigo</th>
                        <th className="text-left p-2 font-semibold">Nombre</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.identificadoresSala.map((x, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="p-2 font-mono">{x.codigo}</td>
                          <td className="p-2 text-gray-700">{x.nombre}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {s.epocas && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">Identificadores de Epoca</div>
                  <table className="w-full text-xs border border-gray-200 rounded overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-2 font-mono font-semibold">Codigo</th>
                        <th className="text-left p-2 font-semibold">Periodo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.epocas.map((x, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="p-2 font-mono">{x.codigo}</td>
                          <td className="p-2 text-gray-700">{x.nombre}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {s.fuentes && (
                <div className="space-y-2 my-4">
                  {s.fuentes.map((f, i) => (
                    <div key={i} className="border border-gray-200 rounded p-3 bg-white">
                      <div className="font-semibold text-sm">{f.nombre}</div>
                      {f.url && <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline break-all">{f.url}</a>}
                      <div className="text-xs text-gray-600 mt-1">{f.descripcion}</div>
                    </div>
                  ))}
                </div>
              )}

              {s.busquedaNL && (
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3 my-3">
                  <div className="text-xs font-bold text-indigo-900 mb-2">Busqueda especifica para Nuevo Leon (Cuarto Circuito)</div>
                  <ol className="space-y-1">
                    {s.busquedaNL.map((p, i) => (
                      <li key={i} className="text-xs text-indigo-800"><b>{i + 1}.</b> {p}</li>
                    ))}
                  </ol>
                </div>
              )}

              {s.pasos && (
                <div className="space-y-3 my-4">
                  {s.pasos.map((p, i) => (
                    <div key={i} className="border border-gray-200 rounded p-3 bg-white">
                      <div className="text-xs font-bold text-gray-700 mb-1">PASO {p.paso} - {p.nombre}</div>
                      <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 bg-slate-50 p-2 rounded">{p.formula}</pre>
                    </div>
                  ))}
                </div>
              )}

              {s.conectores && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">Conectores de Subsuncion</div>
                  <table className="w-full text-xs border border-gray-200 rounded overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-2 font-semibold">Conector</th>
                        <th className="text-left p-2 font-semibold">Uso</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.conectores.map((c, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="p-2 font-mono text-blue-700">"{c.texto}"</td>
                          <td className="p-2 text-gray-700">{c.uso}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {s.antes && s.despues && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="border-2 border-red-200 rounded p-3 bg-red-50/30">
                    <div className="text-xs font-bold text-red-700 uppercase mb-2">❌ Antes (Cita Huerfana)</div>
                    <pre className="whitespace-pre-wrap text-xs text-gray-800 mb-2">{s.antes.contenido}</pre>
                    <div className="text-xs font-bold text-red-700 mb-1">Defectos:</div>
                    <ul className="text-xs text-red-700 space-y-0.5">
                      {s.antes.defectos.map((d, i) => <li key={i}>• {d}</li>)}
                    </ul>
                  </div>
                  <div className="border-2 border-emerald-200 rounded p-3 bg-emerald-50/30">
                    <div className="text-xs font-bold text-emerald-700 uppercase mb-2">✓ Despues (Subsuncion Completa)</div>
                    <pre className="whitespace-pre-wrap text-xs text-gray-800 mb-2 max-h-60 overflow-y-auto">{s.despues.contenido}</pre>
                    <div className="text-xs font-bold text-emerald-700 mb-1">Fortalezas:</div>
                    <ul className="text-xs text-emerald-700 space-y-0.5">
                      {s.despues.fortalezas.map((f, i) => <li key={i}>• {f}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              {s.requisitos && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">{s.requisitos.titulo}</div>
                  <p className="text-sm text-gray-700 mb-3">{s.requisitos.introduccion}</p>
                  <ol className="space-y-2">
                    {s.requisitos.items.map((it, i) => (
                      <li key={i} className="bg-gray-50 border-l-4 border-gray-400 p-2 rounded-r">
                        <div className="font-medium text-sm"><b>{it.num}.</b> {it.nombre}</div>
                        <div className="text-xs text-gray-600">{it.detalle}</div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {s.plantilla && (
                <div className="my-4">
                  <div className="text-xs font-bold text-gray-700 mb-1">PLANTILLA TIPO</div>
                  <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 bg-slate-50 border border-slate-200 p-3 rounded">{s.plantilla}</pre>
                </div>
              )}

              {s.reglaOro && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 my-3 text-sm">
                  <span className="font-semibold text-amber-900">Regla de oro: </span>
                  <span className="text-amber-800">{s.reglaOro}</span>
                </div>
              )}

              {s.plazo && (
                <div className="bg-violet-50 border-l-4 border-violet-500 p-3 my-3 text-sm">
                  <span className="font-semibold text-violet-900">Plazo: </span>
                  <span className="text-violet-800">{s.plazo}</span>
                </div>
              )}

              {s.fundamento && (
                <div className="bg-slate-50 border-l-4 border-slate-700 p-3 my-3 text-sm">
                  <span className="font-semibold text-slate-900">Fundamento: </span>
                  <span className="text-slate-800">{s.fundamento}</span>
                </div>
              )}

              {s.introduccion && (
                <p className="text-sm text-gray-700 bg-blue-50 border-l-4 border-blue-400 p-3 my-3">{s.introduccion}</p>
              )}

              {s.requisitos && Array.isArray(s.requisitos) && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">Requisitos</div>
                  <ul className="space-y-1.5">
                    {s.requisitos.map((r, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span> <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {s.argumentoNulidad && (
                <div className="bg-red-50 border-l-4 border-red-500 p-3 my-3">
                  <div className="text-xs font-bold text-red-900 mb-1">ARGUMENTO ESTANDAR PARA IMPUGNAR EMPLAZAMIENTOS DEFICIENTES</div>
                  <pre className="whitespace-pre-wrap font-mono text-xs text-red-900">{s.argumentoNulidad}</pre>
                </div>
              )}

              {s.documentosEjecucion && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">Documentos con Aparejada Ejecucion (art. 1391 C.Co.)</div>
                  <ul className="space-y-1.5">
                    {s.documentosEjecucion.map((d, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span> <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {s.estructura && (
                <div className="space-y-3 my-4">
                  {Object.entries(s.estructura).map(([k, v]) => (
                    <div key={k} className="border border-gray-200 rounded p-3 bg-white">
                      <div className="font-semibold text-xs text-gray-900 mb-2">{v.titulo}</div>
                      {v.descripcion && <p className="text-xs text-gray-600 mb-2">{v.descripcion}</p>}
                      <ul className="space-y-1">
                        {v.items.map((it, i) => (
                          <li key={i} className="text-xs text-gray-700">• {it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {s.petitorio && (
                <div className="my-4">
                  <div className="text-xs font-bold text-gray-700 mb-1">PETITORIO EJEMPLAR</div>
                  <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 bg-slate-50 border border-slate-200 p-3 rounded">{s.petitorio}</pre>
                </div>
              )}

              {s.tipos && Array.isArray(s.tipos) && s.tipos[0]?.procedeContra && (
                <div className="space-y-4 my-4">
                  {s.tipos.map((t, i) => (
                    <div key={i} className="border-2 border-violet-200 rounded p-3 bg-violet-50/30">
                      <div className="font-semibold text-sm text-violet-900 mb-2">{t.nombre}</div>
                      <div className="mb-2">
                        <div className="text-xs font-bold text-violet-700 uppercase mb-1">Procede contra</div>
                        <ul className="space-y-1">
                          {t.procedeContra.map((p, j) => (
                            <li key={j} className="text-xs text-gray-700">• {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-2 rounded">
                        <div className="text-xs font-bold text-emerald-700 mb-1">Ventaja estrategica</div>
                        <div className="text-xs text-emerald-800">{t.ventaja}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {s.seccionesExplicadas && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">Secciones de la demanda</div>
                  <div className="space-y-2">
                    {s.seccionesExplicadas.map((sec, i) => (
                      <div key={i} className="bg-gray-50 border-l-4 border-gray-400 p-2 rounded-r">
                        <div className="font-medium text-sm"><b>{sec.num}.</b> {sec.nombre}</div>
                        <div className="text-xs text-gray-600">{sec.detalle}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {s.estructuraConcepto && (
                <div className="my-4">
                  <div className="text-xs font-bold text-gray-700 mb-1">ESTRUCTURA DE CADA CONCEPTO DE VIOLACION</div>
                  <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 bg-slate-50 border border-slate-200 p-3 rounded">{s.estructuraConcepto}</pre>
                </div>
              )}

              {s.violaciones && (
                <div className="space-y-3 my-4">
                  {s.violaciones.map((v, i) => (
                    <div key={i} className="border-2 border-red-200 rounded p-3 bg-red-50/30">
                      <div className="font-semibold text-sm text-red-900 mb-2">⚠️ {v.articulo}</div>
                      <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 bg-white p-2 rounded border border-gray-200">{v.ejemplo}</pre>
                    </div>
                  ))}
                </div>
              )}

              {s.subsecciones && (
                <div className="space-y-4 my-4">
                  {s.subsecciones.map((sub, i) => (
                    <div key={i} className="border border-gray-200 rounded p-3 bg-white">
                      <div className="font-semibold text-sm text-gray-900 mb-2">{sub.tipo}</div>
                      <ol className="space-y-1">
                        {sub.jerarquia.map((item, j) => (
                          <li key={j} className="text-sm text-gray-700 bg-gray-50 px-2 py-1 rounded">{item}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              )}

              {s.clausulas && (
                <div className="space-y-4 my-4">
                  {s.clausulas.map((c, i) => (
                    <div key={i} className="border-2 border-indigo-200 rounded p-3 bg-indigo-50/20">
                      <div className="font-semibold text-sm text-indigo-900 mb-1">{c.nombre}</div>
                      <div className="text-xs text-gray-700 mb-2"><b>Que es:</b> {c.definicion}</div>
                      {c.ventajas && (
                        <div className="mb-2">
                          <div className="text-xs font-bold text-emerald-700 mb-1">Ventajas</div>
                          <ul className="space-y-0.5">
                            {c.ventajas.map((v, j) => (
                              <li key={j} className="text-xs text-gray-700 flex items-start gap-1">
                                <span className="text-emerald-600">✓</span> {v}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {c.ventaja && (
                        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-2 rounded mb-2 text-xs">
                          <b>Ventaja:</b> {c.ventaja}
                        </div>
                      )}
                      <div className="text-xs font-bold text-gray-700 mb-1">REDACCION</div>
                      <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 bg-white border border-gray-200 p-2 rounded">{c.redaccion}</pre>
                    </div>
                  ))}
                </div>
              )}

              {s.verbos && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">Verbos de alta precision</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {s.verbos.map((v, i) => (
                      <div key={i} className="bg-emerald-50 border-l-4 border-emerald-500 p-2 rounded">
                        <div className="font-mono font-bold text-emerald-900">{v.verbo}</div>
                        <div className="text-xs text-gray-700">{v.uso}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {s.latinismos && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">Latinismos de uso forense</div>
                  <table className="w-full text-xs border border-gray-200 rounded overflow-hidden">
                    <thead className="bg-slate-700 text-white">
                      <tr>
                        <th className="text-left p-2 font-semibold">Latinismo</th>
                        <th className="text-left p-2 font-semibold">Significado y uso</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.latinismos.map((l, i) => (
                        <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                          <td className="p-2 font-mono font-bold text-violet-700 italic">{l.termino}</td>
                          <td className="p-2 text-gray-700">{l.significado}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {s.frases && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">Frases listas para usar</div>
                  <ul className="space-y-2">
                    {s.frases.map((f, i) => (
                      <li key={i} className="bg-amber-50 border-l-4 border-amber-500 p-2 rounded text-sm text-gray-800 italic">
                        "{f}"
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {s.nota && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 my-3 text-sm">
                  <span className="font-semibold text-amber-900">Nota: </span>
                  <span className="text-amber-800">{s.nota}</span>
                </div>
              )}

              {s.secciones && Array.isArray(s.secciones) && s.secciones[0]?.items && (
                <div className="space-y-3 my-4">
                  {s.secciones.map((sec, i) => (
                    <div key={i} className="border border-gray-200 rounded p-3 bg-white">
                      <div className="font-semibold text-sm text-gray-900 mb-2">{sec.nombre}</div>
                      {sec.items && (
                        <ul className="space-y-1">
                          {sec.items.map((it, j) => (
                            <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-emerald-600 font-bold">✓</span> <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {sec.plantilla && (
                        <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 bg-slate-50 border border-slate-200 p-3 rounded mt-2">{sec.plantilla}</pre>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {s.pares && (
                <div className="my-4">
                  <div className="font-semibold text-sm mb-2">Reglas de sustitucion</div>
                  <div className="space-y-2">
                    {s.pares.map((p, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="bg-red-50 border-l-4 border-red-500 p-2 rounded">
                          <div className="text-xs font-bold text-red-700 uppercase mb-1">❌ Prohibido</div>
                          <div className="font-mono text-sm text-red-900">{p.prohibido}</div>
                        </div>
                        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-2 rounded">
                          <div className="text-xs font-bold text-emerald-700 uppercase mb-1">✓ Sustituir por</div>
                          <div className="font-mono text-sm text-emerald-900">{p.sustituto}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {s.leyes && Array.isArray(s.leyes) && (
                <div className="space-y-3 my-4">
                  {s.leyes.map((l, i) => (
                    <div key={i} className="border border-gray-200 rounded p-3 bg-white">
                      <div className="font-semibold text-sm text-gray-900">{l.nombre}</div>
                      <div className="text-xs text-gray-600 mt-1">{l.detalle}</div>
                    </div>
                  ))}
                </div>
              )}

              {s.enConstruccion && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 my-3 text-sm">
                  <span className="font-semibold text-amber-900">🚧 En construccion: </span>
                  <span className="text-amber-800">Esta seccion se completara con el resto del material del Manual.</span>
                </div>
              )}
            </section>
          ))
        )}
      </main>
    </div>
  );
}

function PiramideAuto({ niveles }) {
  return <PiramideImport niveles={niveles} />;
}

function EncabezadosLista({ encabezados }) {
  const [copiado, setCopiado] = useState(null);

  const copy = (id, txt) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(txt);
    }
    setCopiado(id);
    setTimeout(() => setCopiado(null), 2000);
  };

  return (
    <div className="space-y-3 my-4">
      {encabezados.map((e) => (
        <div key={e.id} className="border border-gray-200 rounded p-3 bg-white">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-sm text-gray-900">{e.organo}</div>
            <button
              onClick={() => copy(e.id, e.plantilla)}
              className={`text-xs px-2.5 py-1 rounded text-white ${copiado === e.id ? "bg-emerald-600" : "bg-slate-700 hover:bg-slate-800"}`}
            >
              {copiado === e.id ? "✓ Copiado" : "Copiar"}
            </button>
          </div>
          <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 bg-slate-50 p-2 rounded">{e.plantilla}</pre>
          {e.ejemplo && <div className="mt-2 text-xs text-gray-500"><b>Ejemplo:</b> <pre className="whitespace-pre-wrap font-mono mt-1">{e.ejemplo}</pre></div>}
          {e.nota && <div className="mt-2 text-xs text-amber-700 bg-amber-50 p-2 rounded"><b>Nota:</b> {e.nota}</div>}
        </div>
      ))}
    </div>
  );
}

function TablaCPCNL({ data }) {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full text-xs border border-gray-200 rounded overflow-hidden">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="text-left p-2 font-semibold">Articulos</th>
            <th className="text-left p-2 font-semibold">Materia</th>
            <th className="text-left p-2 font-semibold">Aplicacion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
              <td className="p-2 font-mono font-bold text-slate-700">{r.rango}</td>
              <td className="p-2">{r.materia}</td>
              <td className="p-2 text-gray-600">{r.aplicacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { PiramideNormativa as PiramideImport } from "./PiramideNormativa";
