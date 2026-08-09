import { useState, useEffect } from "react";
import { TIPOS, ESTADOS, PLANTILLAS, FIELD_CFG, BLANK_EXP } from "./config/index.js";
import { generateDoc } from "./generators/index.js";
import { store, KEYS } from "./utils/store.js";
import { fmtFecha, tipoL, estadoCls, estadoL, uid } from "./utils/helpers.js";
import { ToastProvider, useToast, useConfirm } from "./components/Toast.jsx";
import { BorradorList } from "./components/BorradorItem.jsx";
import { MarcoNormativo } from "./components/MarcoNormativo.jsx";
import { PARTES } from "./content/marcoNormativo.js";

function Stepper({ step }) {
  const steps = ["Expediente", "Plantilla", "Datos", "Vista previa"];
  return (
    <div className="flex items-center gap-2 mb-5 flex-wrap" data-testid="stepper">
      {steps.map((s, i) => {
        const n = i + 1;
        const active = n === step;
        const done = n < step;
        return (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                done ? "bg-emerald-600 text-white" : active ? "bg-slate-800 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              {done ? "✓" : n}
            </div>
            <span className={`text-xs ${active ? "text-slate-900 font-semibold" : "text-gray-500"}`}>{s}</span>
            {n < steps.length && <div className="w-6 h-px bg-gray-300" />}
          </div>
        );
      })}
    </div>
  );
}

function Tabs({ tab, setTab, activos, borradoresCount }) {
  const items = [
    { id: "expedientes", l: "📁 Expedientes", badge: activos || null },
    { id: "generador",   l: "✍️ Generar" },
    { id: "marco",       l: "📚 Marco" },
    { id: "borradores",  l: "📄 Borradores", badge: borradoresCount || null },
  ];
  return (
    <div className="bg-white border-b border-gray-200 px-5 flex">
      {items.map((t) => (
        <button
          key={t.id}
          onClick={() => setTab(t.id)}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            tab === t.id ? "border-slate-700 text-slate-800" : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          {t.l}
          {t.badge ? (
            <span className="ml-1.5 bg-slate-700 text-white text-xs rounded-full px-1.5 py-0.5">{t.badge}</span>
          ) : null}
        </button>
      ))}
    </div>
  );
}

function Field({ label, v, onChange, ph }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-600 mb-1">{label}</span>
      <input
        value={v || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={ph}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-slate-700"
      />
    </label>
  );
}

function AppInner() {
  const toast = useToast();
  const { confirm, Dialog: ConfirmDialog } = useConfirm();

  const [tab, setTab] = useState("expedientes");
  const [expedientes, setExps] = useState([]);
  const [borradores, setBors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [expForm, setEF] = useState(BLANK_EXP);
  const [formErr, setFormErr] = useState("");

  const [gStep, setGStep] = useState(1);
  const [selExp, setSelExp] = useState(null);
  const [selPl, setSelPl] = useState(null);
  const [fields, setFields] = useState({});
  const [docTxt, setDocTxt] = useState("");
  const [copied, setCopied] = useState(false);
  const [borNom, setBorNom] = useState("");
  const [saveOk, setSaveOk] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const e = (await store.get(KEYS.EXPEDIENTES)) || [];
        const b = (await store.get(KEYS.BORRADORES)) || [];
        if (mounted) {
          setExps(e);
          setBors(b);
        }
      } catch (err) {
        console.error("Error cargando datos:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const persistExps = async (u) => {
    setExps(u);
    await store.set(KEYS.EXPEDIENTES, u);
  };
  const persistBors = async (u) => {
    setBors(u);
    await store.set(KEYS.BORRADORES, u);
  };

  const closeModal = () => {
    setShowForm(false);
    setEditId(null);
    setEF(BLANK_EXP);
    setFormErr("");
  };

  const saveExp = async () => {
    if (!expForm.numero.trim()) {
      setFormErr("El numero de expediente es obligatorio.");
      return;
    }
    setFormErr("");
    let upd;
    if (editId) {
      upd = expedientes.map((e) => (e.id === editId ? { ...e, ...expForm } : e));
    } else {
      upd = [...expedientes, { ...expForm, id: uid(), createdAt: new Date().toISOString() }];
    }
    await persistExps(upd);
    toast.success(editId ? "Expediente actualizado." : "Expediente creado.");
    closeModal();
  };

  const openEdit = (exp) => {
    setEditId(exp.id);
    setEF({
      numero: exp.numero || "",
      tipo: exp.tipo || "amparo_indirecto",
      juzgado: exp.juzgado || "",
      quejoso: exp.quejoso || "",
      autoridad: exp.autoridad || "",
      tercero: exp.tercero || "",
      estado: exp.estado || "activo",
      notas: exp.notas || "",
    });
    setShowForm(true);
  };

  const deleteExp = async (id) => {
    const ok = await confirm("¿Eliminar este expediente? Esta accion no se puede deshacer.");
    if (!ok) return;
    const removed = expedientes.find((e) => e.id === id);
    await persistExps(expedientes.filter((e) => e.id !== id));
    toast.show("Expediente eliminado.", {
      type: "warning",
      duration: 5000,
      action: {
        label: "Deshacer",
        onClick: async () => {
          await persistExps([...expedientes, removed]);
          toast.success("Expediente restaurado.");
        },
      },
    });
  };

  const resetGen = () => {
    setGStep(1);
    setSelExp(null);
    setSelPl(null);
    setFields({});
    setDocTxt("");
    setBorNom("");
    setSaveOk(false);
  };

  const handleGenerate = () => {
    setDocTxt(generateDoc(selPl, selExp, fields));
    setGStep(4);
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(docTxt);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveBor = async () => {
    const pl = PLANTILLAS.find((p) => p.id === selPl);
    const nom = borNom.trim() || `${pl?.label || "Borrador"} - Exp. ${selExp.numero} - ${new Date().toLocaleDateString("es-MX")}`;
    const nb = {
      id: uid(),
      nombre: nom,
      texto: docTxt,
      expediente: selExp.numero,
      plantilla: selPl,
      fecha: new Date().toISOString(),
    };
    await persistBors([nb, ...borradores]);
    toast.success("Borrador guardado.");
    setSaveOk(true);
    setBorNom("");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center text-gray-400">
          <div className="text-4xl mb-2">⏳</div>
          <div className="text-sm">Cargando...</div>
        </div>
      </div>
    );
  }

  const activos = expedientes.filter((e) => e.estado === "activo").length;

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
      <div className="bg-slate-800 text-white px-5 py-3 flex items-center justify-between">
        <div>
          <div className="font-bold text-base leading-tight">⚖️ Mireles Gonzalez &amp; Asociados</div>
          <div className="text-slate-400 text-xs">Generador de Documentos · Litigacion NL</div>
        </div>
        <div className="text-slate-400 text-xs text-right hidden sm:block">
          <div>Lic. Edgar Jair Mireles Gonzalez</div>
          <div>Cedula 14924346 · TSJ-NL 24499</div>
        </div>
      </div>

      <Tabs tab={tab} setTab={setTab} activos={activos} borradoresCount={borradores.length} />

      <div className="p-5 max-w-3xl mx-auto">
        {tab === "expedientes" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Expedientes registrados</h2>
              <button
                onClick={() => {
                  setEditId(null);
                  setEF(BLANK_EXP);
                  setFormErr("");
                  setShowForm(true);
                }}
                className="bg-slate-700 text-white px-3 py-2 rounded text-sm hover:bg-slate-800"
              >
                + Nuevo expediente
              </button>
            </div>
            {expedientes.length === 0 ? (
              <div className="text-center py-14 text-gray-400">
                <div className="text-4xl mb-3">📂</div>
                <div className="text-sm">Sin expedientes registrados.</div>
              </div>
            ) : (
              <div className="space-y-3">
                {expedientes.map((exp) => (
                  <div key={exp.id} className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-900">{exp.numero || "Sin numero"}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${estadoCls(ESTADOS)(exp.estado)}`}>
                            {estadoL(ESTADOS)(exp.estado)}
                          </span>
                          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                            {tipoL(TIPOS)(exp.tipo)}
                          </span>
                        </div>
                        {exp.quejoso && (
                          <div className="text-sm text-gray-600">
                            Quejoso/Actor: <span className="font-medium">{exp.quejoso}</span>
                          </div>
                        )}
                        {exp.autoridad && (
                          <div className="text-sm text-gray-600">
                            Autoridad/Demandado: <span className="font-medium">{exp.autoridad}</span>
                          </div>
                        )}
                        {exp.juzgado && <div className="text-xs text-gray-400 mt-0.5">{exp.juzgado}</div>}
                        {exp.notas && <div className="mt-2 text-xs text-gray-500 bg-gray-50 p-2 rounded">{exp.notas}</div>}
                      </div>
                      <div className="flex flex-col gap-1.5 shrink-0">
                        <button
                          onClick={() => {
                            setSelExp(exp);
                            setTab("generador");
                            setGStep(2);
                          }}
                          className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1.5 rounded hover:bg-emerald-100 whitespace-nowrap"
                        >
                          ✍️ Generar
                        </button>
                        <button
                          onClick={() => openEdit(exp)}
                          className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1.5 rounded hover:bg-blue-100"
                        >
                          ✏️ Editar
                        </button>
                        <button
                          onClick={() => deleteExp(exp.id)}
                          className="text-xs bg-red-50 text-red-500 border border-red-200 px-2.5 py-1.5 rounded hover:bg-red-100"
                        >
                          🗑️ Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {showForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-y-auto max-h-screen">
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-4">{editId ? "Editar expediente" : "Nuevo expediente"}</h3>
                    <div className="space-y-3">
                      <Field label="Numero de expediente *" v={expForm.numero} onChange={(v) => setEF({ ...expForm, numero: v })} ph="ej. 215/2026-VII" />
                      <Field label="Juzgado / Tribunal" v={expForm.juzgado} onChange={(v) => setEF({ ...expForm, juzgado: v })} />
                      <Field label="Quejoso / Actor" v={expForm.quejoso} onChange={(v) => setEF({ ...expForm, quejoso: v })} />
                      <Field label="Autoridad / Demandado" v={expForm.autoridad} onChange={(v) => setEF({ ...expForm, autoridad: v })} />
                      <Field label="Tercero interesado (opcional)" v={expForm.tercero} onChange={(v) => setEF({ ...expForm, tercero: v })} />
                      <div className="grid grid-cols-2 gap-3">
                        <label className="block">
                          <span className="block text-xs font-medium text-gray-600 mb-1">Tipo</span>
                          <select
                            value={expForm.tipo}
                            onChange={(e) => setEF({ ...expForm, tipo: e.target.value })}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:border-slate-700"
                          >
                            {TIPOS.map((t) => (
                              <option key={t.v} value={t.v}>
                                {t.l}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="block">
                          <span className="block text-xs font-medium text-gray-600 mb-1">Estado</span>
                          <select
                            value={expForm.estado}
                            onChange={(e) => setEF({ ...expForm, estado: e.target.value })}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:border-slate-700"
                          >
                            {ESTADOS.map((e) => (
                              <option key={e.v} value={e.v}>
                                {e.l}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                      <label className="block">
                        <span className="block text-xs font-medium text-gray-600 mb-1">Notas (opcional)</span>
                        <textarea
                          rows={2}
                          value={expForm.notas}
                          onChange={(e) => setEF({ ...expForm, notas: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-slate-700"
                        />
                      </label>
                    </div>
                    {formErr && (
                      <div className="mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
                        ⚠️ {formErr}
                      </div>
                    )}
                    <div className="flex gap-3 mt-5">
                      <button
                        onClick={saveExp}
                        className="flex-1 bg-slate-700 text-white py-2 rounded text-sm hover:bg-slate-800"
                      >
                        {editId ? "Guardar cambios" : "Registrar"}
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "generador" && (
          <div>
            <Stepper step={gStep} />

            {gStep === 1 && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Selecciona el expediente</h3>
                {expedientes.length === 0 ? (
                  <div className="text-center py-10 text-gray-400">
                    <div className="text-sm mb-2">Sin expedientes registrados.</div>
                    <button onClick={() => setTab("expedientes")} className="text-sm text-slate-700 underline">
                      Ir a registrar uno
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {expedientes.map((exp) => (
                      <button
                        key={exp.id}
                        onClick={() => {
                          setSelExp(exp);
                          setGStep(2);
                        }}
                        className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 hover:border-slate-500 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{exp.numero}</div>
                            <div className="text-xs text-gray-500">
                              {tipoL(TIPOS)(exp.tipo)} {exp.quejoso ? `· ${exp.quejoso}` : ""}
                            </div>
                          </div>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${estadoCls(ESTADOS)(exp.estado)}`}
                          >
                            {estadoL(ESTADOS)(exp.estado)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {gStep === 2 && selExp && (
              <div>
                <div className="bg-slate-50 border border-slate-200 rounded p-3 mb-4 text-sm text-slate-700">
                  <span className="font-semibold">{selExp.numero}</span> · {tipoL(TIPOS)(selExp.tipo)} · {selExp.quejoso || "—"}
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">Selecciona la plantilla</h3>
                <div className="space-y-2">
                  {PLANTILLAS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelPl(p.id);
                        setFields({});
                        setGStep(3);
                      }}
                      className="w-full text-left bg-white border border-gray-200 rounded-lg p-4 hover:border-slate-500 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{p.icon}</span>
                        <div>
                          <div className="font-medium">{p.label}</div>
                          {p.desc && <div className="text-xs text-gray-500 mt-0.5">{p.desc}</div>}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <button onClick={() => setGStep(1)} className="mt-4 text-xs text-gray-400 hover:text-gray-600">
                  ← Cambiar expediente
                </button>
              </div>
            )}

            {gStep === 3 && selExp && selPl && (
              <div>
                <div className="bg-slate-50 border border-slate-200 rounded p-3 mb-4 text-sm text-slate-700">
                  <span className="font-semibold">{selExp.numero}</span> · {PLANTILLAS.find((p) => p.id === selPl)?.label}
                </div>
                <h3 className="font-semibold text-gray-800 mb-4">Completa los datos</h3>
                <div className="space-y-4">
                  {(FIELD_CFG[getPlantillaKey(selPl)] || []).map((f) => (
                    <div key={f.id}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                      {f.type === "ta" ? (
                        <textarea
                          rows={f.rows || 4}
                          placeholder={f.ph || ""}
                          value={fields[f.id] || ""}
                          onChange={(e) => setFields({ ...fields, [f.id]: e.target.value })}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-slate-700"
                        />
                      ) : (
                        <input
                          placeholder={f.ph || ""}
                          value={fields[f.id] || ""}
                          onChange={(e) => setFields({ ...fields, [f.id]: e.target.value })}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-slate-700"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleGenerate}
                    className="flex-1 bg-slate-700 text-white py-2.5 rounded text-sm font-medium hover:bg-slate-800"
                  >
                    Generar documento →
                  </button>
                  <button
                    onClick={() => setGStep(2)}
                    className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50"
                  >
                    ← Volver
                  </button>
                </div>
              </div>
            )}

            {gStep === 4 && (
              <div>
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h3 className="font-semibold text-gray-800">Vista previa</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopy}
                      className={`text-sm px-4 py-2 rounded font-medium text-white ${
                        copied ? "bg-emerald-600" : "bg-slate-700 hover:bg-slate-800"
                      }`}
                    >
                      {copied ? "✓ Copiado" : "📋 Copiar texto"}
                    </button>
                    <button
                      onClick={resetGen}
                      className="text-sm px-3 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50"
                    >
                      Nuevo
                    </button>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 overflow-x-auto">
                  <pre className="text-xs font-mono text-gray-800 whitespace-pre-wrap leading-relaxed">{docTxt}</pre>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="text-sm font-medium text-amber-800 mb-2">💾 Guardar borrador</div>
                  {saveOk ? (
                    <div className="text-sm text-emerald-700 font-medium">✓ Borrador guardado correctamente.</div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        className="flex-1 border border-amber-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-amber-600"
                        placeholder="Nombre del borrador (opcional)"
                        value={borNom}
                        onChange={(e) => setBorNom(e.target.value)}
                      />
                      <button
                        onClick={handleSaveBor}
                        className="bg-amber-600 text-white px-4 py-2 rounded text-sm hover:bg-amber-700 whitespace-nowrap"
                      >
                        Guardar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "borradores" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Borradores guardados</h2>
              <span className="text-xs text-gray-500">
                {borradores.length} documento{borradores.length === 1 ? "" : "s"}
              </span>
            </div>
            {borradores.length === 0 ? (
              <div className="text-center py-14 text-gray-400">
                <div className="text-4xl mb-3">📄</div>
                <div className="text-sm">Sin borradores.</div>
              </div>
            ) : (
              <BorradorList
                borradores={borradores}
                onDelete={async (id) => {
                  const ok = await confirm("¿Eliminar este borrador?");
                  if (!ok) return;
                  await persistBors(borradores.filter((x) => x.id !== id));
                  toast.success("Borrador eliminado.");
                }}
              />
            )}
          </div>
        )}

        {tab === "marco" && (
          <div>
            <div className="mb-4">
              <h2 className="font-semibold text-gray-800 text-lg">Marco Normativo Mexicano</h2>
              <p className="text-xs text-gray-500 mt-1">
                Jerarquia normativa, estructura del Poder Judicial, jurisprudencia y estructura de escritos procesales.
              </p>
            </div>
            <MarcoNormativo partes={PARTES} />
          </div>
        )}
      </div>

      {ConfirmDialog}
    </div>
  );
}

function getPlantillaKey(pid) {
  if (pid === "amparo_conceptos") return "amparo";
  return pid; // queja, laboral, libre
}

export default function App() {
  return (
    <ToastProvider>
      <AppInner />
    </ToastProvider>
  );
}
