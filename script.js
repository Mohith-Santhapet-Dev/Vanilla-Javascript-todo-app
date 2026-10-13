const addTaskElement = document.querySelector("#addtask-btn")
const tasksContainer = document.querySelector("#tasks-section")
const taskTemplate = document.querySelector("#js-task")
const inputElement = document.querySelector("#task-input")


function addTask () {
    let taskName = inputElement.value
    const clone = taskTemplate.content.cloneNode(true);
    const clonedTaskName = clone.querySelector("#task-title")
    if(taskName.trim() !== "") {
        clonedTaskName.textContent = taskName
        tasksContainer.appendChild(clone)
        inputElement.value = ""
    }

    console.log(typeof(taskName))
}