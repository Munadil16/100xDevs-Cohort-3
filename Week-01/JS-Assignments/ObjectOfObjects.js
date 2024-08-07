
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male
 
function ageAbove18AndMale(users) {
  return users.filter((user) => user.age > 18 && user.gender === "male");
}

const filteredUsers = ageAbove18AndMale([{
		name: "Harkirat",
		age: 21,
    gender: "male"
	}, {
		name: "RandomUser",
		age: 17,
    gender: "female"
	}
])

console.log(filteredUsers);
