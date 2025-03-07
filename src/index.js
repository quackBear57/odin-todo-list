import "./styles.css";
import { createForm, changeProject } from "./ui.js";
import { taskManager } from "./tasks.js";

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

function refreshTaskList() {
    const list = document.querySelector('#listContainer');
    const taskDiv = document.createElement('div');
    const currentProject = document.querySelector('#currentProject').textContent;

    const allTasks = manager.getTasks();
    allTasks.forEach((task) => {
        const taskItem = document.createElement('input');
        const taskName = `task${allTasks.indexOf(task)}`;
        taskItem.name = taskName;
        taskItem.id = taskName;
        taskItem.type = 'checkbox';

        const taskLabel = document.createElement('label');
        taskLabel.setAttribute('for', taskName);
        taskLabel.textContent = task.title;
        if (task.completed) {
            taskDiv.classList('checked');
        }
        taskDiv.appendChild(taskItem);
        taskDiv.appendChild(taskLabel);
        list.appendChild(taskDiv);
    });
}

changeProject('Default');

const manager = taskManager();
manager.createTask('Test Title');
// manager.toggleComplete();
console.log(manager.getTasks());

refreshTaskList();