import { retreiveData } from "./storage";


export function taskManager() {
    let allTasks = [];
    let allProjects = [];

    function createTask(taskTitle,
            taskProject = 'Default',
            taskCompleted = false
        ) {
        const task = {}
        task.title = taskTitle;
        task.project = taskProject;
        task.completed = taskCompleted;
        task.toggle = function () {
            task.completed = task.completed === false ? true : false;
        }

        if (!allProjects.includes(taskProject)) {
            allProjects.push(taskProject);
        }

        allTasks.push(task);
    }
    
    function editTask(indexToEdit, newTitle, newProject, newCompleted) {
        if (newTitle === undefined){ /* empty */ } else{
            allTasks[indexToEdit].title = newTitle;
        }
        
        if (newProject === undefined){ /* empty */ } else{
            allTasks[indexToEdit].project = newProject;
        }

        if (newCompleted === undefined){ /* empty */ } else{
            allTasks[indexToEdit].completed = newCompleted;
        }
    }

    function bumpTask(indexToBump, newIndex) {      
        const maxIndex = allTasks.length - 1;
        const oldIndex = parseInt(indexToBump);
        const intNewIndex = parseInt(newIndex);
        
        if ((oldIndex === 0) && (intNewIndex === -1)){
            // Do nothing
        } else if ((oldIndex === maxIndex) && (intNewIndex === maxIndex+1)) {
            // Do nothing
        } else {
            allTasks.splice(intNewIndex, 0,
                allTasks.splice(oldIndex, 1)[0]);
        }
    }

    function getTasks() {
        return [...allTasks];
    }

    function getProjects() {
        return [...allProjects];
    }

    function addProject(newProject) {
        if (!allProjects.includes(newProject)) {
            allProjects.push(newProject);
        }
    }

    function deleteTask(indexToDelete){
        allTasks.splice(indexToDelete, 1);
    }

    function deleteProject(projectToDelete) {
        allProjects.splice(allProjects.indexOf(projectToDelete));
        allTasks.forEach((task) => {
            if (task.project === projectToDelete) {
                deleteTask(allProjects.indexOf(task));
            }
        });
    }

    const savedData = retreiveData();
    const savedTasks = savedData[0];
    const savedProjects = savedData[1];

    savedTasks.forEach((savedTask) => {
        createTask(savedTask.title, savedTask.project, savedTask.completed);
    });

    savedProjects.forEach((savedProject) => {
        addProject(savedProject);
    })


    return {createTask, getTasks, deleteTask, editTask, bumpTask, getProjects, 
        addProject, deleteProject}
}

export const manager = taskManager();