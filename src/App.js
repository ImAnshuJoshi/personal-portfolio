import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Connect from './components/connect/Connect.js';
import Theme from './components/Theme/Theme.js';
import MainPage from './components/MainPage/MainPage';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact/Contact';

function App() {
  const mainRef = React.useRef(null);
  return (
    <div className="App">
      <Navbar mainRef={mainRef}/>
      <Theme/>
      <Router>
        <Routes>
          <Route path='/' element={<><MainPage/><Skills/></>}/>
          <Route path='/projects' element={<><Projects/></>}/>
          <Route path='/contacts' element={<><Contact/></>}/>
        </Routes>
      </Router>
      <Connect/>
    </div>
  );
}

export default App;
