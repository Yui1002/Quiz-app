import * as React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  questionNr: number;
  totalQuestions: number;
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
};

const QuestionCard: React.FC<Props> = ({
  questionNr,
  totalQuestions,
  question,
  answers,
  callback,
  userAnswer,
}) => {
  const createMarkUp = () => {
    return {__html: question}
  }

  return (
    <Wrapper>
      <p className="number">
        Question {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={createMarkUp()}></p>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            onClick={callback}
            value={answer}
            disabled={userAnswer ? true : false}
          >
            {answer}
          </button>
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
};

export default QuestionCard;

