let taskList = [];

export function createTask (
    task,
    description = "",
    project = "",
    dueDate = "",
    section = ""
) {

    let title = task;
    let desc = description;
    let taskProject = project;
    let taskDueDate = dueDate;
    let taskSection = section
    let completed = false;

    return { title, desc, taskProject, taskDueDate, taskSection, completed};
}