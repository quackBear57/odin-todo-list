import "./styles.css";
import { createTask } from "./app.js";
import { loadHome } from "./ui.js";

function clearContentDiv() {
    const divContent = document.querySelector("#content");
    while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
    }
}

const btnHome = document.querySelector("#btnHome");
btnHome.addEventListener('click', () => {
    clearContentDiv();
    loadHome();
});




let task1 = createTask("Test Task 1", "This is a test task description");




console.log(task1.taskTitle);
console.log(task1.taskDesc);

// console.log("hello");