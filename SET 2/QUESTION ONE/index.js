function editButton(listItem) {
  let editButton = document.createElement("p");
  editButton.className = "button";
  editButton.innerText = "Edit";
  editButton.addEventListener("click", () => {
    let taskText = listItem.querySelector(".taskText");
    let newTask = prompt("Edit your task.", taskText.innerText);
    if (newTask) {
      taskText.innerText = newTask;
    }
  });
  return editButton;
}

function deleteButton(listItem) {
  let deleteButton = document.createElement("p");
  deleteButton.className = "button";
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  return deleteButton;
}

function addTask() {
  let myInput = document.getElementById("myInput");
  let addButton = document.getElementById("addButton");
  let myList = document.getElementById("myList");

  myList.className = "myList";
  addButton.addEventListener("click", () => {
    let task = myInput.value;
    if (task) {
      let listItem = document.createElement("li");
      listItem.className = "listItemContainer";

      let taskText = document.createElement("div");
      taskText.className = "taskText";

      taskText.innerText = task;

      let buttonContainer = document.createElement("div");
      buttonContainer.className = "buttonContainer";

      buttonContainer.appendChild(editButton(listItem));
      buttonContainer.appendChild(deleteButton(listItem));

      listItem.appendChild(taskText);
      listItem.appendChild(buttonContainer);
      myList.appendChild(listItem);

      addToLocalStorage(task);
      
      addTask.value = "";
    }
  });

  function addToLocalStorage(task) {
    let tasks = JSON.parse() || [];
    tasks.push(task);
    localStorage.setItem("addTask", JSON.stringify(tasks));
  }
}

addTask();

function loadStoredTasks() {
  let tasks = JSON.parse(localStorage.getItem("addTask")) || [];

  tasks.forEach((task) => {
    let listItem = document.createElement("li");
    listItem.className = "listItemContainer";

    let taskText = document.createElement("div");
    taskText.className = "taskText";

    taskText.innerText = task;

    let buttonContainer = document.createElement("div");
    buttonContainer.className = "buttonContainer";

    buttonContainer.appendChild(editButton(listItem));
    buttonContainer.appendChild(deleteButton(listItem));

    listItem.appendChild(taskText);
    listItem.appendChild(buttonContainer);
    myList.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", loadStoredTasks);
