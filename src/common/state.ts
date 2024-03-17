import { create, useStore } from "zustand";
import { QuestionAnswer } from "./types";

export interface StateManager {
  currentQuestion: number;
  answers: QuestionAnswer[];
  numberOfQuestions: number;
  selectedDistrict: number;
}

export const appStateManager = create<StateManager>()((set) => ({
  currentQuestion: 0,
  answers: [],
  numberOfQuestions: 0,
  selectedDistrict: 0,
}));

export async function changeSelectedQuestion(questionNumber: number) {
  appStateManager.setState({ currentQuestion: questionNumber });
}

export async function setNumberOfQuestions(numberOfQuestions: number) {
  appStateManager.setState({ numberOfQuestions: numberOfQuestions });
}

export async function setSelectedDistrict(newDistrict: number) {
  appStateManager.setState({ selectedDistrict: newDistrict });
}

export function useSelectedQuestion() {
  return useStore(appStateManager, (state) => state.currentQuestion);
}

export function useNumberOfQuestions() {
  return useStore(appStateManager, (state) => state.numberOfQuestions);
}

export function useSelectedDistrict() {
  return useStore(appStateManager, (state) => state.selectedDistrict);
}
