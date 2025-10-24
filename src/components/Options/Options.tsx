import type { Question } from '@/types';

interface Props {
  question: Question;
  onAnswer: (index: number) => void;
  answer: number | null;
}

export const Options = ({ question, onAnswer, answer }: Props) => {
  const hasAnswered = answer !== null;
  return (
    <div className='options'>
      <h4>{question.question}</h4>
      {question.options.map((option, i) => (
        <button
          onClick={() => onAnswer(i)}
          key={option}
          disabled={answer !== null}
          className={`btn btn-option ${answer === i ? 'answer' : ''} ${
            hasAnswered
              ? question.correctOption === i
                ? 'correct'
                : 'wrong'
              : ''
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
