
export function createForm() {
    const taskContainer = document.querySelector("#taskContainer");

    const inputContainer = document.createElement('div');
    inputContainer.id = 'inputContainer';

    const taskInput = document.createElement('input');
    taskInput.type = "text";
    taskInput.name = "taskInput";
    taskInput.id = 'taskInput';

    const inputButton = document.createElement('button');
    inputButton.id = 'saveTask';
    inputButton.textContent = 'Save';

    const inputLeft = document.createElement('div');
    const inputRight = document.createElement('div');
    inputLeft.id = 'inputLeft';
    inputLeft.appendChild(taskInput);
    inputRight.appendChild(inputButton);

    inputContainer.appendChild(inputLeft);
    inputContainer.appendChild(inputRight);

    const listContainer = document.createElement('div');
    listContainer.id = 'listContainer';
    
    taskContainer.appendChild(inputContainer);
    taskContainer.appendChild(listContainer);   
}