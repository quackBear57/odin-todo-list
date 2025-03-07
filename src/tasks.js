

export function taskManager() {
    const allTasks = [];

    function createTask(taskTitle, taskProject = 'Default') {
        const task = {
            title: taskTitle,
            project: taskProject,
            completed: false
        };
        allTasks.push(task);
    }

    function getTasks() {
        return [...allTasks];
    }

    function toggleComplete(task) {
        task.completed = completed === false ? true : false;
    }

    return {createTask, getTasks, toggleComplete}
}


export function createTask (task, taskProject = 'Default') {
    let title = task;
    let project = taskProject;
    let completed = false;

    const toggle = () => {
        completed = completed === false ? true : false;
    }

    return { title, project, completed, toggle};
}