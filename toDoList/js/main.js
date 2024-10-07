const inputTask = document.getElementById('input-task');
const taskList = document.getElementById('task-list');
const btn = document.querySelector('.btn');

// add  new task when click to add buuton
function addTask() {
  let task = inputTask.value;
  if (!task) {
    alert('You must add task')
  } else {
    let newTask = document.createElement("li");
    let span = document.createElement("span");
    newTask.innerHTML = task;
    taskList.appendChild(newTask);

    span.innerHTML = "&times;";
    newTask.appendChild(span);
  }
  // clear inputTask 
  inputTask.value = '';
  saveTask();
}

//checkd task
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checkd");
    saveTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentNode.remove();
    saveTask();
  }
});

// add task when clicked Enter
inputTask.addEventListener("keydown", function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
})


// save task on local storeage

function saveTask() {
  localStorage.setItem('list',taskList.innerHTML);
}

// get task frome local storage
function getTask() {
  let tasks = localStorage.getItem('list');
  if (tasks) {
    taskList.innerHTML = tasks;
  }
};

getTask();