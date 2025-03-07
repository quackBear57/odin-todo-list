import "./styles.css";
import { createForm, changeProject, refreshTaskList } from "./ui.js";
import { manager } from "./tasks.js";
import { createProjectList } from "./sidebar.js";
import { retreiveTasks } from "./storage.js";

createForm();
changeProject('Default');
retreiveTasks(); // pull tasks from local storage if there
refreshTaskList();
createProjectList();

// manager.createTask('Test Title');
// manager.getTasks()[0].toggle();
// manager.createTask('test 2');
// manager.createTask('test new project', 'Project2');