import { manager } from "./tasks";

export function saveTasks() {
    const tasksToSave = manager.getTasks();
    const jsonData = JSON.stringify(tasksToSave);
    localStorage.setItem('userData', jsonData);
}

export function retreiveTasks() {
    const jsonData = localStorage.getItem('userData');
    let savedTasks = JSON.parse(jsonData);
    if (savedTasks === null) {
        savedTasks = [];
    }
    return savedTasks;
}