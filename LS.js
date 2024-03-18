let tasks = [];

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  } else {
    askForTasks();
  }
}

function askForTasks() {
  while (true) {
    const userInput = prompt(
      "Введи нову позицію необхідної покупки (або натисни 'Відміна' для завершення):"
    );

    if (userInput === null || userInput.trim() === "") {
      break;
    }

    tasks.push(userInput);
  }

  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const userInput = prompt("Введи новий необхідний товар:");

  if (userInput !== null && userInput.trim() !== "") {
    tasks.push(userInput);
    updateTaskList();
    saveTasksToLocalStorage();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
  saveTasksToLocalStorage();
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

const ulElement = document.createElement("ul");
document.body.appendChild(ulElement);

const addButton = document.createElement("button");
addButton.textContent = "Додати";
addButton.addEventListener("click", addTask);
document.body.appendChild(addButton);

loadTasksFromLocalStorage();
updateTaskList();
