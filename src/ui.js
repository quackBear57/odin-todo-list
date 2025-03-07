import { manager } from "./tasks";

export function createForm() {
    const taskContainer = document.querySelector("#taskContainer");

    const inputContainer = document.createElement('div');
    inputContainer.id = 'inputContainer';

    const taskInput = document.createElement('input');
    taskInput.type = "text";
    taskInput.name = "taskInput";
    taskInput.id = 'taskInput';

    const inputButton = document.createElement('button');
    inputButton.id = 'saveTask';
    inputButton.textContent = 'Save';
    inputButton.addEventListener('click', () => {
        saveButton();
    })

    const inputLeft = document.createElement('div');
    const inputRight = document.createElement('div');
    inputLeft.id = 'inputLeft';
    inputLeft.appendChild(taskInput);
    inputRight.appendChild(inputButton);

    inputContainer.appendChild(inputLeft);
    inputContainer.appendChild(inputRight);

    const listContainer = document.createElement('div');
    listContainer.id = 'listContainer';
    
    taskContainer.appendChild(inputContainer);
    taskContainer.appendChild(listContainer);
}

function saveButton() {
    const inputBox = document.querySelector('#taskInput');
    if (inputBox.value === "") {
        alert('Task value cannot be blank');
        inputBox.focus();
        return;
    }
    manager.createTask(inputBox.value);
    inputBox.value = '';
    refreshTaskList();
}

export function changeProject(newProject) {
    const currentProject = document.querySelector('#currentProject');
    currentProject.textContent = newProject;
}

export function refreshTaskList() {
    const list = document.querySelector('#listContainer');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    const currentProject = document.querySelector('#currentProject').textContent;

    const allTasks = manager.getTasks();
    // add delete button for tasks
    allTasks.forEach((task) => {
        const taskDiv = document.createElement('div');
        const taskItem = document.createElement('input');
        const taskName = `task${allTasks.indexOf(task)}`;
        taskItem.name = taskName;
        taskItem.id = taskName;
        taskItem.type = 'checkbox';
        taskItem.setAttribute('taskIndex', allTasks.indexOf(task));

        const taskLabel = document.createElement('label');
        taskLabel.setAttribute('for', taskName);
        taskLabel.textContent = task.title;
        if (task.completed) {
            taskDiv.classList.toggle('checked');
            taskItem.checked = task.completed;
        }

        taskItem.addEventListener('change', () => {
            manager.getTasks()[taskItem.getAttribute('taskIndex')].toggle();
            refreshTaskList();
        })
        taskDiv.appendChild(taskItem);
        taskDiv.appendChild(taskLabel);
        list.appendChild(taskDiv);
    });
}