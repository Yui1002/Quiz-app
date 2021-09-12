import React, { useState } from "react";
import QuestionCard from "./component/QuestionCard";
import { fetchQuestions, Difficulty, AllFetchedData } from "./API";
import { GlobalStyle, Wrapper } from "./App.styles";

const TOTAL_QUESTIONS = 10;

// when the user clicks an answer, it is stored
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<AllFetchedData[]>([]);
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.MEDIUM
    );
    setQuestions(newQuestion);

    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const isCorrect = questions[number].correct_answer === answer;

      if (isCorrect) {
        setScore((prev) => prev + 1);
      }

      const answerObject = {
        question: questions[number].question,
        answer: answer,
        correct: isCorrect,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestions = () => {
    const nextQuestion = number + 1;
    console.log(nextQuestion);

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(number + 1);
    }
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <div>
          <h1>Trivia Quiz</h1>
          {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
            <button className="start" onClick={startTrivia}>
              start
            </button>
          ) : null}
          {!gameOver ? <p className="score">Score: {score}</p> : null}
          {loading && <p>Loading Questions...</p>}
        </div>
        {!gameOver && !loading ? (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            callback={checkAnswer}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
          />
        ) : null}
        <div>
          {!gameOver &&
          !loading &&
          userAnswer.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestions}>
              Next Question
            </button>
          ) : null}
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default App;
