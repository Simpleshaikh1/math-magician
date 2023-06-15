import { useState } from 'react';
import calculate from '../Logic/calculate';

function Calculator() {
  const [buttonItem, setbuttonItem] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickButtonHandler = (event) => {
    const buttonName = event.target.innerText;
    setbuttonItem(calculate(buttonItem, buttonName));
  };

  // eslint-disable-next-line no-unused-vars
  const { total, next, operation } = buttonItem;

  const createDigits = () => {
    const digits = [];

    for (let i = 9; i >= 1; i -= 1) {
      digits.push(
        <button type="button" onClick={clickButtonHandler} key={i}>{i}</button>,
      );
    }

    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>{next || operation}</span>
          {next || total || '0'}
        </div>
        <div className="ops-dig-container">
          <div className="operators">
            <button
              type="button"
              onClick={clickButtonHandler}
            >
              ÷
            </button>
            <button
              type="button"
              onClick={clickButtonHandler}
            >
              x
            </button>
            <button
              type="button"
              onClick={clickButtonHandler}
            >
              +
            </button>
            <button
              type="button"
              onClick={clickButtonHandler}
            >
              -
            </button>
            <button
              type="button"
              onClick={clickButtonHandler}
            >
              =
            </button>
          </div>

          <div className="digits">
            <button
              type="button"
              onClick={clickButtonHandler}
            >
              %
            </button>
            <button
              type="button"
              onClick={clickButtonHandler}
            >
              +/-
            </button>
            <button
              type="button"
              onClick={clickButtonHandler}
            >
              AC
            </button>
            {createDigits()}
            <button
              type="button"
              className="dot"
              onClick={clickButtonHandler}
            >
              .
            </button>
            <button
              type="button"
              className="zero"
              onClick={clickButtonHandler}
            >
              0
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
