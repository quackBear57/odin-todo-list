import { createTask } from "./app.js"

export const loadHome = () => {
    // const divMain = document.querySelector("#main");
    const divMainTop = document.querySelector('#mainTop');

    const formMain = document.createElement('form');

    const lblTitle = document.createElement('label');
    const inputTitle = document.createElement('input');
    const inputContainer1 = document.createElement('div');
    inputContainer1.classList = 'inputContainer';
    lblTitle.textContent = "Title: ";
    lblTitle.setAttribute('for','taskTitle');
    inputTitle.setAttribute('type','text');
    inputTitle.setAttribute('name','taskTitle');
    inputTitle.setAttribute('id','taskTitle');
    inputContainer1.appendChild(lblTitle);
    inputContainer1.appendChild(inputTitle);
    formMain.appendChild(inputContainer1);

    const lblDesc = document.createElement('label');
    const inputDesc = document.createElement('input');
    const inputContainer2 = document.createElement('div');
    inputContainer2.classList = 'inputContainer';
    lblDesc.textContent = "Description (optional): ";
    lblDesc.setAttribute('for','taskDesc');
    inputDesc.setAttribute('type','text');
    inputDesc.setAttribute('name','taskDesc');
    inputDesc.setAttribute('id','taskDesc');
    inputContainer2.appendChild(lblDesc);
    inputContainer2.appendChild(inputDesc);
    formMain.appendChild(inputContainer2);

    const lblProj = document.createElement('label');
    const inputProj = document.createElement('input');
    const inputContainer3 = document.createElement('div');
    inputContainer3.classList = 'inputContainer';
    lblProj.textContent = "Project (optional): ";
    lblProj.setAttribute('for','taskProject');
    inputProj.setAttribute('type','text');
    inputProj.setAttribute('name','taskProject');
    inputProj.setAttribute('id','taskProject');
    inputContainer3.appendChild(lblProj);
    inputContainer3.appendChild(inputProj);
    formMain.appendChild(inputContainer3);

    const divButtons = document.createElement('div');
    divButtons.classList = 'buttonContainer';
    const btnSave = document.createElement('button');
    btnSave.classList = 'formButton';
    btnSave.textContent = "Save";
    btnSave.setAttribute('id','btnSave');
    btnSave.addEventListener('click', () => {
        createTask(inputTitle.value, inputDesc.value, inputProj.value);
    });
    divButtons.appendChild(btnSave);

    const btnLoad = document.createElement('button');
    btnLoad.classList = 'formButton';
    btnLoad.textContent = "Load";
    divButtons.appendChild(btnLoad);
    formMain.appendChild(divButtons);

    divMainTop.appendChild(formMain);
}