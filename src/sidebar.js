import { manager } from "./tasks";
import { changeProject, refreshTaskList } from "./ui";

export function refreshProjectList() {
    const divProjectList = document.querySelector('#projectList');
    while (divProjectList.firstChild) {
        divProjectList.removeChild(divProjectList.firstChild);
    }

    const allProjects = manager.getProjects();

    allProjects.forEach((project) => {
        if (allProjects.indexOf(project) === 0) {
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
}

export function loadSidebar() {
    refreshProjectList();

    const divSidebar = document.querySelector('#sidebar');
    const divProjectControls = document.createElement('div');
    divProjectControls.classList = 'projectControls';

    const divCreate = document.createElement('div');
    const divDelete = document.createElement('div');
    divCreate.classList.add('projectContainer');
    divCreate.classList.add('divCreateProject');
    divCreate.textContent = 'Create Project';
    divCreate.addEventListener('click', () => {
        createProject();
    });

    divDelete.textContent = 'Delete Project';
    divDelete.classList.add('projectContainer');
    divDelete.classList.add('divDeleteProject');
    divDelete.addEventListener('click', () => {
        deleteProject();
    })

    divProjectControls.appendChild(divCreate);
    divProjectControls.appendChild(divDelete);
    divSidebar.appendChild(divProjectControls);

}

function deleteProject() {
    const currentProject = document.querySelector('#currentProject').textContent;

    if ((currentProject !== 'Default') && (currentProject !== 'All Tasks')) {
        if (confirm(`Delete project ${currentProject}?\n\nTHIS IS PERMANENT\nTHIS DELETES ALL ASSOCIATED TASKS)`)) {
            manager.deleteProject(currentProject);
        }
    }
    changeProject('Default');
    refreshProjectList();
}

function createProject() {
    const currentProject = document.querySelector('#currentProject');
    let validProjectName = false;
    const allProjects = manager.getProjects();
    let newProject = ''
    while (!validProjectName) {
        newProject = prompt('Please enter new project name: ');
        if ((newProject !== 'Create Project') && 
            (!allProjects.includes(newProject))) {
            if (newProject !== '') {
                validProjectName = true;
            }
        }
    }
    
    currentProject.textContent = newProject;
    manager.addProject(newProject);

    refreshTaskList();
    refreshProjectList();
}