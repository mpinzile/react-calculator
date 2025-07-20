export default function Calculator() {
    return (
        <div className="calculator">
            <div className="display">
                <div className="input-screen" data-role="input">2+4</div>
                <div className="answer-screen" data-role="output">6</div>
            </div>

            <div className="buttons-grid">
                <button className="btn function" data-role="function" data-value="clear">AC</button>
                <button className="btn function" data-role="function" data-value="delete">DEL</button>
                <button className="btn operator" data-role="operator" data-value="%">%</button>
                <button className="btn operator" data-role="operator" data-value="/">÷</button>

                <button className="btn number" data-role="number" data-value="7">7</button>
                <button className="btn number" data-role="number" data-value="8">8</button>
                <button className="btn number" data-role="number" data-value="9">9</button>
                <button className="btn operator" data-role="operator" data-value="*">×</button>

                <button className="btn number" data-role="number" data-value="4">4</button>
                <button className="btn number" data-role="number" data-value="5">5</button>
                <button className="btn number" data-role="number" data-value="6">6</button>
                <button className="btn operator" data-role="operator" data-value="-">−</button>

                <button className="btn number" data-role="number" data-value="1">1</button>
                <button className="btn number" data-role="number" data-value="2">2</button>
                <button className="btn number" data-role="number" data-value="3">3</button>
                <button className="btn operator" data-role="operator" data-value="+">+</button>

                <button className="btn number zero" data-role="number" data-value="0">0</button>
                <button className="btn number" data-role="number" data-value=".">.</button>
                <button className="btn equals" data-role="equals" data-value="=">=</button>
            </div>
        </div>
    );
}
