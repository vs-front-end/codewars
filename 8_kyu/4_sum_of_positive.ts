// https://www.codewars.com/kata/5715eaedb436cf5606000381

const positiveSum = (arr: number[]): number => {
  const positives = arr.filter((num) => num > 0);
  const sumOfPositives = positives.reduce((prev, curr) => prev + curr, 0);

  return sumOfPositives;
};
