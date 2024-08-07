
// Write a function that takes an array of numbers as input, and 
// returns a new array with only even values. Read about filter in JS

function filterOutEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const evenNumbers = filterOutEvenNumbers([1, 2, 3, 4, 5]);
console.log(evenNumbers);   // Outputs => [ 2, 4 ]


// Study about filter method here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
