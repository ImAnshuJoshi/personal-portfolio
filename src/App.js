import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Connect from './components/connect/Connect.js';
import Theme from './components/Theme/Theme.js';

function App() {
  const mainRef = React.useRef(null);
  return (
    <div className="App">
      <Navbar mainRef={mainRef}/>
      <Connect/>
      <Theme/>
    </div>
  );
}

export default App;
