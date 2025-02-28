import "./styles.css";
import { createTask } from "./app.js";

let task1 = createTask("Test Task 1", "This is a test task description");

console.log(task1.taskTitle);
console.log(task1.taskDesc);

// console.log("hello");