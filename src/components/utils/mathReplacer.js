// mathReplacer.js

const replaceMathExpressions = (expression) => {
    const replaceTrigonometricFunctions = (expression) => {
        return expression
            .replace(/\\cdot/g, '*')
            .replace(/\\sqrt\{([^]+)\}/g, 'sqrt($1)')
            .replace(/\\pi/g,'pi')
            .replace(/\\sin\s*\\left\(([^]+)\\right\)/g, 'sin($1)')
            .replace(/\\cos\s*\\left\(([^]+)\\right\)/g, 'cos($1)')
            .replace(/\\tan\s*\\left\(([^]+)\\right\)/g, 'tan($1)')
            .replace(/\\cot\s*\\left\(([^]+)\\right\)/g, 'cot($1)')
            .replace(/\\sec\s*\\left\(([^]+)\\right\)/g, 'sec($1)')
            .replace(/\\csc\s*\\left\(([^]+)\\right\)/g, 'csc($1)')
            .replace(/\\operatorname\{cosec\}\\left\(([^]+)\\right\)/g, 'csc($1)')
            .replace(/\\sin\^\{-1\}([a-z\d.]+[a-z]?)/ig, 'asin($1)')
            .replace(/\\cos\^\{-1\}([a-z\d.]+[a-z]?)/ig, 'acos($1)')
            .replace(/\\tan\^\{-1\}([a-z\d.]+[a-z]?)/ig, 'atan($1)')
            .replace(/\\cot\^\{-1\}([a-z\d.]+[a-z]?)/ig, 'acot($1)')
            .replace(/\\csc\^\{-1\}([a-z\d.]+[a-z]?)/ig, 'acsc($1)')
            .replace(/\\sec\^\{-1\}([a-z\d.]+[a-z]?)/ig, 'asec($1)')
            .replace(/\\operatorname\{cosec\}\^\{-1\}([a-z\d.]+[a-z]?)/ig, 'csc($1)')
            .replace(/\\sin\^\{-1\}\\left\(([^]+)\\right\)/g, 'asin($1)')
            .replace(/\\cos\^\{-1\}\\left\(([^]+)\\right\)/g, 'acos($1)')
            .replace(/\\tan\^\{-1\}\\left\(([^]+)\\right\)/g, 'atan($1)')
            .replace(/\\cot\^\{-1\}\\left\(([^]+)\\right\)/g, 'acot($1)')
            .replace(/\\sec\^\{-1\}\\left\(([^]+)\\right\)/g, 'asec($1)')
            .replace(/\\csc\^\{-1\}\\left\(([^]+)\\right\)/g, 'acsc($1)')
            .replace(/\\operatorname\{cosec\}\^\{-1\}\\left\(([^]+?)\\right\)/g, 'acsc($1)')
            .replace(/\\ln\s*\\left\(([^]+?)\\right\)/g, 'log($1)')
            .replace(/\\log\s*\\left\(([^]+?)\\right\)/g, 'log10($1)')
            .replace(/\\sin\s*([a-z\d.]+[a-z]?)/ig, 'sin($1)')
            .replace(/\\cos\s*([a-z\d.]+[a-z]?)/ig, 'cos($1)')
            .replace(/\\tan\s*([a-z\d.]+[a-z]?)/ig, 'tan($1)')
            .replace(/\\cot\s*([a-z\d.]+[a-z]?)/ig, 'cot($1)')
            .replace(/\\csc\s*([a-z\d.]+[a-z]?)/ig, 'csc($1)')
            .replace(/\\sec\s*([a-z\d.]+[a-z]?)/ig, 'sec($1)')
            .replace(/\\operatorname\{cosec\}([a-z\d.]+[a-z]?)/ig, 'csc($1)')
            .replace(/\\ln\s*([a-z\d.]+[a-z]?)/ig, 'log($1)')
            .replace(/\\log\s*([a-z\d.]+[a-z]?)/ig, 'log10($1)')
            .replace(/\\left\(([^]+)\\right\)/g,'($1)' )
            .replace(/([a-z\d.]+[a-z]?)\^\{([^]+)\}/ig, '($1)^($2)')
    };
    
    const replaceRecursiveFrac = (expression) => {
        const regex = /\\frac{([^{}]+)}{([^{}]+)}/g;

        if (regex.test(expression)) {
            return replaceRecursiveFrac(expression.replace(regex, '($1)/($2)'));
        }

        return expression;
    };
    return replaceRecursiveFrac(replaceTrigonometricFunctions(expression));
};

export default replaceMathExpressions;
