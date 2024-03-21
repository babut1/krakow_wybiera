import { create, useStore } from "zustand";
import { QuestionAnswer, UserAnswer } from "./types";

export interface StateManager {
  currentQuestion: number;
  answers: QuestionAnswer[];
  numberOfQuestions: number;
  userAnswers: UserAnswer[];
}

export const appStateManager = create<StateManager>()((set) => ({
  currentQuestion: 0,
  answers: [],
  numberOfQuestions: 0,
  userAnswers: [],
}));

export async function changeSelectedQuestion(questionNumber: number) {
  appStateManager.setState({ currentQuestion: questionNumber });
}

export async function setUserAnswers(newUserAnswers: UserAnswer[]) {
  appStateManager.setState({ userAnswers: newUserAnswers });
}

export async function setUserAnswer(newUserAnswer: UserAnswer, index: number) {
  appStateManager.setState((state) => {
    const updatedUserAnswers = [...state.userAnswers];
    updatedUserAnswers[index] = newUserAnswer;
    return { userAnswers: updatedUserAnswers };
  });
}

export async function setNumberOfQuestions(numberOfQuestions: number) {
  appStateManager.setState({ numberOfQuestions: numberOfQuestions });
}

export function useSelectedQuestion() {
  return useStore(appStateManager, (state) => state.currentQuestion);
}

export function useNumberOfQuestions() {
  return useStore(appStateManager, (state) => state.numberOfQuestions);
}

export function useUserAnswers() {
  return useStore(appStateManager, (state) => state.userAnswers);
}
