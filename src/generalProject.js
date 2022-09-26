import {generalP, currentProject} from './factories';

// Displays the default general project info
const generalProject = () => {
    // Changes currentProject
    currentProject.name = 'General';
    
    // Adds current project name to contents
    const currentTitle = document.getElementsByClassName('currentTitle');
    const currentDisplay = document.createElement('p');
    currentDisplay.textContent = 'General';

    currentTitle.item(0).appendChild(currentDisplay);
    
    //generalP.list.forEach( **add function to display current to-do's** );
};

export {generalProject};