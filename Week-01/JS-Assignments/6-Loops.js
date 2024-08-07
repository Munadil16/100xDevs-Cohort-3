
// Write a function called sum that finds the sum from 1 to a number

function sum(number) {
  let sumOfNumbers = 0;

  for (let i = 1; i <= number; i++) {
    sumOfNumbers += i;
  }

  return sumOfNumbers;
}

console.log(sum(10)); // Outputs => 55

/** While-loop:
 * 
 *  let i = 1;
 *  while (i <= number) {
 *    sumOfNumbers += i;
 *    i++;
 *  } 
*/ 
