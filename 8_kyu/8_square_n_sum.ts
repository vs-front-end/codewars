// https://www.codewars.com/kata/515e271a311df0350d00000f

export function squareSum(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur ** 2, 0);
}
