export interface QuestionInterface {
  question: string;
  explanation: string;
}

export interface QuestionAnswer {
  question: number;
  answer: number;
}

export interface Committee {
  [committeeName: string]: {
    answers: CommitteeAnswerInterface[];
    candidateName: string;
    committeeLogoPath: string;
    candidatePicturePath: string;
    committeeComment: string;
    importantMatters: number[];
    committeeLists: string;
    fullCommitteeName: string;
    committeeShorterFullName: string;
    hasAgreed: boolean;
  };
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
