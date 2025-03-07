import "./styles.css";
import { createForm, changeProject, refreshTaskList } from "./ui.js";
import { manager } from "./tasks.js";

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

changeProject('Default');
manager.createTask('Test Title');
manager.getTasks()[0].toggle();
manager.createTask('test 2');
manager.createTask('test new project', 'Project2');

refreshTaskList();