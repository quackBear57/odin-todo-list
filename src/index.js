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
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    const currentProject = document.querySelector('#currentProject').textContent;

    const allTasks = manager.getTasks();
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

changeProject('Default');

const manager = taskManager();
manager.createTask('Test Title');
manager.getTasks()[0].toggle();
manager.createTask('test 2');

refreshTaskList();