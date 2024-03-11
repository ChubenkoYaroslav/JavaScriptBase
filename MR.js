const tasks = [];

while (true) {
  const userInput = prompt(
    "Введи нове завдання (або натисни 'Cancel' для завершення):"
  );

  if (userInput === null || userInput.trim() === "") {
    break;
  }

  tasks.push(userInput);
}

const ulElement = document.createElement("ul");

for (let i = 0; i < tasks.length; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = tasks[i];
  ulElement.appendChild(liElement);
}

document.body.appendChild(ulElement);

