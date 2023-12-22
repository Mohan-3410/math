import React, { useState } from 'react';
import { addStyles as addMathquillStyles, EditableMathField } from 'react-mathquill';
import './LatexEditor.css'; 
// Add MathQuill styles
addMathquillStyles();

const LatexEditor = ({ type, latexParser }) => {
    const [latex, setLatex] = useState('');
    const [text, setText] = useState('');

    const handleInputChange = (mathField) => {
        setLatex(mathField.latex());
        setText(mathField.text());
    };

    const handleClick = () => {
        if (!latex) {
            console.error('Please enter a valid LaTeX expression.');
            return;
        }
        latexParser(latex);
    };

    return (
        <div className="latex-editor-container">
            <EditableMathField
                latex={latex || `${type}`}
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
            <button onClick={handleClick} className="evaluate-button primary">
                Evaluate
            </button>
        </div>
    );
};

export default LatexEditor;
