// https://www.codewars.com/kata/54edbc7200b811e956000556

const countSheeps = (arrayOfSheep: (boolean | undefined | null)[]) => {
  return arrayOfSheep.filter((sheep) => sheep === true).length;
};
