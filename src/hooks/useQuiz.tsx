import { createContext, useContext, useState } from "react";
import axios from "axios";
import { stringBooleanToBooleanExpression } from "../utils";
import { decode } from "html-entities";

const QUESTIONS_AMMOUNT = 10;
const DIFFICULTY = "hard";
const TYPE = "boolean";
const API_URL = `https://opentdb.com/api.php?amount=${QUESTIONS_AMMOUNT}&difficulty=${DIFFICULTY}&type=${TYPE}`;

type CorrectAnswer = "True" | "False";

export interface Question {
  category: string;
  correct_answer: CorrectAnswer;
  difficulty: string;
  question: string;
  type: string;
}

export interface Quiz {
  results: Question[];
}

interface Score {
  answer: boolean;
  correct_answer: boolean;
}

export interface IQuizContext {
  questions: Question[];
  loadQuizQuestions: () => Promise<void>;
  logScore: (answer: boolean, correct_answer: CorrectAnswer) => void;
  score: Score[];
  isLoading?: boolean;
  resetScore: () => void;
}

export const QuizContext = createContext<IQuizContext>({} as IQuizContext);

export const QuizProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState<Score[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  const getQuestions = async () => {
    setIsLoading(true);
    const response = await axios.get<Quiz>(API_URL);
    setIsLoading(false);

    return response.data.results.map((item: Question) => {
      return {
        ...item,
        question: decode(item.question),
      };
    });
  };

  const loadQuizQuestions = async () => {
    setQuestions(await getQuestions());
  };

  const logScore = (answer: boolean, correct_answer: CorrectAnswer) => {
    setScore([
      ...score,
      {
        answer,
        correct_answer: stringBooleanToBooleanExpression(correct_answer),
      },
    ]);
  };

  const resetScore = () => {
    setScore([]);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        loadQuizQuestions,
        isLoading,
        logScore,
        score,
        resetScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
