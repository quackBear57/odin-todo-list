import { createTask } from "./app.js"

export const loadHome = () => {
    const divContent = document.querySelector("#content");

    const formMain = document.createElement('form');

    const lblTitle = document.createElement('label');
    const inputTitle = document.createElement('input');
    lblTitle.textContent = "Title: ";
    lblTitle.setAttribute('for','taskTitle');
    inputTitle.setAttribute('type','text');
    inputTitle.setAttribute('name','taskTitle');
    inputTitle.setAttribute('id','taskTitle');
    lblTitle.appendChild(inputTitle);
    formMain.appendChild(lblTitle);

    const lblDesc = document.createElement('label');
    const inputDesc = document.createElement('input');
    lblDesc.textContent = "Description (optional): ";
    lblDesc.setAttribute('for','taskDesc');
    inputDesc.setAttribute('type','text');
    inputDesc.setAttribute('name','taskDesc');
    inputDesc.setAttribute('id','taskDesc');
    lblDesc.appendChild(inputDesc);
    formMain.appendChild(lblDesc);

    const lblProj = document.createElement('label');
    const inputProj = document.createElement('input');
    lblProj.textContent = "Project (optional): ";
    lblProj.setAttribute('for','taskProject');
    inputProj.setAttribute('type','text');
    inputProj.setAttribute('name','taskProject');
    inputProj.setAttribute('id','taskProject');
    lblProj.appendChild(inputProj);
    formMain.appendChild(lblProj);

    const btnSave = document.createElement('button');
    btnSave.textContent = "Save";
    btnSave.addEventListener('click', createTask(inputTitle.value, inputDesc.value, inputProj.value), false);
    formMain.appendChild(btnSave);


    const btnLoad = document.createElement('button');
    btnLoad.textContent = "Load";
    formMain.appendChild(btnLoad);

    divContent.appendChild(formMain);
}