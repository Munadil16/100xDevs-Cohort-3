
// Write a function that takes a user as an input and greets them with their name and age

function greet(user) {
  console.log("Hello, " + user.name + "!");       // Outputs => Hello, 100xDev!
  console.log("Your age is " + user["age"] + ".");   // Outputs => Your age is 20.
}

greet({
  name: "100xDev", 
  age: 20
});

console.log("-----------------------------------------------------------");

// Write a function that takes a new object as input which has name , age  and gender and 
// greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function specialGreetings1(user) {
  if (user.gender === "male") {
    console.log(`Hi Mr. ${user.name}, your age is ${user.age}`);
  } else if (user.gender === "female") {
    console.log(`Hi Mrs. ${user.name}, your age is ${user.age}`);
  } else {
    console.log(`Hi Others ${user.name}, your age is ${user.age}`);
  }
}

specialGreetings1({
  name: "Rahul",
  age: 21,
  gender: "male",
})

specialGreetings1({
  name: "Rohini",
  age: 20,
  gender: "female",
})

specialGreetings1({
  name: "ChatGPT",      // No hate (skull moment)
  age: 999,
  gender: "others",
})

console.log("-----------------------------------------------------------");

// Also tell the user if they are legal to vote or not

function specialGreetings2(user) {
  if (user.age >= 18) {
    if (user.gender === "male") {
      console.log(`Hi Mr. ${user.name}, your age is ${user.age}, and you are eligible to vote!`);
    } else if (user.gender === "female") {
      console.log(`Hi Mrs. ${user.name}, your age is ${user.age}, and you are eligible to vote!`);
    } else {
      console.log(`Hi Others ${user.name}, your age is ${user.age}, and you are eligible to vote!`);
    }
  } else {
    if (user.gender === "male") {
      console.log(`Hi Mr. ${user.name}, your age is ${user.age}, and you are not eligible to vote!`);
    } else if (user.gender === "female") {
      console.log(`Hi Mrs. ${user.name}, your age is ${user.age}, and you are not eligible to vote!`);
    } else {
      console.log(`Hi Others ${user.name}, your age is ${user.age}, and you are not eligible to vote!`);
    }
  }
}

specialGreetings2({
  name: "Tripathi",
  age: 19,
  gender: "male"
})
