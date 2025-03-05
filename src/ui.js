
export function createForm() {
    taskContainer = document.querySelector("#taskContainer");
    inputContainer = document.createElement('div');
    taskInput = document.createElement('input');

    inputContainer.appendChild(taskInput);
    taskContainer.appendChild(inputContainer);

}