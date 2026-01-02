// https://www.codewars.com/kata/555086d53eac039a2a000083

const isEven = (num: number) => num % 2 === 0;

const lovefunc = (flower1: number, flower2: number): boolean => {
  let areTheyInLove = false;

  if (isEven(flower1) && !isEven(flower2)) {
    areTheyInLove = true;
  }

  if (!isEven(flower1) && isEven(flower2)) {
    areTheyInLove = true;
  }

  return areTheyInLove;
};
