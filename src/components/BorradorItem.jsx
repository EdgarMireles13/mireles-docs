import { useState } from "react";

export function BorradorItem({ b, onDelete }) {
  const [open, setOpen] = useState(false);
  const [cp, setCp] = useState(false);

  const copy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(b.texto);
    }
    setCp(true);
    setTimeout(() => setCp(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4" data-testid="borrador-item">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 text-sm truncate">{b.nombre}</div>
          <div className="text-xs text-gray-400 mt-0.5">
            {b.expediente} · {new Date(b.fecha).toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" })}
          </div>
        </div>
        <div className="flex gap-1.5 shrink-0">
          <button
            onClick={() => setOpen(!open)}
            className="text-xs px-2.5 py-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50"
          >
            {open ? "Ocultar" : "Ver"}
          </button>
          <button
            onClick={copy}
            className={`text-xs px-2.5 py-1.5 rounded text-white ${
              cp ? "bg-emerald-600" : "bg-slate-700 hover:bg-slate-800"
            }`}
          >
            {cp ? "✓ Copiado" : "Copiar"}
          </button>
          <button
            onClick={onDelete}
            className="text-xs px-2.5 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded hover:bg-red-100"
          >
            Eliminar
          </button>
        </div>
      </div>
      {open && (
        <pre className="mt-3 p-3 bg-gray-50 rounded border border-gray-200 text-xs font-mono text-gray-700 whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto">
          {b.texto}
        </pre>
      )}
    </div>
  );
}

export function BorradorList({ borradores, onDelete }) {
  if (borradores.length === 0) {
    return <div className="text-center text-gray-400 text-sm py-8">Aun no hay borradores generados.</div>;
  }
  return (
    <div className="space-y-3">
      {borradores.map((b) => (
        <BorradorItem key={b.id} b={b} onDelete={() => onDelete(b.id)} />
      ))}
    </div>
  );
}
