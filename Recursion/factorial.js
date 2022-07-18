/*
 * Author: Olutola Oloruntobi Paul
 * Date: 7/18/2022
 * Function for finding factorial of a positive integer
 */

const factorial = (num) => {
  if (typeof num !== "number" || num < 1) return "Invalid Input";
  if (num === 1) return 1;
  return num * factorial(num - 1);
};
