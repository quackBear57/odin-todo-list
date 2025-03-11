import { retreiveTasks, saveTasks } from "./storage";


export function taskManager() {
    let allTasks = [];

    function createTask(taskTitle,
            taskProject = 'Default',
            taskCompleted = false
        ) {
        const task = {}
        task.title = taskTitle;
        task.project = taskProject;
        task.completed = taskCompleted;
        task.toggle = function () {
            task.completed = task.completed === false ? true : false;
        }

        allTasks.push(task);
    }
    
    function editTask(indexToEdit, newTitle, newProject, newCompleted) {
        if (newTitle === undefined){
        } else{
            allTasks[indexToEdit].title = newTitle;
        }
        
        if (newProject === undefined){
        } else{
            allTasks[indexToEdit].project = newProject;
        }

        if (newCompleted === undefined){
        } else{
            allTasks[indexToEdit].completed = newCompleted;
        }
    }

    function getTasks() {
        return [...allTasks];
    }

    function deleteTask(indexToDelete){
        allTasks.splice(indexToDelete, 1);
    }

    const savedTasks = retreiveTasks();
    savedTasks.forEach((savedTask) => {
        createTask(savedTask.title, savedTask.project, savedTask.completed);
    });

    return {createTask, getTasks, deleteTask, editTask}
}

export const manager = taskManager();