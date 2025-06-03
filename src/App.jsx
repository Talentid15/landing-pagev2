import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/Home';
import { Hero, MainPage, LogoTicker, CallToAction, Testimonials,GridCard } from './components/landing-page/index'
import Header from './components/common/header';
import Footer from './components/common/footer';
import Features from './components/landing-page/features';
import StatsSection from './components/landing-page/StatsCard';
import TalentIdForm from './components/landing-page/Form';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <main className='bg-[#edf2f7] overflow-hidden'>
            <Header />
            <MainPage />
            <LogoTicker/>
            <StatsSection/>
            <Features/>
            <GridCard />
            <TalentIdForm/>
            <Testimonials />
            <CallToAction />
            <Footer />
          </main>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;