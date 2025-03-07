

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

    return {createTask, getTasks, allTasks}
}


// export function createTask (task, taskProject = 'Default') {
//     let title = task;
//     let project = taskProject;
//     let completed = false;

//     const toggle = () => {
//         completed = completed === false ? true : false;
//     }

//     return { title, project, completed, toggle};
// }