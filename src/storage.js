import { manager } from "./tasks";

export function saveTasks() {
    const allTasks = manager.getTasks();
    const jsonData = JSON.stringify(allTasks);
    localStorage.setItem('userData', jsonData);
    console.log('saved data');
}

export function retreiveTasks() {
    const jsonData = localStorage.getItem('userData');
    const allTasks = JSON.parse(jsonData);
    manager.useSavedData(allTasks);
}