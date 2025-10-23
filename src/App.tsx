import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent/MainContent';
import { useQuestions } from '@/hooks/useQuestions';
import { Loader } from '@/components/Loader';
import { Error } from '@/components/Error';
import { StartScreen } from '@/components/StartScreen';
import { Question } from '@/components/Question';

export const App = () => {
  const { status, fetchQuestions, numQuestions, startQuiz } = useQuestions();

  useEffect(() => {
    fetchQuestions();
  });
  return (
    <div className='app'>
      <Header />

      <MainContent>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen startQuiz={startQuiz} numQuestions={numQuestions} />
        )}
        {status === 'active' && <Question />}
      </MainContent>
    </div>
  );
};
