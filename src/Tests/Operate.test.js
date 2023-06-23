import operate from '../logic/operate';

describe('Operate function test', () => {
  test('Performs addition correctly ', () => {
    const result = operate('3', '4', '+');
    expect(result).toEqual('7');
  });
  test('Performs multiplication correctly ', () => {
    const result = operate('3', '4', 'x');
    expect(result).toEqual('12');
  });
  test('Performs substraction correctly ', () => {
    const result = operate('3', '4', '-');
    expect(result).toEqual('-1');
  });
  test('Performs division correctly ', () => {
    const result = operate('12', '4', '÷');
    expect(result).toEqual('3');
  });

  test("return Can't divide by 0.", () => {
    const result = operate('60', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });
  test('Performs modulus', () => {
    const result = operate('10', '5', '%');
    expect(result).toEqual('0');
  });
});