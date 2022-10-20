import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Connect from './components/connect/Connect.js';

function App() {
  const mainRef = React.useRef(null);
  return (
    <div className="App">
      <Navbar mainRef={mainRef}/>
      <Connect/>
    </div>
  );
}

export default App;
