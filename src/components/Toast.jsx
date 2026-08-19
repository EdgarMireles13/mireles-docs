/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext, useCallback } from "react";

const ToastContext = createContext(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast debe usarse dentro de <ToastProvider>");
  return ctx;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const show = useCallback(
    (message, opts = {}) => {
      const id = Date.now() + Math.random();
      const toast = {
        id,
        message,
        type: opts.type || "info",
        action: opts.action || null,
        duration: opts.duration ?? 3000,
      };
      setToasts((t) => [...t, toast]);
      if (toast.duration > 0) {
        setTimeout(() => remove(id), toast.duration);
      }
      return id;
    },
    [remove]
  );

  const value = {
    show,
    success: (msg, opts) => show(msg, { ...opts, type: "success" }),
    error: (msg, opts) => show(msg, { ...opts, type: "error" }),
    info: (msg, opts) => show(msg, { ...opts, type: "info" }),
    warning: (msg, opts) => show(msg, { ...opts, type: "warning" }),
    remove,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onClose={remove} />
    </ToastContext.Provider>
  );
}

function ToastContainer({ toasts, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onClose={() => onClose(t.id)} />
      ))}
    </div>
  );
}

function Toast({ toast, onClose }) {
  const styles = {
    success: "bg-emerald-600 text-white",
    error: "bg-red-600 text-white",
    warning: "bg-amber-500 text-white",
    info: "bg-slate-700 text-white",
  };
  const icons = { success: "✓", error: "✕", warning: "⚠", info: "ℹ" };

  return (
    <div
      className={`${styles[toast.type]} px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[260px]`}
      role="alert"
    >
      <span className="font-bold text-lg">{icons[toast.type]}</span>
      <span className="flex-1 text-sm">{toast.message}</span>
      {toast.action && (
        <button
          onClick={() => {
            toast.action.onClick();
            onClose();
          }}
          className="text-sm font-semibold underline hover:no-underline"
        >
          {toast.action.label}
        </button>
      )}
      <button onClick={onClose} className="text-white/70 hover:text-white" aria-label="Cerrar">
        ✕
      </button>
    </div>
  );
}

export function useConfirm() {
  const [state, setState] = useState(null);

  const confirm = useCallback((message) => {
    return new Promise((resolve) => setState({ resolve, message }));
  }, []);

  const handle = (answer) => {
    if (state) {
      state.resolve(answer);
      setState(null);
    }
  };

  const Dialog = state ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[90] p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-5">
        <div className="text-sm text-gray-800 mb-4">{state.message}</div>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => handle(false)}
            className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={() => handle(true)}
            className="px-3 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return { confirm, Dialog };
}
