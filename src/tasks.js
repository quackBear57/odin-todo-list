
export function taskManager() {
    let allTasks = [];

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

    // add remove task function to be tied to delete button in DOM
    
    function getTasks() {
        return [...allTasks];
    }

    function deleteTask(indexToDelete){
        allTasks.splice(indexToDelete, 1);
    }

    function useSavedData(savedTasks) {
        allTasks = savedTasks;
        console.log('loaded data');
    }

    return {createTask, getTasks, deleteTask, useSavedData}
}

export const manager = taskManager();