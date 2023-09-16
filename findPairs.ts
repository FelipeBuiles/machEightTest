export default function findPairsThatSumToValue(list: number[], target: number): number[][] {
  const result: number[][] = [];
  const map: { [key: number]: number } = {};
  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    const remainder = target - current;
    if (map[remainder]) {
      result.push([current, remainder]);
    }
    map[current] = remainder;
  }
  return result;
}

// Tests
// const list = [1, 9, 5, 0, 20, -4, 12, 16, 7];
// const value = 14;
