// Keyboard.js

import React, { useState } from 'react';
import { InlineMath } from 'react-katex';
import './Keyboard.scss';

const Keyboard = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const handleClick = (value) => {
    // Handle button click (you can implement your logic here)
    console.log(`Button clicked: ${value}`);
  };

  const toggleKeyboardVisibility = () => {
    setKeyboardVisible(!isKeyboardVisible);
  };


  return (
    <div className='Keyboard'>
      <button className="toggle-btn" onClick={toggleKeyboardVisibility}>
        {isKeyboardVisible ? 'Hide Keyboard' : 'Show Keyboard'}
      </button >
      <div className={`buttons ${isKeyboardVisible && 'visible'}`}>
        <div className="column1">
          <div className="row">
            <button onClick={() => handleClick('x')}><InlineMath math="x"/></button>
            <button onClick={() => handleClick('y')}><InlineMath math="y"/></button>
            <button onClick={() => handleClick('a^2')}><InlineMath math="a^2"/></button>
            <button onClick={() => handleClick('a^b')}><InlineMath math="a^b"/></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('(')}><InlineMath math="("/></button>
            <button onClick={() => handleClick(')')}><InlineMath math=")"/></button>
            <button onClick={() => handleClick('<')}><InlineMath math="\lt"/></button>
            <button onClick={() => handleClick('>')}><InlineMath math="\gt"/></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('|a|')}><InlineMath math="|a|"/></button>
            <button onClick={() => handleClick(',')}><InlineMath math=","/></button>
            <button onClick={() => handleClick('<=')}><InlineMath math="\le"/></button>
            <button onClick={() => handleClick('>=')}><InlineMath math="\ge"/></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('abc')}><InlineMath math=""/></button>
            <button onClick={() => handleClick('s')}><InlineMath math=""/></button>
            <button onClick={() => handleClick('\\sqrt')}><InlineMath math="\sqrt{}"/></button>
            <button onClick={() => handleClick('\\pi')}><InlineMath math="\pi"/></button>
          </div>
        </div>
        <div className="column2">
          <div className="row">
            <button onClick={() => handleClick('7')}><InlineMath math="7"/></button>
            <button onClick={() => handleClick('8')}><InlineMath math="8"/></button>
            <button onClick={() => handleClick('9')}><InlineMath math="9"/></button>
            <button onClick={() => handleClick('/')}><InlineMath math="/"/></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('4')}><InlineMath math="4"/></button>
            <button onClick={() => handleClick('5')}><InlineMath math="5"/></button>
            <button onClick={() => handleClick('6')}><InlineMath math="6"/></button>
            <button onClick={() => handleClick('*')}><InlineMath math="*"/></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('1')}><InlineMath math="1"/></button>
            <button onClick={() => handleClick('2')}><InlineMath math="2"/></button>
            <button onClick={() => handleClick('3')}><InlineMath math="3"/></button>
            <button onClick={() => handleClick('-')}><InlineMath math="-"/></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('0')}><InlineMath math="0"/></button>
            <button onClick={() => handleClick('.')}><InlineMath math="."/></button>
            <button onClick={() => handleClick('.')}><InlineMath math="="/></button>
            <button onClick={() => handleClick('+')}><InlineMath math="+"/></button>
          </div>
        </div>
        <div className="column3">
          <div className="column">
            <button onClick={() => handleClick('func')}><InlineMath math="\text{func}"/></button>
            <div className="row">
              <button onClick={() => handleClick('<-')}><InlineMath math="\leftarrow"/></button>
              <button onClick={() => handleClick('->')}><InlineMath math="\rightarrow"/></button>
            </div>
            <button onClick={() => handleClick('X')}><InlineMath math="X"/></button>
            <button onClick={() => handleClick('Enter')}><InlineMath math="Ent"/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
