import {generalP, currentProject, projects} from './factories';
import {displayTodo} from './newTodo';

// Displays the default general project info
const generalProject = () => {
    // Changes currentProject
    currentProject.name = 'General';
    
    // Adds current project name to contents
    const currentTitle = document.getElementsByClassName('currentTitle');
    const currentDisplay = document.createElement('p');
    currentDisplay.textContent = 'General';

    currentTitle.item(0).appendChild(currentDisplay);
    
    generalP.list.forEach((generalTodo) => {
        displayTodo(generalTodo);
    });

    // General title italics and outer div shadow on click
    projects.list.forEach((object) => {
        if (object.name === 'General') {
            document.getElementById(object.name).style.fontStyle = 'italic';
            document.getElementById(object.name).style.boxShadow = '0px 5px 5px #888, 0px -5px 5px #888';
        } else {
            document.getElementById(object.name).style.fontStyle = 'normal';
            document.getElementById(object.name + 'Outer').style.boxShadow = 'none';
        };
    });

    // Displays hyphen on initial load and click
    const span = document.querySelectorAll('span');
    span.forEach((hyphen) => {
        if (hyphen.parentNode != document.querySelector('footer')) {
            if (hyphen.parentNode === document.getElementById('General')) {
                hyphen.style.opacity = 1;
            } else {
                hyphen.style.opacity = 0;
            };
        };
    });
};

export {generalProject};