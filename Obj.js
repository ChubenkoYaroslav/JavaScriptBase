const user = {};

user.name = prompt("Enter your username:");

user.age = +prompt("Enter the user's age:");

user.email = prompt("Enter the user's email:");

for (const key in user) {
  console.log(key + ": " + user[key]);
}
