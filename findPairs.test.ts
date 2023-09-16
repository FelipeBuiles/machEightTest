import findPairs from './findPairs';

describe('findPairs', () => {
  test('empty values', () => {
    expect(findPairs(0, [])).toEqual([]);
  });

  test('no pairs', () => {
    expect(findPairs(0, [1, 2, 3])).toEqual([]);
  });

  test('one pair', () => {
    expect(findPairs(3, [1, 2])).toEqual([[1, 2]]);
  });

  test('multiple pairs', () => {
    expect(findPairs(12, [12, 1, 9, 5, 0, 20, -4, 12, 16, 7])).toEqual([[0,12], [-4,16], [5,7]]);
  });

  test('duplicate pairs', () => {
    expect(findPairs(12, [6, 6, 6])).toEqual([[6,6], [6,6]]);
  });

  test('negative numbers', () => {
    expect(findPairs(0, [-1, 1, 2, -2])).toEqual([[-1,1], [2,-2]]);
  });
});