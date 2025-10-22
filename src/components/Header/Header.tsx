import logo from '@/assets/react.svg';

export const Header = () => {
  return (
    <header className='app-header'>
      <img src={logo} alt='React logo' />
      <h1>The React Quiz</h1>
    </header>
  );
};
