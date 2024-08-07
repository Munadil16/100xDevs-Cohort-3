
// Write a function that takes an array of users as inputs 
// and returns only the users who are more than 18 years old

function userAbove18(users) {
  return users.filter((user) => user.age > 18);
}

const filteredUsers = userAbove18([{
		name: "Harkirat",
		age: 21
	}, {
		name: "RandomUser",
		age: 17
	}
]);

console.log(filteredUsers);
