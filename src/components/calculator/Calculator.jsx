import React, { useEffect, useState } from 'react';
import Keyboard from '../keyboard/Keyboard';
import * as math from 'mathjs';
import { EditableMathField } from 'react-mathquill';
import "./Calculator.scss"

function Calculator() {
  const [latex, setLatex] = useState('');
  const [text, setText] = useState('');
  const [mathField, setMathField] = useState("");
  const [ans, setAns] = useState('');



  const handleInputChange = (mathField) => {
    console.log(mathField.keystroke);
    setLatex(mathField.latex());
    setText(mathField.text());
    setMathField(mathField)
  };

  useEffect(() => {
    try {
      const result = math.evaluate(text);
      setAns(result);
    } catch (error) {
      console.error('Error evaluating expression:', error);
      setAns('Error');
    }
  }, [text]);

  const handleKeyPress = (key) => {
    if (mathField) {
      try {
        if (key === '<-') {
          mathField.keystroke('Left');
        } else if (key === '->') {
          mathField.keystroke('Right');
        } else if (key === 'x') {
          mathField.keystroke('Backspace')
        } else if (key === '/') {
          mathField.keystroke('191')
        }
        else {
          mathField.write(key);
        }


      } catch (error) {
        console.error('Error evaluating expression:', error);
        setAns('Error');
      }
    }
  };


  return (
    <div className="Calculator">
      <EditableMathField
        latex={latex}
        onChange={(mathField) => handleInputChange(mathField)}
        config={{
          autoCommands: 'pi theta sqrt sum int',
          spaceBehavesLikeTab: true,
          leftRightIntoCmdGoes: 'up',
          restrictMismatchedBrackets: true,
          noVirtualKeyboard: true,
        }}
        className="math-field"
      />
      <div>Ans: {ans}</div>
      <Keyboard mathField={mathField} onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default Calculator;
