import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import Input1 from "./components/inputs/Input1"
import Simpson3_8rule from "./components/integration/Simpson3_8rule"
import "./App.scss";
import Home from './components/home/Home';
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Home />
      </BrowserRouter>
      
      {/* <div className="dark-theme">
        <div className="mode"  onClick={toggleDarkMode}>{isDarkMode ? <FiSun /> : <FiMoon />}</div>
      </div>
      <Simpson3_8rule /> */}
      {/* <Input1 /> */}
    </div>
  )
}

export default App
