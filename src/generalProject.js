import {generalP, currentProject} from './factories';
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
};

export {generalProject};