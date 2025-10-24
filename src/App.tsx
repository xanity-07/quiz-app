import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent/MainContent';
import { useQuestions } from '@/hooks/useQuestions';
import { Loader } from '@/components/Loader';
import { Error } from '@/components/Error';
import { StartScreen } from '@/components/StartScreen';
import { Questions } from '@/components/Question';
import { NextButton } from '@/components/NextButton';
import { ProgressBar } from '@/components/ProgressBar';
import { Finished } from '@/components/Finished';
import { Footer } from './components/Footer';
import { QuizTimer } from './components/QuizTimer';

export const App = () => {
  const {
    handleReset,
    questions,
    status,
    fetchQuestions,
    numQuestions,
    startQuiz,
    index,
    onAnswer,
    answer,
    nextQuestion,
    points,
    maxPossiblePoints,
    onFinished,
    highscore,
    handleTimer,
    secconds,
  } = useQuestions();

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='app'>
      <Header />

      <MainContent>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen startQuiz={startQuiz} numQuestions={numQuestions} />
        )}
        {status === 'active' && (
          <>
            <ProgressBar
              answer={answer}
              maxPossiblePoints={maxPossiblePoints}
              points={points}
              numQuestions={numQuestions}
              index={index}
            />
            <Questions
              question={questions[index]}
              onAnswer={onAnswer}
              answer={answer}
            />
            <Footer>
              <QuizTimer handleTimer={handleTimer} secconds={secconds} />
              <NextButton
                nextQuestion={nextQuestion}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
                onFinished={onFinished}
              />
            </Footer>
          </>
        )}

        {status === 'finished' && (
          <Finished
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            handleReset={handleReset}
          />
        )}
      </MainContent>
    </div>
  );
};
