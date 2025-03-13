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

    function bumpTask(indexToBump, newIndex) {
        // changeBy = -1 if move up, 1 if move down
        // const intChangeBy = parseInt(changeBy);       
        const maxIndex = allTasks.length - 1;
        const oldIndex = parseInt(indexToBump);
        const intNewIndex = parseInt(newIndex);
        
        if ((oldIndex === 0) && (intNewIndex === -1)){
            // Do nothing
        } else if ((oldIndex === maxIndex) && (intNewIndex === maxIndex+1)) {
            // Do nothing
        } else {
            allTasks.splice(intNewIndex, 0,
                allTasks.splice(oldIndex, 1)[0]);
                console.log(`Changing index ${oldIndex} to ${intNewIndex}`);
        }
        
        
        // if (intChangeBy === 1) {
        //     if (oldIndex === maxIndex) {
        //     } else {
        //         allTasks.splice(newIndex, 0,
        //             allTasks.splice(oldIndex, 1)[0]);
        //             console.log(`Changing index ${oldIndex} to ${newIndex}`);
        //     }
        // }

        // if (intChangeBy === -1) {
        //     if (oldIndex === 0) {
        //     } else {
        //         allTasks.splice(newIndex, 0,
        //             allTasks.splice(indexToBump, 1)[0]);
        //             console.log(`Changing index ${oldIndex} to ${newIndex}`);
        //     }
        // }
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

    return {createTask, getTasks, deleteTask, editTask, bumpTask}
}

export const manager = taskManager();