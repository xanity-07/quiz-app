import { Header } from '@/components/Header';
import { MainContent } from './components/MainContent/MainContent';

export const App = () => {
  return (
    <div className='app'>
      <Header />

      <MainContent>
        <p>1/5</p>
        <p>Questions?</p>
      </MainContent>
    </div>
  );
};
