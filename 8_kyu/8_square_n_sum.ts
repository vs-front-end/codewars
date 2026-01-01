// https://www.codewars.com/kata/515e271a311df0350d00000f

const squareSum = (numbers: number[]): number => {
  return numbers.reduce((prev, curr) => prev + curr ** 2, 0);
};
