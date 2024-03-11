const array = ["Сніданок", "Душ", "Спортзал"];

const promptText = prompt("Введіть наступний план на день:");

if (promptText !== null) {
  array.push(promptText);
}

const ulElement = document.createElement("ul");

for (let i = 0; i < array.length; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = array[i];
  ulElement.appendChild(liElement);
}

document.body.appendChild(ulElement);
