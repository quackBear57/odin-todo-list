import "./styles.css";
import { createForm } from "./ui.js";
import { createTask } from "./tasks.js";

function clearContentDiv() {
    const divMain = document.querySelector("#main");
    while (divMain.firstChild) {
        divMain.removeChild(divMain.firstChild);
    }
}

const btnHome = document.querySelector("#btnHome");
btnHome.addEventListener('click', () => {
    clearContentDiv();
    createForm();
});

createForm();

function addTaskToList(task) {
    const list = document.querySelector('#listContainer');
    const taskDiv = document.createElement('div');
    
    const taskItem = document.createElement('input');
    taskItem.name = 'taskItem1';
    taskItem.type = 'checkbox';

    const taskLabel = document.createElement('label');
    taskLabel.for = 'taskItem1';
    taskLabel.textContent = task.title;

    list.appendChild(taskItem);
}

const testTask = createTask('test task title');

addTaskToList(testTask);