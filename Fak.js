let number = parseInt(prompt("Enter a number from 1 to 50"));

if (number >= 1 && number <= 50) {
  let factorialR = 1;

  for (let i = 1; i <= number; i++) {
    factorialR *= i;
  }

  console.log(`Factorial of a number ${number} is equal to ${factorialR}`);
} else {
  console.log("You need to choose a number from 1 to 50!");
}
