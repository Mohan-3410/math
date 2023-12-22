import React, { useEffect, useState } from 'react';
import LatexEditor from '../inputs/LatexEditor';
import * as math from 'mathjs';
import replaceMathExpressions from '../utils/mathReplacer';

function Simpson3_8rule() {
    const [x0, setX0] = useState('');
    const [xn, setXn] = useState('');
    const [fx, setFx] = useState('');
    const [area, setArea] = useState('');

    useEffect(() => {
        if (x0 !== '' && xn !== '' && fx !== '') {
            calculateArea();
        }
    }, [x0, xn, fx]);

    const calculateArea = () => {
        let ans = 0,
            ans1,
            computedArea;
        let n = 1023;
        let h = (xn - x0) / n;
        for (let i = 1; i < n; i++) {
            if (i % 3 !== 0) ans += 3 * funX(x0 + i * h);
            else ans += 2 * funX(x0 + i * h);
        }
        ans1 = funX(x0) + funX(xn);
        computedArea = ans + ans1;
        computedArea *= (3 * h) / 8;
        setArea(Math.round(computedArea * 1e13) / 1e13);
    };


    const funX = (xValue) => {
        const result = fx.evaluate({ x: xValue});
        const parse=parseFloat(result)
        return parse;
    };

    function function_x(latex) {
    
        const integralRegex = /\\int_\{?([^]+?)\}?\^\{?([^]+?)\}?\\left\(([^]+?)\\right\)dx/
        const match = latex.match(integralRegex);

        if (match) {
            const lowerLimit = parseFloat(math.evaluate(replaceMathExpressions(match[1])))+1e-17;
            const upperLimit = parseFloat(math.evaluate(replaceMathExpressions(match[2])))-1e-17;
            const int= replaceMathExpressions(match[3])
            
            //console.log("lowerlimit", lowerLimit, "upperlimit", upperLimit,"integrand1",int )
            const integrand= math.compile(int)
            setX0(lowerLimit);
            setXn(upperLimit);
            setFx(integrand)
        } else {
            console.log('Invalid LaTeX code');
        }
    }

    return (
        <div className="Simpson3_8rule">
            <h2>SIMPSON'S 3/8 RULE</h2>
            <LatexEditor type="\int_{}^{}\left(\right)dx" latexParser={function_x} />
            <div>Area: <span style={{color:"var(--color-primary)"}}>{area}</span></div>
        </div>  
    );
}

export default Simpson3_8rule;
