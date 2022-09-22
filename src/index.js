import './style.css';
import {todo, project} from './factories';
import {openPForm, closePForm, openTDForm, closeTDForm} from './functions';

(() => {
    // Makes new project form appear when new project button is clicked
    const newProject = document.getElementsByClassName('newProject');
    newProject.item(0).addEventListener('click', () => {
        openPForm();
    });

    // Creates a General project and an array to hold all projects
    const generalP = {name: 'General', list: []};
    const projects = [generalP];

    // Adds a new project object to 'projects' array
    const projectSubmit = document.getElementById('projectSubmit');
    projectSubmit.addEventListener('click', () => {
        projects.push(project(document.getElementById('projectName').value));

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