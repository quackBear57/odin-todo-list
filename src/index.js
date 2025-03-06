import "./styles.css";
import { createForm, changeProject } from "./ui.js";
import { createTask, createProject, addTaskToProject } from "./tasks.js";

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

function refreshTaskList(project) {
    const list = document.querySelector('#listContainer');
    const taskDiv = document.createElement('div');
    const currentProject = document.querySelector('#currentProject').textContent;

    project.

    filteredProjects.projectTasks.forEach((task) => {
        // console.log(task.title);
        const taskItem = document.createElement('input');
        const taskName = `task`
        taskItem.name = taskName;
        taskItem.type = 'checkbox';

        const taskLabel = document.createElement('label');
        taskLabel.for = taskName;
        taskLabel.textContent = task.title;
        taskDiv.appendChild(taskItem);
        taskDiv.appendChild(taskLabel);
        list.appendChild(taskDiv);
    });
}

function addTaskToList(task) {
    const list = document.querySelector('#listContainer');
    const taskDiv = document.createElement('div');
    
    const taskItem = document.createElement('input');
    taskItem.name = 'taskItem1';
    taskItem.type = 'checkbox';

    const taskLabel = document.createElement('label');
    taskLabel.for = 'taskItem1';
    taskLabel.textContent = task.title;
    taskDiv.appendChild(taskItem);
    taskDiv.appendChild(taskLabel);
    list.appendChild(taskDiv);
}

const testTask = createTask('test task title');
const defaultProject = createProject('Default');
changeProject(defaultProject.project);
addTaskToProject(testTask, defaultProject);

refreshTaskList(defaultProject);