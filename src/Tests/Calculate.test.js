import calculate from '../Logic/calculate';

describe('calculate', () => {
  test('should clear calculator data when buttonName is "AC"', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('handles decimal point correctly when "." button is clicked', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '.');
    expect(result).toEqual({ total: null, next: '5.', operation: null });
  });

  test('performs addition when "+" button is clicked', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+');
    expect(result).toEqual({ total: '15', next: null, operation: '+' });
  });

  test('performs substraction when "-" button is clicked', () => {
    const result = calculate({ total: '10', next: '5', operation: '-' }, '-');
    expect(result).toEqual({ total: '5', next: null, operation: '-' });
  });

  test('performs Modulo when "%" button is clicked', () => {
    const result = calculate({ total: '10', next: '5', operation: '%' }, '%');
    expect(result).toEqual({ total: '0', next: null, operation: '%' });
  });

  test('Change Sign when "+/-" button is clicked', () => {
    const result = calculate(
      { total: null, next: '-5', operation: '+/-' },
      '+/-',
    );
    expect(result).toEqual({ total: null, next: '5', operation: '+/-' });
  });

  test('Get result when "=" button is clicked', () => {
    const result = calculate({ total: '5', next: '8', operation: '+' }, '=');
    expect(result).toEqual({ total: '13', next: null, operation: null });
  });
});
