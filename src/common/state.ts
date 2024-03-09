import { create, useStore } from "zustand";
import { QuestionAnswer } from "./types";

export interface StateManager {
  currentQuestion: number;
  answers: QuestionAnswer[];
  numberOfQuestions: number;
  appPage: string;
}

export const appStateManager = create<StateManager>()((set) => ({
  currentQuestion: 0,
  answers: [],
  numberOfQuestions: 0,
  appPage: "homepage",
}));

export async function changeSelectedQuestion(questionNumber: number) {
  appStateManager.setState({ currentQuestion: questionNumber });
}

export async function setNumberOfQuestions(numberOfQuestions: number) {
  appStateManager.setState({ numberOfQuestions: numberOfQuestions });
}

export async function setAppPage(appPage: string) {
  changeSelectedQuestion(0);
  appStateManager.setState({ appPage: appPage });
}

export function useSelectedQuestion() {
  return useStore(appStateManager, (state) => state.currentQuestion);
}

export function useNumberOfQuestions() {
  return useStore(appStateManager, (state) => state.numberOfQuestions);
}

export function useAppPage() {
  return useStore(appStateManager, (state) => state.appPage);
}
