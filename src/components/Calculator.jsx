import React from "react";

export default function Calculator() {
    let [expression, setExpression] = React.useState('');
    let [answer, setAnswer] = React.useState('0');

    const handleClick = (event) => {
        const value = event.target.dataset.value;
        const role = event.target.dataset.role;

        if (role === 'function') {
            if (value === 'clear') {
                setExpression('');
                setAnswer('0');
            } else if (value === 'delete') {
                setExpression(prev => prev.slice(0, -1));
            }
        } else if (role === 'equals') {
            try {
                setAnswer(eval(expression));
            } catch (err) {
                console.log(err)
                setAnswer('Error');
            }
        } else if (role === 'operator' || role === 'number') {
            // Prevent multiple decimals in the same number
            if (value === '.') {
                const parts = expression.split(/[+\-*/%]/);
                const lastPart = parts[parts.length - 1];
                if (lastPart.includes('.')) return;
                if (lastPart === '') return setExpression(prev => prev + '0.');
            }
            setExpression(prev => prev + value);
        }

    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input-screen" data-role="input">{expression | '0'}</div>
                <div className="answer-screen" data-role="output">{answer}</div>
            </div>

            <div className="buttons-grid">
                <button className="btn function" data-role="function" data-value="clear" onClick={handleClick}>AC</button>
                <button className="btn function" data-role="function" data-value="delete" onClick={handleClick}>DEL</button>
                <button className="btn operator" data-role="operator" data-value="%" onClick={handleClick}>%</button>
                <button className="btn operator" data-role="operator" data-value="/" onClick={handleClick}>÷</button>

                <button className="btn number" data-role="number" data-value="7" onClick={handleClick}>7</button>
                <button className="btn number" data-role="number" data-value="8" onClick={handleClick}>8</button>
                <button className="btn number" data-role="number" data-value="9" onClick={handleClick}>9</button>
                <button className="btn operator" data-role="operator" data-value="*" onClick={handleClick}>×</button>

                <button className="btn number" data-role="number" data-value="4" onClick={handleClick}>4</button>
                <button className="btn number" data-role="number" data-value="5" onClick={handleClick}>5</button>
                <button className="btn number" data-role="number" data-value="6" onClick={handleClick}>6</button>
                <button className="btn operator" data-role="operator" data-value="-" onClick={handleClick}>−</button>

                <button className="btn number" data-role="number" data-value="1" onClick={handleClick}>1</button>
                <button className="btn number" data-role="number" data-value="2" onClick={handleClick}>2</button>
                <button className="btn number" data-role="number" data-value="3" onClick={handleClick}>3</button>
                <button className="btn operator" data-role="operator" data-value="+" onClick={handleClick}>+</button>

                <button className="btn number zero" data-role="number" data-value="0" onClick={handleClick}>0</button>
                <button className="btn number" data-role="number" data-value="." onClick={handleClick}>.</button>
                <button className="btn equals" data-role="equals" data-value="=" onClick={handleClick}>=</button>
            </div>
        </div>
    );
}
