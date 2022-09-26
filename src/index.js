import './style.css';
import {todo, project, projects} from './factories';
import {openPForm, closePForm, openTDForm, closeTDForm} from './functions';
import {addProject, projectPri, clickProject} from './newProject';
import {generalProject} from './generalProject';
import {submitTodo} from "./newTodo";

(() => {
    // Makes new project form appear when new project button is clicked
    const newProject = document.getElementsByClassName('newProject');
    newProject.item(0).addEventListener('click', () => {
        openPForm();
    });

    // Displays General project info on initial load and click
    generalProject();

    const generalClick = document.getElementById('General');
    generalClick.addEventListener('click', () => {
        // Removes existing project name, dueDate, and priority
        const currentTitle = document.getElementsByClassName('currentTitle');
        const projectDue = document.getElementsByClassName('projectDue');

        while (currentTitle.item(0).firstChild != null) {
            currentTitle.item(0).removeChild(currentTitle.item(0).firstChild);
        };

        while (projectDue.item(0).firstChild != null) {
            projectDue.item(0).removeChild(projectDue.item(0).firstChild);
        };

        generalProject();
    });

    // Submits a new project object to projects.list array and displays in sidebar
    const projectSubmit = document.getElementById('projectSubmit');
    projectSubmit.addEventListener('click', () => {
        projects.list.push(project(document.getElementById('projectName').value,
            document.getElementById('projectDueDate').value,
            projectPri()));

        addProject(document.getElementById('projectName').value);

        clickProject(document.getElementById('projectName').value);

        closePForm();
    });

    // Cancel button closes project form
    const projectCancel = document.getElementById('projectCancel');
    projectCancel.addEventListener('click', () => {
        closePForm();
    });

    // Makes new to-do form appear when to-do button is clicked
    const newTodo = document.getElementsByClassName('newTodo');
    newTodo.item(0).addEventListener('click', () => {
        openTDForm();
    });

    // Submits a new to-do object to projects.list array
    submitTodo();

    // Cancel button closes to-do form
    const todoCancel = document.getElementById('todoCancel');
    todoCancel.addEventListener('click', () => {
        closeTDForm();
    });
})();