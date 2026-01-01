// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

const extractFirstLetter = (name: string) => name.slice(0, 1).toUpperCase();

const abbrevName = (name: string): string => {
  const splittedName = name.split(" ");

  const firstName = splittedName[0];
  const secondName = splittedName[1];

  const firstLetter = extractFirstLetter(firstName);
  const seconLetter = extractFirstLetter(secondName);

  return `${firstLetter}.${seconLetter}`;
};
