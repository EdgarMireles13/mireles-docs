import { useState, useEffect } from "react";
import { evaluar } from "../legalos/engine.js";
import { EVENTOS } from "../legalos/rules.js";
import { store, KEYS } from "../utils/store.js";
import { uid } from "../utils/helpers.js";
import { useToast, useConfirm } from "./Toast.jsx";

const CLS_COLORES = {
  despido_injustificado: "bg-red-100 text-red-700 border-red-200",
  rescision_imputable_patron: "bg-orange-100 text-orange-700 border-orange-200",
  despido_justificado: "bg-gray-200 text-gray-700 border-gray-300",
  renuncia_voluntaria: "bg-blue-100 text-blue-700 border-blue-200",
};

const fmtMoney = (n) =>
  n == null ? "—" : n.toLocaleString("es-MX", { style: "currency", currency: "MXN" });

function CampoFecha({ label, v, onChange }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-600 mb-1">{label}</span>
      <input
        type="date"
        value={v}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-slate-700"
      />
    </label>
  );
}

export function GestorLegal({ expedientes, onUsarEnDemanda }) {
  const toast = useToast();
  const { confirm, Dialog: ConfirmDialog } = useConfirm();

  const [evaluaciones, setEvals] = useState([]);
  const [expId, setExpId] = useState("");
  const [evento, setEvento] = useState("despido");
  const [justificado, setJustificado] = useState("no");
  const [salario, setSalario] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [resultado, setResultado] = useState(null);
  const [errores, setErrores] = useState([]);
  const [verNormas, setVerNormas] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const e = (await store.get(KEYS.EVALUACIONES)) || [];
      if (mounted) setEvals(e);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const persistEvals = async (u) => {
    setEvals(u);
    await store.set(KEYS.EVALUACIONES, u);
  };

  const hechos = {
    evento,
    justificado: evento === "despido" ? justificado === "si" : undefined,
    salarioDiario: salario,
    fechaIngreso,
    fechaSalida,
  };

  const handleEvaluar = () => {
    const errs = [];
    if (!salario || Number(salario) <= 0) errs.push("Captura el salario diario integrado.");
    if (!fechaIngreso) errs.push("Captura la fecha de ingreso.");
    if (!fechaSalida) errs.push("Captura la fecha de terminacion.");
    if (fechaIngreso && fechaSalida && new Date(fechaSalida) <= new Date(fechaIngreso))
      errs.push("La fecha de terminacion debe ser posterior a la de ingreso.");
    if (errs.length) {
      setErrores(errs);
      setResultado(null);
      return;
    }
    const res = evaluar(hechos);
    if (!res.ok) {
      setErrores(res.errores);
      setResultado(null);
      return;
    }
    setErrores([]);
    setResultado(res);
  };

  const handleGuardar = async () => {
    const exp = expedientes.find((e) => e.id === expId);
    const nueva = {
      id: uid(),
      expediente: exp?.numero || null,
      hechos,
      resultado,
      fecha: new Date().toISOString(),
    };
    await persistEvals([nueva, ...evaluaciones]);
    toast.success("Evaluacion guardada.");
  };

  const handleEliminar = async (id) => {
    const ok = await confirm("¿Eliminar esta evaluacion?");
    if (!ok) return;
    await persistEvals(evaluaciones.filter((e) => e.id !== id));
    toast.success("Evaluacion eliminada.");
  };

  return (
    <div data-testid="gestor-legal">
      <div className="mb-4">
        <h2 className="font-semibold text-gray-800 text-lg">Gestion Legal · Evaluador de casos</h2>
        <p className="text-xs text-gray-500 mt-1">
          Motor de reglas LEGAL-OS (vertical laboral): clasifica el caso, cuantifica prestaciones y
          fundamenta cada conclusion con normas y jurisprudencia.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-5">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Hechos del caso</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="block sm:col-span-2">
            <span className="block text-xs font-medium text-gray-600 mb-1">Expediente (opcional)</span>
            <select
              value={expId}
              onChange={(e) => setExpId(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:border-slate-700"
            >
              <option value="">— Sin expediente —</option>
              {expedientes.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.numero} {e.quejoso ? `· ${e.quejoso}` : ""}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-medium text-gray-600 mb-1">Evento</span>
            <select
              value={evento}
              onChange={(e) => setEvento(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:border-slate-700"
            >
              {EVENTOS.map((ev) => (
                <option key={ev.v} value={ev.v}>
                  {ev.l}
                </option>
              ))}
            </select>
          </label>
          {evento === "despido" && (
            <label className="block">
              <span className="block text-xs font-medium text-gray-600 mb-1">¿Existio causa justificada (art. 47 LFT)?</span>
              <select
                value={justificado}
                onChange={(e) => setJustificado(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:border-slate-700"
              >
                <option value="no">No — despido sin causa</option>
                <option value="si">Si — causa acreditada con aviso</option>
              </select>
            </label>
          )}
          <label className="block">
            <span className="block text-xs font-medium text-gray-600 mb-1">Salario diario integrado ($)</span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
              placeholder="ej. 450.00"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-slate-700"
            />
          </label>
          <CampoFecha label="Fecha de ingreso" v={fechaIngreso} onChange={setFechaIngreso} />
          <CampoFecha label="Fecha de terminacion" v={fechaSalida} onChange={setFechaSalida} />
        </div>
        {errores.length > 0 && (
          <div className="mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
            {errores.map((e) => (
              <div key={e}>⚠️ {e}</div>
            ))}
          </div>
        )}
        <button
          onClick={handleEvaluar}
          className="mt-4 w-full bg-slate-700 text-white py-2.5 rounded text-sm font-medium hover:bg-slate-800"
        >
          ⚙️ Evaluar caso
        </button>
      </div>

      {resultado && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-5" data-testid="resultado-evaluacion">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full border ${
                CLS_COLORES[resultado.clasificacion] || "bg-gray-100 text-gray-700 border-gray-200"
              }`}
            >
              {resultado.clasificacionLabel}
            </span>
            <span className="text-sm text-gray-600">
              Total estimado: <span className="font-bold text-gray-900">{fmtMoney(resultado.totalEstimado)}</span>
            </span>
          </div>

          {resultado.concepto && (
            <p className="text-xs text-gray-500 mb-3 bg-gray-50 rounded p-2">{resultado.concepto.definition}</p>
          )}

          <h4 className="text-sm font-semibold text-gray-700 mb-2">Obligaciones del empleador</h4>
          <div className="space-y-2 mb-4">
            {resultado.obligaciones.map((o) => (
              <div key={o.id} className="flex items-start justify-between gap-3 border border-gray-100 rounded p-2.5">
                <div className="min-w-0">
                  <div className="text-sm text-gray-800">{o.label}</div>
                  <div className="text-xs text-gray-400">{o.formula}</div>
                </div>
                <div className="text-sm font-semibold text-gray-900 whitespace-nowrap">{fmtMoney(o.monto)}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setVerNormas(!verNormas)}
            className="text-xs text-slate-700 underline mb-2"
          >
            {verNormas ? "Ocultar fundamento" : "Ver fundamento juridico"}
          </button>
          {verNormas && (
            <div className="space-y-2 mb-4">
              {resultado.normas.map((n) => (
                <div key={n.id} className="border border-slate-100 bg-slate-50 rounded p-2.5">
                  <div className="text-xs font-semibold text-slate-700">{n.title}</div>
                  <div className="text-xs text-gray-600 mt-1">{n.text}</div>
                </div>
              ))}
              {resultado.casos.map((c) => (
                <div key={c.id} className="border border-amber-100 bg-amber-50 rounded p-2.5">
                  <div className="text-xs font-semibold text-amber-800">
                    📌 {c.cita} · {c.court}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{c.rubrum}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handleGuardar}
              className="text-sm bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
            >
              💾 Guardar evaluacion
            </button>
            {(resultado.clasificacion === "despido_injustificado" ||
              resultado.clasificacion === "rescision_imputable_patron") && (
              <button
                onClick={() => onUsarEnDemanda(hechos, expedientes.find((e) => e.id === expId) || null)}
                className="text-sm bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
              >
                ✍️ Usar en demanda laboral
              </button>
            )}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Evaluaciones guardadas ({evaluaciones.length})
        </h3>
        {evaluaciones.length === 0 ? (
          <div className="text-center py-8 text-gray-400 text-sm">Sin evaluaciones guardadas.</div>
        ) : (
          <div className="space-y-2">
            {evaluaciones.map((ev) => (
              <div key={ev.id} className="bg-white border border-gray-200 rounded-lg p-3 flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                        CLS_COLORES[ev.resultado.clasificacion] || "bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                    >
                      {ev.resultado.clasificacionLabel}
                    </span>
                    {ev.expediente && <span className="text-xs text-gray-500">Exp. {ev.expediente}</span>}
                    <span className="text-xs text-gray-400">
                      {new Date(ev.fecha).toLocaleDateString("es-MX")}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Total estimado: <span className="font-semibold">{fmtMoney(ev.resultado.totalEstimado)}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleEliminar(ev.id)}
                  className="text-xs bg-red-50 text-red-500 border border-red-200 px-2.5 py-1.5 rounded hover:bg-red-100 shrink-0"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {ConfirmDialog}
    </div>
  );
}
