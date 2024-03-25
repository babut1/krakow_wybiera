import { useNumberOfQuestions } from "./state";
import { CommitteeAnswerInterface, Committee, UserAnswer } from "./types";

// function countAgreementPoints(userAgreement: number, committeeAgreement: number) {
//   let newCommitteAgreement = committeeAgreement;
//   if ((newCommitteAgreement = 10)) {
//     newCommitteAgreement = 9;
//   }
//   if ((newCommitteAgreement = 1)) {
//     newCommitteAgreement = 2;
//   }
//   return Math.max(
//     0.5 - Math.abs(newCommitteAgreement - (2 * userAgreement - 1)) / 10,
//     0.5 - Math.abs(newCommitteAgreement - 2 * userAgreement) / 10,
//     0
//   );
// }

// export function countResultPerCommittee(
//   userAnswers: UserAnswer[],
//   committeeAnswers: CommitteeAnswerInterface[],
//   importantMatters: number[]
// ) {
//   let maxScore = 0;
//   let score = 0;
//   for (let i = 0; i < 20; i++) {
//     maxScore += userAnswers[i].importance;
//     if (Math.abs(userAnswers[i].agreement - committeeAnswers[i].agreement) == 1) {
//       continue;
//     }
//     let baseScore = 0;
//     if (userAnswers[i].agreement === committeeAnswers[i].agreement) {
//       baseScore = 0.5;
//     } else {
//       baseScore = 0.25;
//     }
//     if (
//       (userAnswers[i].importance === 5 && committeeAnswers[i].importance > 8) ||
//       (userAnswers[i].importance === 4 && committeeAnswers[i].importance > 6 && committeeAnswers[i].importance < 9) ||
//       (userAnswers[i].importance === 3 && committeeAnswers[i].importance > 4 && committeeAnswers[i].importance < 7) ||
//       (userAnswers[i].importance === 2 && committeeAnswers[i].importance > 2 && committeeAnswers[i].importance < 5) ||
//       (userAnswers[i].importance === 1 && committeeAnswers[i].importance < 3)
//     ) {
//       score += userAnswers[i].importance;
//       continue;
//     } else {
//       score +=
//         (baseScore + countAgreementPoints(userAnswers[i].agreement, committeeAnswers[i].agreement)) *
//         userAnswers[i].importance;
//     }
//   }
//   return Math.round((score * 100) / maxScore);
// }

export function countResultPerCommittee(
  userAnswers: UserAnswer[],
  committeeAnswers: CommitteeAnswerInterface[],
  importantMatters: number[]
) {
  const maxScoreConstant = 8;
  let maxScore = 0;
  let score = 0;
  for (let i = 0; i < 20; i++) {
    if (Math.abs(userAnswers[i].agreement - committeeAnswers[i].agreement) === 1) {
      maxScore += userAnswers[i].importance;
      if (importantMatters.includes(i) && userAnswers[i].importance === 3) {
        maxScore += maxScoreConstant;
      }
      if (importantMatters.includes(i) && userAnswers[i].importance === 2) {
        maxScore += maxScoreConstant / 2;
      }
      continue;
    }
    if (Math.abs(userAnswers[i].agreement - committeeAnswers[i].agreement) === 0.5) {
      score += userAnswers[i].importance / 2;
      maxScore += userAnswers[i].importance;
      if (importantMatters.includes(i) && userAnswers[i].importance === 3) {
        score += maxScoreConstant / 2;
        maxScore += maxScoreConstant;
        continue;
      }
      if (importantMatters.includes(i)) {
        maxScore += maxScoreConstant;
      }
      continue;
    }
    if (userAnswers[i].agreement === committeeAnswers[i].agreement) {
      score += userAnswers[i].importance;
      maxScore += userAnswers[i].importance;
      if (userAnswers[i].importance === 3 && importantMatters.includes(i)) {
        maxScore += maxScoreConstant;
        score += maxScoreConstant;
      }
      if (userAnswers[i].importance === 2 && importantMatters.includes(i)) {
        maxScore += maxScoreConstant;
        score += maxScoreConstant / 2;
      }
      // if (userAnswers[i].importance == 3 && !importantMatters.includes(i)) {
      //   score -= 1;
      // }
      continue;
    }
  }
  if (maxScore === 0) {
    return 0;
  }
  return Math.round((score * 100) / maxScore);
}
