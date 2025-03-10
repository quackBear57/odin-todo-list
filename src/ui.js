import { manager } from "./tasks";
import { saveTasks } from "./storage";

export function createForm() {
    const taskListContainer = document.querySelector("#taskListContainer");

    const inputContainer = document.createElement('div');
    inputContainer.id = 'inputContainer';

    const taskInput = document.createElement('input');
    taskInput.type = "text";
    taskInput.name = "taskInput";
    taskInput.id = 'taskInput';
    taskInput.placeholder = 'Task Name';
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            saveButton();
        }
    })

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
    
    taskListContainer.appendChild(inputContainer);
    taskListContainer.appendChild(listContainer);
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
    refreshTaskList();
}

function appendToList(task, taskIndex) {
    const list = document.querySelector('#listContainer');
    const taskDiv = document.createElement('div');
    taskDiv.classList = 'taskContainer';

    const taskItem = document.createElement('input');
    const taskName = `task${taskIndex}`;
    taskItem.name = taskName;
    taskItem.id = taskName;
    taskItem.type = 'checkbox';
    taskItem.setAttribute('taskIndex', taskIndex);

    const taskLabel = document.createElement('label');
    taskLabel.setAttribute('for', taskName);
    taskLabel.textContent = task.title;
    if (task.completed) {
        taskDiv.classList.toggle('checked');
        taskItem.checked = task.completed;
    }

    const divDelete = document.createElement('button');
    divDelete.textContent = "X";
    divDelete.classList = 'taskDelete';
    divDelete.addEventListener('click', () => {
        manager.deleteTask(taskItem.getAttribute('taskIndex'));
        refreshTaskList();
    });

    taskItem.addEventListener('change', () => {
        manager.getTasks()[taskItem.getAttribute('taskIndex')].toggle();
        refreshTaskList();
    });

    taskDiv.appendChild(taskItem);
    taskDiv.appendChild(taskLabel);
    taskDiv.appendChild(divDelete);
    list.appendChild(taskDiv);
}

export function refreshTaskList() {
    const list = document.querySelector('#listContainer');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    const currentProject = document.querySelector('#currentProject').textContent;
    const allTasks = manager.getTasks();
    let filteredTasks = [];
    if (currentProject === 'All Tasks') {
        filteredTasks = allTasks;
    } else {        
        filteredTasks = allTasks.filter((task) => task.project === currentProject);
    }

    const filteredComplete = filteredTasks.filter((task) => task.completed === true);
    const filteredIncomplete = filteredTasks.filter((task) => task.completed === false);

    filteredIncomplete.forEach((task) => {
        appendToList(task, allTasks.indexOf(task));
    });
    filteredComplete.forEach((task) => {
        appendToList(task, allTasks.indexOf(task));
    });

    saveTasks();

}