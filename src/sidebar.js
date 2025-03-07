import { manager } from "./tasks";
import { changeProject } from "./ui";

export function createProjectList() {
    const divSidebar = document.querySelector('#sidebar');

    const divProjectList = document.createElement('div');
    divProjectList.classList = 'projectList';

    const allTasks = manager.getTasks();
    const allProjects = [];
    allTasks.forEach((task) => { 
        allProjects.push(task.project);
    });
    const uniqueProjects = [... new Set(allProjects)];
    
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
        divProject.addEventListener('click', () => {
            changeProject(divProject.textContent);
        });

        divProjectList.appendChild(divProject);
    });

    divSidebar.appendChild(divProjectList);
}