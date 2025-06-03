import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/Home';
import { Hero, MainPage, LogoTicker, CallToAction, Testimonials,GridCard } from './components/landing-page/index'
import Header from './components/common/header';
import Footer from './components/common/footer';
import TrustSection from './components/landing-page/LogoTicker';
import Features from './components/landing-page/features';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <main className='bg-[#e9d5ff]'>
            <Header />
            <MainPage />
            <LogoTicker />
            <TrustSection />
            <Features/>
            <GridCard />
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