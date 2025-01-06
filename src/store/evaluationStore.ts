import { create } from 'zustand';

interface EvaluationResult {
  id: string;
  promptId: string;
  accuracy: number;
  consistency: number;
  security: number;
  timestamp: Date;
}

interface EvaluationState {
  results: EvaluationResult[];
  addResult: (result: EvaluationResult) => void;
  getResultsByPrompt: (promptId: string) => EvaluationResult[];
  clearResults: () => void;
}

export const useEvaluationStore = create<EvaluationState>((set, get) => ({
  results: [],
  addResult: (result) =>
    set((state) => ({ results: [...state.results, result] })),
  getResultsByPrompt: (promptId) =>
    get().results.filter((result) => result.promptId === promptId),
  clearResults: () => set({ results: [] }),
}));