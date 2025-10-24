interface Props {
  numQuestions: number;
  points: number;
  index: number;
  maxPossiblePoints: number;
  answer: number | null;
}

export const ProgressBar = ({
  numQuestions,
  points,
  index,
  maxPossiblePoints,
  answer,
}: Props) => {
  return (
    <header className='progress'>
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points}/{maxPossiblePoints} Points
      </p>
    </header>
  );
};
