export function createTask (
    task
) {

    let title = task;
    let completed = false;

    const toggle = () => {
        completed = completed === false ? true : false;
    }

    return { title, completed, toggle};
}