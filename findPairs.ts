export default function findPairsThatSumToValue(target: number, list: number[]): number[][] {
  const result: number[][] = [];
  const map: { [key: number]: number } = {};
  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    const remainder = target - current;
    if (map[remainder]) {
      // flip order of pair to keep the order of the original list
      result.push([remainder, current]);
    }
    map[current] = remainder;
  }
  
  return result;
}