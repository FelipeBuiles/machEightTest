import findPairs from './findPairs';

describe('findPairs', () => {
  test('empty values', () => {
    expect(findPairs([], 0)).toEqual([]);
  });

  test('no pairs', () => {
    expect(findPairs([1, 2, 3], 0)).toEqual([]);
  });

  test('one pair', () => {
    expect(findPairs([1, 2], 3)).toEqual([[2, 1]]);
  });
});