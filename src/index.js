import './style.css';
import {todo, project} from './factories';
import {openPForm, closePForm, openTDForm, closeTDForm} from './functions';
import {addProject, projectPri, clickProject} from './newProject';
import {generalProject} from './generalProject';

(() => {
    // Makes new project form appear when new project button is clicked
    const newProject = document.getElementsByClassName('newProject');
    newProject.item(0).addEventListener('click', () => {
        openPForm();
    });

    // Creates a General project object, an array to hold all projects, and sets current project
    const generalP = {name: 'General', list: []};
    const projects = [generalP];
    let currentProject;

    // Displays General project info on initial load and click
    generalProject(currentProject, generalP);

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

        generalProject(currentProject, generalP);
    });

    // Submits a new project object to 'projects' array and displays in sidebar
    const projectSubmit = document.getElementById('projectSubmit');
    projectSubmit.addEventListener('click', () => {
        const projectObject = project(document.getElementById('projectName').value,
            document.getElementById('projectDueDate').value,
            projectPri())
        
        projects.push(projectObject);

        addProject(document.getElementById('projectName').value);

        clickProject(document.getElementById('projectName').value, projectObject, currentProject);

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

    // Cancel button closes to-do form
    const todoCancel = document.getElementById('todoCancel');
    todoCancel.addEventListener('click', () => {
        closeTDForm();
    });
})();