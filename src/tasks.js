import { retreiveTasks } from "./storage";


export function taskManager() {
    let allTasks = [];
    allTasks = retreiveTasks();

    function createTask(taskTitle, taskProject = 'Default') {
        const task = {}
        task.title = taskTitle;
        task.project = taskProject;
        task.completed = false;
        task.toggle = function () {
            task.completed = task.completed === false ? true : false;
        }

        allTasks.push(task);
    }
    
    function getTasks() {
        return [...allTasks];
    }

    function deleteTask(indexToDelete){
        allTasks.splice(indexToDelete, 1);
    }

    return {createTask, getTasks, deleteTask}
}

export const manager = taskManager();