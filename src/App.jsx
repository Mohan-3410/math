import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import Input1 from "./components/inputs/Input1"
import Simpson3_8rule from "./components/integration/Simpson3_8rule"
import "./App.scss";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme-variables', isDarkMode)
  };

  return (
    <div className="App">
      <div className="dark-theme" onClick={toggleDarkMode}>
        <div className="mode">{isDarkMode ? <FiSun /> : <FiMoon />}</div>
      </div>
      <Simpson3_8rule />
      {/* <Input1 /> */}
    </div>
  )
}

export default App
