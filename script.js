const addTaskElement = document.querySelector("#addtask-btn")
const tasksContainer = document.querySelector("#tasks-section")
const taskTemplate = document.querySelector("#js-task")
const inputElement = document.querySelector("#task-input")

const totalNumberElement = document.querySelector("#total-number")
const completedNumberElement = document.querySelector("#completed-number")
const pendingNumberElement = document.querySelector("#pending-number")

let total = Number(totalNumberElement.innerHTML)
let pending = Number(pendingNumberElement.innerHTML)
let completed = Number(completedNumberElement.innerHTML)

function addTask() {
    let taskName = inputElement.value;
    const clone = taskTemplate.content.cloneNode(true);
    const clonedTaskName = clone.querySelector("#task-title");

    if (taskName.trim() !== "") {
        total += 1;
        pending += 1;

        clonedTaskName.textContent = taskName;

        const checkbox = clone.querySelector("#task-checkbox");

        checkbox.addEventListener("change", function () {
            finishTask(checkbox);
        });

        tasksContainer.appendChild(clone);

        inputElement.value = "";
        totalNumberElement.innerHTML = total;
        pendingNumberElement.innerHTML = pending;
    }
}

function finishTask(checkbox) {
  const currentTask = checkbox.closest(".task-styles");

  completed += 1;
  pending -= 1;
  completedNumberElement.innerHTML = completed;
  pendingNumberElement.innerHTML = pending;

  const taskName = currentTask.querySelector("#task-title").textContent;
  const taskDate = currentTask.querySelector("#task-date").textContent;

  const clone = document.querySelector("#js-complete-task").content.cloneNode(true);

  clone.querySelector("#task-title").textContent = taskName;
  clone.querySelector("#task-date").textContent = taskDate;

  const newCheckbox = clone.querySelector("#task-checkbox");
  newCheckbox.checked = true;
  newCheckbox.disabled = true;

  currentTask.replaceWith(clone);
}