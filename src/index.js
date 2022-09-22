import './style.css';
import {todo, project} from './factories';

(() => {
    // Makes new project form appear when new project button is clicked
    const newProject = document.getElementsByClassName('newProject');
    newProject.item(0).addEventListener('click', (button) => {
        const projectForm = document.getElementById('newProject');
        projectForm.style.display = 'block';
    });
})();