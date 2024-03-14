const tasks = [];

function addTask() {
  const userInput = prompt("Введи новий необхідний товар:");

  if (userInput !== null && userInput.trim() !== "") {
    tasks.push(userInput);
    updateTaskList();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

function updateTaskList() {
  ulElement.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const liElement = document.createElement("li");
    liElement.textContent = tasks[i];

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.color = "red";
    deleteButton.addEventListener("click", () => removeTask(i));

    liElement.appendChild(deleteButton);
    ulElement.appendChild(liElement);
  }
}

while (true) {
  const userInput = prompt(
    "Введи нову позицію необхідної покупки (або натисни 'Відміна' для завершення):"
  );

  if (userInput === null || userInput.trim() === "") {
    break;
  }

  tasks.push(userInput);
}

const ulElement = document.createElement("ul");
document.body.appendChild(ulElement);

const addButton = document.createElement("button");
addButton.textContent = "Додати";
addButton.addEventListener("click", addTask);
document.body.appendChild(addButton);

updateTaskList();
