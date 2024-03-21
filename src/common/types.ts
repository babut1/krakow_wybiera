export interface QuestionInterface {
  question: string;
  explanation: string;
}

export interface QuestionAnswer {
  question: number;
  answer: number;
}

export interface CommitteeAnswers {
  [committeeName: string]: CommitteeAnswerInterface[];
}

export interface CommitteeAnswerInterface {
  agreement: number;
  importance: number;
  explanation: string;
}

export interface District {
  constituency: number;
  districts: string[];
}

export interface UserAnswer {
  agreement: number;
  importance: number;
}
