import React from 'react';
import { Cta, Brand, Navbar } from './components';
import { Footer, Blog, Possbilty, Features, WhatGPT3, Header } from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
         <Navbar />
         <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possbilty />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App