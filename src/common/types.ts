export interface QuestionInterface {
  question: string;
  explanation: string;
}

export interface QuestionAnswer {
  question: number;
  answer: number;
}

export interface District {
  constituency: number;
  districts: string[];
}
