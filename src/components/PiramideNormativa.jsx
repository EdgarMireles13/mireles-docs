export function PiramideNormativa({ niveles }) {
  if (!niveles || niveles.length === 0) return null;

  const colores = {
    emerald: { bg: "bg-emerald-500", text: "text-white", border: "border-emerald-600" },
    blue: { bg: "bg-blue-500", text: "text-white", border: "border-blue-600" },
    indigo: { bg: "bg-indigo-500", text: "text-white", border: "border-indigo-600" },
    violet: { bg: "bg-violet-500", text: "text-white", border: "border-violet-600" },
    slate: { bg: "bg-slate-500", text: "text-white", border: "border-slate-600" }
  };

  return (
    <div className="space-y-2 my-4" data-testid="piramide-normativa">
      {niveles.map((n) => {
        const c = colores[n.color] || colores.slate;
        const ancho = 100 - (n.nivel - 1) * 12;
        return (
          <div key={n.nivel} className="flex justify-center">
            <div
              className={`${c.bg} ${c.text} ${c.border} border-2 rounded-lg p-3 shadow-md transition-all hover:scale-[1.02]`}
              style={{ width: `${ancho}%` }}
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs bg-white/20 px-2 py-0.5 rounded">NIVEL {n.nivel}</span>
                <span className="font-semibold text-sm">{n.nombre}</span>
              </div>
              <div className="text-xs mt-1 opacity-90">{n.detalle}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
