const taskSection = document.getElementById("task-section");
let taskNameInput = document.getElementById("task-name");
let taskTypeInput = document.getElementById("task-type");
const addButton = document.getElementById("add");

function newTask(){
    
    if (taskNameInput.value.length == "0"){
        return
    }
    if (taskTypeInput.value.length == "0"){
        return
    }
    const task = document.createElement("div");
    const taskDetalis = document.createElement("div");
    const taskName = document.createElement("h3");
    const taskType = document.createElement("span");
    const completeButton = document.createElement("div");
    
    task.classList.add("task");
    taskDetalis.classList.add("task-details")
    taskName.classList.add("task-name");
    taskType.classList.add('task-type');
    completeButton.classList.add("complete");
    
    taskName.textContent = `${taskNameInput.value}`
    taskType.textContent = `${taskTypeInput.value}`
    
    taskSection.appendChild(task);
    task.appendChild(taskDetalis);
    taskDetalis.appendChild(taskName);
    taskDetalis.appendChild(taskType);
    task.appendChild(completeButton);

    taskNameInput.value = '';
    taskTypeInput.value = '';
}

