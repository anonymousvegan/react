import React from 'react';
import Info from './components/info/info';
import About from './components/about/about';
import Interests from './components/interests/interests';
import Footer from './components/footer/footer';
import style from './App.module.css';

function App() {
  return (
    <div className = {style.container}>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;