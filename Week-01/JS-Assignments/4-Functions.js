
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));     // Outputs => 3
console.log(sum("Str", 3)); // Outputs => Str3

console.log("-----------------------------------------------------------");

// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
  return age >= 18;
}

console.log(canVote(20));   // Outputs => true
console.log(canVote(17));   // Outputs => false
