import "./styles.css";
import { createForm, changeProject, refreshTaskList } from "./ui.js";
import { loadSidebar } from "./sidebar.js";
import { retreiveData } from "./storage.js";

createForm();
changeProject('Default');
retreiveData(); // pull tasks from local storage if there
refreshTaskList();
loadSidebar();