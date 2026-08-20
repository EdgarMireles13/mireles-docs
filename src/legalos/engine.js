// LEGAL-OS · Motor de reglas (nucleo v1)
// Modelo: ingestion de hechos -> normalizacion -> aplicacion de reglas -> salida explicable.

import { getNorma, getEntidad, casosQueInterpretan } from "./knowledge.js";
import { REGLAS } from "./rules.js";

// Salario minimo general diario vigente (zona general). Actualizar cada anio.
export const SALARIO_MINIMO_GENERAL = 315.04;

const MS_DIA = 24 * 60 * 60 * 1000;

export function aniosServicio(fechaIngreso, fechaSalida) {
  const ini = new Date(fechaIngreso);
  const fin = new Date(fechaSalida);
  if (isNaN(ini) || isNaN(fin) || fin <= ini) return 0;
  return (fin - ini) / MS_DIA / 365.25;
}

// LFT art. 76 (vacaciones dignas, reforma 2023): 12 dias el primer anio,
// +2 por anio hasta 20; despues +2 por cada 5 anios de servicio.
export function diasVacaciones(aniosCompletos) {
  if (aniosCompletos < 1) return 0;
  if (aniosCompletos <= 5) return 12 + 2 * (aniosCompletos - 1);
  return 20 + 2 * Math.ceil((aniosCompletos - 5) / 5);
}

const round2 = (n) => Math.round(n * 100) / 100;

function calcularObligaciones(ids, hechos) {
  const sd = Number(hechos.salarioDiario) || 0;
  const anios = aniosServicio(hechos.fechaIngreso, hechos.fechaSalida);
  const aniosCompletos = Math.floor(anios);
  const fraccionAnio = anios - aniosCompletos;

  // Tope prima de antiguedad: doble del salario minimo (LFT arts. 485-486)
  const sdTopado = Math.min(sd, 2 * SALARIO_MINIMO_GENERAL);

  const fin = new Date(hechos.fechaSalida);
  const inicioAnio = isNaN(fin) ? null : new Date(fin.getFullYear(), 0, 1);
  const diasAnioCal = inicioAnio ? Math.max(0, (fin - inicioAnio) / MS_DIA) : 0;

  const vacDias = diasVacaciones(Math.max(aniosCompletos + 1, 1));
  const vacProporcional = sd * vacDias * fraccionAnio;

  const catalogo = {
    indemnizacion_constitucional: {
      label: "Indemnizacion constitucional (3 meses de salario)",
      monto: round2(90 * sd),
      formula: `90 dias x $${sd}`,
      norma: "norm:mx:cpeum:art123-a-xxii",
    },
    veinte_dias_por_anio: {
      label: "20 dias de salario por anio de servicios",
      monto: round2(20 * sd * anios),
      formula: `20 dias x $${sd} x ${anios.toFixed(2)} anios`,
      norma: "norm:mx:lft:art50",
    },
    prima_antiguedad: {
      label: "Prima de antiguedad (12 dias por anio, salario topado)",
      monto: round2(12 * sdTopado * anios),
      formula: `12 dias x $${sdTopado} (tope 2x SM) x ${anios.toFixed(2)} anios`,
      norma: "norm:mx:lft:art162",
    },
    prima_antiguedad_15_anios: {
      label: "Prima de antiguedad (separacion voluntaria)",
      monto: anios >= 15 ? round2(12 * sdTopado * anios) : 0,
      formula:
        anios >= 15
          ? `12 dias x $${sdTopado} (tope 2x SM) x ${anios.toFixed(2)} anios`
          : "No procede: requiere 15 anios de servicio (art. 162-III LFT)",
      aplicable: anios >= 15,
      norma: "norm:mx:lft:art162",
    },
    salarios_caidos: {
      label: "Salarios vencidos (caidos)",
      monto: null,
      formula: "Desde el despido hasta por 12 meses; se cuantifican en ejecucion (art. 48 LFT)",
      norma: "norm:mx:lft:art48",
    },
    partes_proporcionales: {
      label: "Partes proporcionales (aguinaldo, vacaciones y prima vacacional)",
      monto: round2(sd * 15 * (diasAnioCal / 365) + vacProporcional * 1.25),
      formula: `Aguinaldo: 15 dias x ${(diasAnioCal / 365).toFixed(2)} anio + Vacaciones: ${vacDias} dias x ${fraccionAnio.toFixed(2)} anio + prima vacacional 25%`,
      norma: "norm:mx:lft:art87",
    },
  };

  return ids
    .map((id) => ({ id, titular: "empleador", aplicable: true, ...catalogo[id] }))
    .filter((o) => o.aplicable !== false);
}

// Punto de entrada del motor: recibe hechos normalizados y devuelve
// clasificacion, obligaciones cuantificadas, fundamento y justificacion.
export function evaluar(hechos) {
  const errores = [];
  if (!hechos.evento) errores.push("Selecciona el tipo de evento.");
  if (hechos.evento === "despido" && typeof hechos.justificado !== "boolean")
    errores.push("Indica si el despido fue justificado.");
  if (errores.length) return { ok: false, errores };

  const aplicables = REGLAS.filter((r) => r.when(hechos)).sort((a, b) => a.prioridad - b.prioridad);
  if (aplicables.length === 0) {
    return { ok: false, errores: ["Ningun supuesto normativo coincide con los hechos capturados."] };
  }

  const regla = aplicables[0];
  const normas = regla.then.normas.map((id) => getNorma(id)).filter(Boolean);
  const casos = regla.then.normas.flatMap((id) => casosQueInterpretan(id));
  const obligaciones = calcularObligaciones(regla.then.obligaciones, hechos);
  const total = obligaciones.reduce((s, o) => s + (o.monto || 0), 0);

  return {
    ok: true,
    clasificacion: regla.then.clasificacion,
    clasificacionLabel: regla.label,
    concepto: regla.then.concepto ? getEntidad(regla.then.concepto) : null,
    obligaciones,
    totalEstimado: round2(total),
    normas,
    casos,
    justificacion: [
      {
        regla: regla.id,
        hechos_usados: hechos,
        normas: regla.then.normas,
      },
    ],
    fecha: new Date().toISOString(),
  };
}
