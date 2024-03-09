// Assuming your Question component is named "Question"
import React, { useState, useEffect } from "react";
import { setNumberOfQuestions, useSelectedQuestion } from "../common/state";
import { QuestionInterface } from "../common/types";
import { Question } from "./Question";
import { CircularProgress } from "@mui/material";

export function Questionaire() {
  const selectedQuestion = useSelectedQuestion();
  const [questions, setQuestions] = useState<QuestionInterface[]>([]);
  const [fetchingData, setFetchingData] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        const data = await response.json();
        setQuestions(data);
        setNumberOfQuestions(data.length);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData().finally(() => {
      setFetchingData(false);
    });
  }, []);

  if (fetchingData || !questions.length) {
    return <CircularProgress />;
  }

  return (
    <Question
      question={questions[selectedQuestion]}
      questionNumber={selectedQuestion}
    />
  );
}
