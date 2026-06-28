import type { DiagnosisState, DiagnosisStatus, Segment } from "@/types";

const STORAGE_KEY = "sumaup360.diagnosis.v1";

export const emptyDiagnosis: DiagnosisState = {
  status: "NOT_STARTED",
  segment: "UNKNOWN",
  step: 0,
  answers: {},
  result: null,
  updatedAt: 0,
};

export function loadDiagnosis(): DiagnosisState {
  if (typeof window === "undefined") return emptyDiagnosis;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyDiagnosis;
    const parsed = JSON.parse(raw) as Partial<DiagnosisState>;
    return { ...emptyDiagnosis, ...parsed };
  } catch {
    return emptyDiagnosis;
  }
}

export function saveDiagnosis(state: DiagnosisState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...state, updatedAt: state.updatedAt || nowSafe() }),
    );
  } catch {
    // El almacenamiento puede no estar disponible; el diagnóstico sigue
    // funcionando en memoria durante la sesión.
  }
}

export function clearDiagnosis(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // sin acción
  }
}

export function markSkipped(): DiagnosisState {
  const state: DiagnosisState = {
    ...emptyDiagnosis,
    status: "SKIPPED" satisfies DiagnosisStatus,
    segment: "UNKNOWN" satisfies Segment,
    result: null,
    updatedAt: nowSafe(),
  };
  saveDiagnosis(state);
  return state;
}

function nowSafe(): number {
  // Date.now en cliente; en SSR retornamos 0 (no se usa).
  return typeof window === "undefined" ? 0 : Date.now();
}
