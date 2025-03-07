import "./styles.css";
import { createForm, changeProject, refreshTaskList } from "./ui.js";
import { manager } from "./tasks.js";
import { createProjectList } from "./sidebar.js";

createForm();

changeProject('Default');
manager.createTask('Test Title');
manager.getTasks()[0].toggle();
manager.createTask('test 2');
manager.createTask('test new project', 'Project2');

refreshTaskList();
createProjectList();