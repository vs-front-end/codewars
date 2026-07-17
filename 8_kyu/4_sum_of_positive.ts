// https://www.codewars.com/kata/5715eaedb436cf5606000381

export function positiveSum(arr: number[]): number {
  const positiveNumbers = arr?.filter((num) => num > 0);
  const sumOfPositives = positiveNumbers?.reduce((acc, cur) => acc + cur, 0);

  return sumOfPositives;
}
