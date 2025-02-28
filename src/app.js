let taskList = [];

export function createTask (
    task,
    description = "",
    project = "",
    dueDate = ""
) {

    let taskTitle = task;
    let taskDesc = description;
    let taskProject = project;
    let taskDueDate = dueDate;


    return { taskTitle, taskDesc, taskProject, taskDueDate};
}