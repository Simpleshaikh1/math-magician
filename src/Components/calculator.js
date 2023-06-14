function Calculator() {
  const createDigits = () => {
    const digits = [];

    for (let i = 9; i >= 1; i -= 1) {
      digits.push(
        <button type="button" key={i}>{i}</button>,
      );
    }

    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          0
        </div>
        <div className="ops-dig-container">
          <div className="operators">
            <button type="button">÷</button>
            <button type="button">x</button>
            <button type="button">+</button>
            <button type="button">-</button>
            <button type="button">=</button>
          </div>

          <div className="digits">
            <button type="button">%</button>
            <button type="button">+/-</button>
            <button type="button">AC</button>
            {createDigits()}
            <button type="button" className="dot">.</button>
            <button type="button" className="zero">0</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
