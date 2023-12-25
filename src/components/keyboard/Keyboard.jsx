// Keyboard.js

import React, { useState } from 'react';
import { InlineMath } from 'react-katex';
import './Keyboard.scss';
import FunctionButtons from './FunctionButtons';

const Keyboard = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [isFuncPopupVisible, setFuncPopupVisible] = useState(false);

  const handleClick = (value) => {
    // Handle button click (you can implement your logic here)
    console.log(`keyboard Button clicked: ${value}`);
    if (value === 'func') {
      setFuncPopupVisible(true);
    }
  };

  const toggleKeyboardVisibility = () => {
    setKeyboardVisible(!isKeyboardVisible);
  };

  const closeFuncPopup = () => {
    setFuncPopupVisible(false);
  };


  return (
    <div className='Keyboard'>
      <div className={`buttons ${isKeyboardVisible && 'visible'}`}>
        <div className="column1">
          <div className="row">
            <button onClick={() => handleClick('x')}><InlineMath math="x" /></button>
            <button onClick={() => handleClick('y')}><InlineMath math="y" /></button>
            <button onClick={() => handleClick('a^2')}><InlineMath math="a^2" /></button>
            <button onClick={() => handleClick('a^b')}><InlineMath math="a^b" /></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('(')}><InlineMath math="(" /></button>
            <button onClick={() => handleClick(')')}><InlineMath math=")" /></button>
            <button onClick={() => handleClick('<')}><InlineMath math="\lt" /></button>
            <button onClick={() => handleClick('>')}><InlineMath math="\gt" /></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('|a|')}><InlineMath math="|a|" /></button>
            <button onClick={() => handleClick(',')}><InlineMath math="," /></button>
            <button onClick={() => handleClick('<=')}><InlineMath math="\le" /></button>
            <button onClick={() => handleClick('>=')}><InlineMath math="\ge" /></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('abc')}><InlineMath math="" /></button>
            <button onClick={() => handleClick('s')}><InlineMath math="" /></button>
            <button onClick={() => handleClick('\\sqrt')}><InlineMath math="\sqrt{}" /></button>
            <button onClick={() => handleClick('\\pi')}><InlineMath math="\pi" /></button>
          </div>
        </div>
        <div className="column2">
          <div className="row">
            <button onClick={() => handleClick('7')}><InlineMath math="7" /></button>
            <button onClick={() => handleClick('8')}><InlineMath math="8" /></button>
            <button onClick={() => handleClick('9')}><InlineMath math="9" /></button>
            <button onClick={() => handleClick('/')}><InlineMath math="/" /></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('4')}><InlineMath math="4" /></button>
            <button onClick={() => handleClick('5')}><InlineMath math="5" /></button>
            <button onClick={() => handleClick('6')}><InlineMath math="6" /></button>
            <button onClick={() => handleClick('*')}><InlineMath math="*" /></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('1')}><InlineMath math="1" /></button>
            <button onClick={() => handleClick('2')}><InlineMath math="2" /></button>
            <button onClick={() => handleClick('3')}><InlineMath math="3" /></button>
            <button onClick={() => handleClick('-')}><InlineMath math="-" /></button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('0')}><InlineMath math="0" /></button>
            <button onClick={() => handleClick('.')}><InlineMath math="." /></button>
            <button onClick={() => handleClick('.')}><InlineMath math="=" /></button>
            <button onClick={() => handleClick('+')}><InlineMath math="+" /></button>
          </div>
        </div>
        <div className="column3">
          <div className="column">
            <button onClick={() => handleClick('func')}><InlineMath math="\text{func}" /></button>
            <div className="row">
              <button onClick={() => handleClick('<-')}><InlineMath math="\leftarrow" /></button>
              <button onClick={() => handleClick('->')}><InlineMath math="\rightarrow" /></button>
            </div>
            <button onClick={() => handleClick('X')}><span class="material-icons-sharp">backspace</span></button>
            <button onClick={() => handleClick('Enter')}><span class="material-icons-sharp">keyboard_return</span></button>
          </div>
        </div>
      </div>
      <div className="toggle-btn" onClick={toggleKeyboardVisibility}>
        {isKeyboardVisible ? <span class="material-icons-sharp">expand_more</span> : <span class="material-icons-sharp">expand_less</span>}
      </div >
      {isFuncPopupVisible && (
        <div className="function-popup">
          <FunctionButtons
            category="Trigonometric"
            functions={['\\sin', '\\cos', '\\tan', '\\csc', '\\sec', '\\cot']}
            onClick={handleClick}
            onClose={closeFuncPopup}
          />
          <FunctionButtons
            category="Inverse Trigonometric"
            functions={['\\sin^{-1}', '\\cos^{-1}', '\\tan^{-1}', '\\csc^{-1}', '\\sec^{-1}', '\\cot^{-1}']}
            onClick={handleClick}
            onClose={closeFuncPopup}
          />
          <FunctionButtons
            category="Logarithmic"
            functions={['\\log', '\\ln', '\\cos', '\\sin']}
            onClick={handleClick}
            onClose={closeFuncPopup}
          />
          <button onClick={closeFuncPopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Keyboard;
