import { useEffect } from 'react';

interface Props {
  handleTimer: () => void;
  secconds: number | null;
}

export const QuizTimer = ({ handleTimer, secconds }: Props) => {
  const mins = secconds != null ? Math.floor(secconds / 60) : 0;
  const secs = secconds != null ? secconds % 60 : 0;
  const formattedMins = mins < 10 ? `0${mins}` : mins;
  const formattedSecs = secs < 10 ? `0${secs}` : secs;

  useEffect(() => {
    if (secconds == null || secconds <= 0) return;

    const id = setInterval(handleTimer, 1000);

    return () => clearInterval(id);
  }, [handleTimer, secconds]);
  return (
    <div className='timer'>
      {formattedMins}:{formattedSecs}
    </div>
  );
};
