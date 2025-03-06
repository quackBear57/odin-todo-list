
export function createTask (task, taskProject = 'Default') {
    let title = task;
    let project = taskProject;
    let completed = false;

    const toggle = () => {
        completed = completed === false ? true : false;
    }

    return { title, project, completed, toggle};
}

export function createProject (project) {
    let projectTasks = [];

    return {project, projectTasks};
}

export function addTaskToProject (task, project) {
    project.projectTasks.push(task);
}