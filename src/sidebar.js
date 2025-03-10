import { manager } from "./tasks";
import { changeProject, createProject } from "./ui";

export function createProjectList() {
    const divProjectList = document.querySelector('#projectList');
    while (divProjectList.firstChild) {
        divProjectList.removeChild(divProjectList.firstChild);
    }

    const allTasks = manager.getTasks();
    const allProjects = [];
    allTasks.forEach((task) => { 
        allProjects.push(task.project);
    });
    const uniqueProjects = [... new Set(allProjects)];
    uniqueProjects.push('Create Project');
    
    uniqueProjects.forEach((project) => {
        if (uniqueProjects.indexOf(project) === 0) {
            const divProject = document.createElement('div');
            divProject.classList = 'projectContainer';
            divProject.textContent = 'All Tasks';
            divProject.addEventListener('click', () => {
                changeProject(divProject.textContent);
            });

            divProjectList.appendChild(divProject);    
        }
        const divProject = document.createElement('div');
        divProject.classList = 'projectContainer';
        divProject.textContent = project;
        if (project === 'Create Project'){
            divProject.addEventListener('click', () => {
                createProject();
            });
            divProject.classList.add('divCreateProject');
        } else {
            divProject.addEventListener('click', () => {
                changeProject(divProject.textContent);
            });
        }

        divProjectList.appendChild(divProject);
    });
}