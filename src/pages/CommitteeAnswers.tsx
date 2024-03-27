import { Box, CircularProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CandidateProfile } from "../components/CandidateProfile";
import { CommitteeAnswer } from "../components/CommitteeAnswer";
import { useEffect, useState } from "react";
import { Committee, CommitteeAnswerInterface, QuestionInterface } from "../common/types";
import { useUserAnswers } from "../common/state";
import { countResultPerCommittee } from "../common/utils";
import { CandidateProfileMobile } from "../components/CanidateProfileMobile";

export function CommitteeAnswers(props: { committeeName: string }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1000));
  const [fetchingData, setFetchingData] = useState<boolean>(true);
  const [committeeAnswers, setCommitteeAnswers] = useState<Committee>({});
  const [questions, setQuestions] = useState<QuestionInterface[]>([]);
  const userAnswers = useUserAnswers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/committees.json");
        const data = await response.json();
        setCommitteeAnswers(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
      try {
        const response = await fetch("/questions.json");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData().finally(() => {
      setFetchingData(false);
    });
  }, []);

  if (fetchingData) {
    return (
      <Box
        sx={{
          justifyContent: "center",
          textAlign: "center",
          height: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={isSmallScreen ? 2 : 8}>
      <Box textAlign={isSmallScreen ? "center" : "left"}>
        <Typography variant="h3" fontWeight={"bold"} marginBottom={"25px"}>
          Odpowiedzi komitetu
        </Typography>
        <Typography
          variant="h6"
          marginBottom={isSmallScreen ? "40px" : "50px"}
          maxWidth={isSmallScreen ? "100%" : "65%"}
        >
          Znajdziesz tu szczegółowe odpowiedzi oraz komentarze komitetów/kandydatów na prezydenta miasta. Odpowiedzi i
          komentarze są uporządkowane zgodnie z kolejnością stwierdzeń z testu. Kolorowe odpowiedzi oznaczają, że dane
          zagadanienie jest dla komitetu priorytetem. Na samym końcu znajdziesz też kilka słów komitetu skierowanych do
          wyborców.
        </Typography>
      </Box>
      {!isSmallScreen ? (
        <CandidateProfile
          showAnswersButton={false}
          committeeAnswers={null}
          committeeResult={
            userAnswers.length === 20
              ? countResultPerCommittee(
                  userAnswers,
                  committeeAnswers[props.committeeName].answers,
                  committeeAnswers[props.committeeName].importantMatters
                )
              : 0
          }
          candidateName={committeeAnswers[props.committeeName].candidateName}
          committeeLists={committeeAnswers[props.committeeName].committeeLists}
          committeeName={committeeAnswers[props.committeeName].fullCommitteeName}
          candidatePath={committeeAnswers[props.committeeName].candidatePicturePath}
          logoPath={committeeAnswers[props.committeeName].committeeLogoPath}
          committeeFullName={committeeAnswers[props.committeeName].fullCommitteeName}
          hasAgreed={committeeAnswers[props.committeeName].hasAgreed}
        ></CandidateProfile>
      ) : (
        <Box textAlign={"center"} justifyContent={"center"} display={"flex"}>
          <CandidateProfileMobile
            fullCommitteeName={committeeAnswers[props.committeeName].fullCommitteeName}
            candidatePicturePath={committeeAnswers[props.committeeName].candidatePicturePath}
            committeeLogoPath={committeeAnswers[props.committeeName].committeeLogoPath}
            candidateName={committeeAnswers[props.committeeName].candidateName}
            hasAgreed={committeeAnswers[props.committeeName].hasAgreed}
            candidateResult={
              userAnswers.length === 20
                ? countResultPerCommittee(
                    userAnswers,
                    committeeAnswers[props.committeeName].answers,
                    committeeAnswers[props.committeeName].importantMatters
                  )
                : 0
            }
            committeeLists={committeeAnswers[props.committeeName].committeeLists}
          ></CandidateProfileMobile>
        </Box>
      )}
      {committeeAnswers[props.committeeName].answers.map((answer: CommitteeAnswerInterface, index: number) => (
        <CommitteeAnswer
          question={questions[index]}
          agreement={answer.agreement}
          comment={answer.explanation}
          questionNumber={index + 1}
          isImportant={committeeAnswers[props.committeeName].importantMatters.includes(index)}
        ></CommitteeAnswer>
      ))}
      {committeeAnswers[props.committeeName].committeeComment && (
        <Box p={isSmallScreen ? 2 : 5} boxShadow={3} mx="auto" marginTop={"20px"} borderRadius={"30px"}>
          <Typography variant="h4" marginBottom={"30px"}>
            Wolny komentarz komitetu
          </Typography>
          <Typography variant="h6">{committeeAnswers[props.committeeName].committeeComment}</Typography>
        </Box>
      )}
    </Box>
  );
}
