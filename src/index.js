import './style.css';
import {todo, project} from './factories';

(() => {
    // Makes new project form appear when new project button is clicked
    const newProject = document.getElementsByClassName('newProject');
    newProject.item(0).addEventListener('click', (button) => {
        const projectForm = document.getElementById('newProject');
        projectForm.style.display = 'block';
    });

    // Creates a General project and an array to hold all projects
    const generalP = {name: 'General', list: []};
    const projects = [generalP];

    // Adds a new project object to 'projects' array
    const projectSubmit = document.getElementById('projectSubmit');
    projectSubmit.addEventListener('click', () => {
        projects.push(project(document.getElementById('projectName').value));
        console.log(projects);
    });
})();