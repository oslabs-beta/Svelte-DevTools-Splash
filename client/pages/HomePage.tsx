import Navbar from '../components/NavBar';
import MainHeader from '../components/MainHeader';
import Features from '../components/Features';
import Press from '../components/Press';
import Contributor from '../components/Contributor';
import { useCallback } from 'react';

const HomePage = () => {
  return (
    <div className='App'>
      <Navbar />
      <MainHeader />
      <Features />
      <Press />
      <Contributor />
    </div>
  );
};

export default HomePage;
