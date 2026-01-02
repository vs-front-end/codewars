// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

const digitize = (arr: number): number[] => {
  const reversedArray = arr.toString().split("").reverse();
  const formattedArray = reversedArray.map((num) => Number(num));

  return formattedArray;
};
