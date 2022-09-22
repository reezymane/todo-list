import './style.css';
import {todo, project} from './factories';

(() => {
    // Display and hide forms
    function openPForm() {
        document.getElementById('newProject').style.display = 'block';
    };

    function closePForm() {
        document.getElementById('newProject').style.display = 'none';
        document.getElementById('newProject').reset();
    };

    function openTDForm() {
        document.getElementById('todo').style.display = 'block';
    };

    function closeTDForm() {
        document.getElementById('todo').style.display = 'none';
        document.getElementById('todo').reset();
    };

    // Makes new project form appear when new project button is clicked
    const newProject = document.getElementsByClassName('newProject');
    newProject.item(0).addEventListener('click', (button) => {
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
})();