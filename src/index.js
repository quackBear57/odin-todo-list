import "./styles.css";
import { createTask } from "./app.js";
import { loadHome } from "./ui.js";

function clearContentDiv() {
    const divMain = document.querySelector("#main");
    while (divMain.firstChild) {
        divMain.removeChild(divMain.firstChild);
    }
}

const btnHome = document.querySelector("#btnHome");
btnHome.addEventListener('click', () => {
    clearContentDiv();
    loadHome();
});

loadHome();

