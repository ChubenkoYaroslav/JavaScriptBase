function ConstructPerson(name, age, gender, occupation) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.occupation = occupation;
}

function createPerson() {
  let name = prompt("Введіть ім'я:");
  let age = parseInt(prompt("Введіть вік:"));
  let gender = prompt("Введіть стать:");
  let occupation = prompt("Введіть рід занять:");

  return new ConstructPerson(name, age, gender, occupation);
}

let person1 = createPerson();
console.log(`
    Ім'я: ${person1.name}
    Вік: ${person1.age}
    Стать: ${person1.gender}
    Рід занять: ${person1.occupation}
`);
