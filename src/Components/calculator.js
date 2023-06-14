function Calculator() {
  const createDigits = () => {
    const digits = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 10; i++) {
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
          <span>(0)</span>
          0
        </div>
        <div className="ops-dig-container">
          <div className="operators">
            <button type="button">DEL</button>
            <button type="button">/</button>
            <button type="button">x</button>
            <button type="button">+</button>
            <button type="button">-</button>
            <button type="button">=</button>
          </div>

          <div className="digits">
            <button type="button">^</button>
            <button type="button">%</button>
            <button type="button">AC</button>
            {createDigits()}
            <button type="button">0</button>
            <button type="button">.</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
