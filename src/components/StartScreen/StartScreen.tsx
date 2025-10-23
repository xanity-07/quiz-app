interface Props {
  startQuiz: () => void;
  numQuestions: number;
}

export const StartScreen = ({ numQuestions, startQuiz }: Props) => {
  return (
    <div className='start'>
      <h2>Welcome to the react Quiz!</h2>
      <h3> {numQuestions} questions to test your React mastery</h3>
      <button className='btn btn-ui' onClick={startQuiz}>
        Let's Start
      </button>
    </div>
  );
};
