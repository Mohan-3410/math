// FunctionButtons.js

import React from 'react';
import './FunctionButtons.scss';
import { InlineMath } from 'react-katex';

const FunctionButtons = ({ category, functions, onClick, onClose }) => {
  const handleClick = (func) => {
    onClick(func);
    onClose(); // Close the popup after a button is clicked
  };

  return (
    <div className="FunctionButtons">
      <h3>{category}</h3>
      <div className="button-container">
        {functions.map((func) => (
          <button key={func} onClick={() => handleClick(func)}>
            <InlineMath math={func} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FunctionButtons;
