import { manager } from "./tasks";

export function saveData() {
    const tasksToSave = manager.getTasks();
    const jsonTasks = JSON.stringify(tasksToSave);
    localStorage.setItem('userTasks', jsonTasks);

    const projectsToSave = manager.getProjects();
    const jsonProjects = JSON.stringify(projectsToSave);
    localStorage.setItem('userProjects', jsonProjects);
}

export function retreiveData() {
    const jsonTasks = localStorage.getItem('userTasks');
    let savedTasks = JSON.parse(jsonTasks);
    if (savedTasks === null) {
        savedTasks = [];
    }

    const jsonProjects = localStorage.getItem('userProjects');
    let savedProjects = JSON.parse(jsonProjects);
    if (savedProjects === null) {
        savedProjects = [];
    }

    return [savedTasks, savedProjects];
}