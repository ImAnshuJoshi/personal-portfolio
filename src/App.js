import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Connect from './components/connect/Connect.js';
import Theme from './components/Theme/Theme.js';
import MainPage from './components/MainPage/MainPage';
import Skills from './components/Skills/Skills';

function App() {
  const mainRef = React.useRef(null);
  return (
    <div className="App">
      <Navbar mainRef={mainRef}/>
      <Theme/>
      <MainPage/>
      <Skills/>
      <Connect/>
    </div>
  );
}

export default App;
