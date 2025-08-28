import { sum, subtract } from './index';

describe('Math functions', () => {
  test('sum adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('subtract subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });
});
