import type { Question } from '@/types';
import { Options } from '../Options';

interface Props {
  question: Question;
  onAnswer: (index: number) => void;
  answer: number | null;
}

export const Questions = ({ question, onAnswer, answer }: Props) => {
  return <Options question={question} onAnswer={onAnswer} answer={answer} />;
};
