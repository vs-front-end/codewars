// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

const findNeedle = (haystack: any[]): string => {
  const index = haystack.findIndex((item) => item === "needle").toString();

  return `found the needle at position ${index}`;
};
