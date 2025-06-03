import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MainPage, LogoTicker, GridCard, StatsSection, Features, TalentIdForm } from './components/landing-page/index'
import { Header, Footer } from './components/common/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <main className='bg-[#edf2f7] overflow-hidden'>
            <Header />
            <MainPage />
            <LogoTicker />
            <StatsSection />
            <Features />
            <GridCard />
            <TalentIdForm />
            <Footer />
          </main>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;