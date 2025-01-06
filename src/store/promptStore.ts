import { create } from 'zustand';

interface PromptState {
  currentPrompt: string;
  selectedModel: string;
  hyperParameters: {
    temperature: number;
    maxTokens: number;
  };
  setPrompt: (prompt: string) => void;
  setModel: (model: string) => void;
  setHyperParameters: (params: Partial<PromptState['hyperParameters']>) => void;
}

export const usePromptStore = create<PromptState>((set) => ({
  currentPrompt: '',
  selectedModel: 'gpt-3.5-turbo',
  hyperParameters: {
    temperature: 0.7,
    maxTokens: 1000,
  },
  setPrompt: (prompt) => set({ currentPrompt: prompt }),
  setModel: (model) => set({ selectedModel: model }),
  setHyperParameters: (params) =>
    set((state) => ({
      hyperParameters: { ...state.hyperParameters, ...params },
    })),
}));