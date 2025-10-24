import { initialState, questionReducer } from '@/reducers/questionReducer';
import type { Question } from '@/types';
import { useReducer } from 'react';

export const useQuestions = () => {
  const [state, dispatch] = useReducer(questionReducer, initialState);
  const { questions, status, index, answer, points, highscore } = state;

  const fetchQuestions = async () => {
    try {
      const res = await fetch('http://localhost:8000/questions');
      if (!res.ok) throw new Error('Network Problem');

      const data: Question[] = await res.json();
      dispatch({ type: 'dataRecieved', payload: data });

      return data;
    } catch (error) {
      dispatch({ type: 'dataFailed' });
      console.log(error);
    }
  };

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((cur, acc) => cur + acc.points, 0);

  const startQuiz = () => {
    dispatch({ type: 'start' });
  };

  const onAnswer = (index: number) => {
    dispatch({ type: 'newAnswer', payload: index });
  };

  const nextQuestion = () => {
    dispatch({ type: 'nextQuestion' });
  };

  const onFinished = () => {
    dispatch({ type: 'finished' });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return {
    questions,
    status,
    fetchQuestions,
    startQuiz,
    numQuestions,
    index,
    onAnswer,
    answer,
    nextQuestion,
    points,
    maxPossiblePoints,
    onFinished,
    highscore,
    handleReset,
  };
};
