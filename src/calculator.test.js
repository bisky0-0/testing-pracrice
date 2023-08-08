import { calculator } from "./calculator";


test('this calculate correctly', () => {
    expect(calculator.sum(1, 2)).toBe(3);
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.multiply(3, 3)).toBe(9);
})