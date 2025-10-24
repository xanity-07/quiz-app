interface Props {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
  handleReset: () => void;
}

export const Finished = ({
  points,
  maxPossiblePoints,
  highscore,
  handleReset,
}: Props) => {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  let emoji;

  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙃';
  if (percentage >= 1 && percentage < 50) emoji = '🤔';
  if (percentage === 0) emoji = '🤦🏼‍♂️';

  return (
    <>
      <p className='result'>
        <span>{emoji}</span> Your score was {''}
        <strong>
          {points} out of {maxPossiblePoints} ({percentage}%)
        </strong>
      </p>
      <p className='highscore'>Highscore: {highscore} points</p>
      <button className='btn btn-ui' onClick={handleReset}>
        Retart Quiz
      </button>
    </>
  );
};
