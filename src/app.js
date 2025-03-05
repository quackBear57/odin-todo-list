import { addToList } from "./ui";

export function createTask (
    task,
    description = "",
    project = "Default",
    dueDate = "",
    section = ""
) {

    let title = task;
    let desc = description;
    let taskProject = project;
    let taskDueDate = dueDate;
    let taskSection = section
    let completed = false;
    addToList()

    return { title, desc, taskProject, taskDueDate, taskSection, completed};
}

function createManager() {

}

export const taskManager = createManager();