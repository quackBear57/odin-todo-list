import { manager } from "./tasks";
import { saveTasks } from "./storage";
import { createProjectList } from "./sidebar";

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

    const listContainerIncomplete = document.createElement('div');
    listContainerIncomplete.id = 'listContainerIncomplete';
    listContainerIncomplete.classList = 'listContainer';

    const listContainerComplete = document.createElement('div');
    listContainerComplete.id = 'listContainerComplete';
    listContainerComplete.classList = 'listContainer';

    const divToggleComplete = document.createElement('div');
    divToggleComplete.id = 'toggleComplete';
    divToggleComplete.textContent = 'Hide Completed Tasks';
    divToggleComplete.addEventListener('click', () => {
        if (listContainerComplete.style.display === 'none') {
            listContainerComplete.style.display = 'block';
            divToggleComplete.textContent = 'Hide Completed Tasks';
        } else {
            listContainerComplete.style.display = 'none';
            divToggleComplete.textContent = 'Show Completed Tasks';
        }
    })

    taskListContainer.appendChild(inputContainer);
    taskListContainer.appendChild(listContainerIncomplete);
    taskListContainer.appendChild(divToggleComplete);
    taskListContainer.appendChild(listContainerComplete);
}

function saveButton() {
    const inputBox = document.querySelector('#taskInput');
    if (inputBox.value === "") {
        alert('Task value cannot be blank');
        inputBox.focus();
        return;
    }
    let currentProject = document.querySelector('#currentProject').textContent;
    if (currentProject === 'All Tasks') {
        currentProject = 'Default';
    }
    manager.createTask(inputBox.value, currentProject);
    inputBox.value = '';
    refreshTaskList();
}

export function changeProject(newProject) {
    const currentProject = document.querySelector('#currentProject');
    currentProject.textContent = newProject;
    refreshTaskList();
}

function appendToList(task, taskIndex) {
    const listIncomplete = document.querySelector('#listContainerIncomplete');    
    const listComplete = document.querySelector('#listContainerComplete');

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
    if (task.completed){
        listComplete.appendChild(taskDiv);
    } else {
        listIncomplete.appendChild(taskDiv);
    }
}

export function refreshTaskList() {
    const list1 = document.querySelector('#listContainerIncomplete');
    while (list1.firstChild) {
        list1.removeChild(list1.firstChild);
    }
    const list2 = document.querySelector('#listContainerComplete');
    while (list2.firstChild) {
        list2.removeChild(list2.firstChild);
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

export function createProject(){
    const currentProject = document.querySelector('#currentProject');
    let validProjectName = false;
    let newProject = ''
    while (!validProjectName) {
        newProject = prompt('Please enter new project name: ');
        if (newProject != 'Create Project'){
            validProjectName = true;
        }
    }
    
    currentProject.textContent = newProject;

    // create new project to ensure project is added to sidebar
    manager.createTask('New project task!', newProject);

    refreshTaskList();
    createProjectList();
}