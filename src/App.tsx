import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent/MainContent';
import { useFetchQuestions } from '@/hooks/useFetchQuestions';
import { Loader } from '@/components/Loader';
import { Error } from '@/components/Error';
import { StartScreen } from '@/components/StartScreen';

export const App = () => {
  const { status, fetchQuestions } = useFetchQuestions();
  useEffect(() => {
    fetchQuestions();
  });
  return (
    <div className='app'>
      <Header />

      <MainContent>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
      </MainContent>
    </div>
  );
};
