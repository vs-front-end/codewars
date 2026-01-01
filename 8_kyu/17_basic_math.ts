// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

const basicOp = (operation: string, value1: number, value2: number): number => {
  return eval(`${value1} ${operation} ${value2}`);
};
