// Wrapper sobre localStorage. Async para mantener compatibilidad con
// posibles backends (IndexedDB, API, etc).
const isBrowser = typeof window !== "undefined" && typeof localStorage !== "undefined";

export const store = {
  async get(key) {
    if (!isBrowser) return null;
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      console.error("store.get error", err);
      return null;
    }
  },
  async set(key, value) {
    if (!isBrowser) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("store.set error", err);
    }
  },
  async remove(key) {
    if (!isBrowser) return;
    localStorage.removeItem(key);
  },
};

export const KEYS = {
  EXPEDIENTES: "exp_mgz",
  BORRADORES: "bor_mgz",
  EVALUACIONES: "eval_mgz",
};
