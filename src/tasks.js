

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

    function getTasks() {
        return [...allTasks];
    }

    return {createTask, getTasks}
}
