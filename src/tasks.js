
export function taskManager() {
    const allTasks = [];

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

    return {createTask, getTasks}
}

export const manager = taskManager();