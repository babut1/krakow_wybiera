import { useNumberOfQuestions } from "./state";
import { CommitteeAnswerInterface, CommitteeAnswers, UserAnswer } from "./types";

function countAgreementPoints(userAgreement: number, committeeAgreement: number) {
  if (userAgreement === 0.5) {
    return Math.min(0.5 - (committeeAgreement - 3) / 10, 0);
  }
  if (userAgreement === 1) {
    return Math.min(0.5 - Math.abs(committeeAgreement - 5.5) / 10, 0);
  }
  if (userAgreement === 1.5) {
    return Math.min(0.5 - (8 - committeeAgreement) / 10, 0);
  }
  return 0;
}

export function countResultPerCommittee(userAnswers: UserAnswer[], committeeAnswers: CommitteeAnswerInterface[]) {
  let maxScore = 0;
  let score = 0;
  for (let i = 0; i < 20; i++) {
    if (Math.abs(userAnswers[i].agreement - committeeAnswers[i].agreement) == 1) {
      maxScore += userAnswers[i].importance;
      continue;
    }
    let baseScore = 0;
    if (userAnswers[i].agreement === committeeAnswers[i].agreement) {
      baseScore = 0.5;
    } else {
      baseScore = 0.25;
    }
    if (
      (userAnswers[i].importance === 1.5 && committeeAnswers[i].importance > 7) ||
      (userAnswers[i].importance === 0.5 && committeeAnswers[i].importance < 4) ||
      (userAnswers[i].importance === 1 && committeeAnswers[i].importance > 3 && committeeAnswers[i].importance < 8)
    ) {
      maxScore += userAnswers[i].importance;
      score += userAnswers[i].importance;
      continue;
    } else {
      maxScore += userAnswers[i].importance;
      score +=
        (baseScore + countAgreementPoints(userAnswers[i].agreement, committeeAnswers[i].agreement)) *
        userAnswers[i].importance;
    }
  }
  return (score * 100) / maxScore;
}
