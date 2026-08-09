import { genLibre } from "./libre.js";
import { genAmparoConceptos } from "./amparo.js";
import { genQueja } from "./queja.js";
import { genLaboral } from "./laboral.js";

const GENERATORS = {
  libre: genLibre,
  amparo_conceptos: genAmparoConceptos,
  queja: genQueja,
  laboral: genLaboral,
};

export function generateDoc(pid, exp, fields) {
  const fn = GENERATORS[pid];
  if (!fn) return "";
  return fn(exp, fields);
}

export { genLibre, genAmparoConceptos, genQueja, genLaboral };
