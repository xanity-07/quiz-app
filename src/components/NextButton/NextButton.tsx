interface Props {
  nextQuestion: () => void;
  answer: number | null;
  index: number;
  numQuestions: number;
  onFinished: () => void;
}
export const NextButton = ({
  nextQuestion,
  answer,
  index,
  onFinished,
  numQuestions,
}: Props) => {
  if (answer === null) return null;
  if (index < numQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => {
          nextQuestion();
        }}
      >
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => {
          onFinished();
        }}
      >
        Finished
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => {
          onFinished();
        }}
      >
        Finished
      </button>
    );
  }
};
