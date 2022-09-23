// Displays the default general project info
const generalProject = (currentProject, projectObject) => {
    // Changes currentProject
    currentProject = 'General';

    
    // Adds current project name to contents
    const currentTitle = document.getElementsByClassName('currentTitle');
    const currentDisplay = document.createElement('p');
    currentDisplay.textContent = 'General';

    currentTitle.item(0).appendChild(currentDisplay);

    // Displays current project's to-do list
    const todoList = document.getElementsByClassName('todoList');
    const listDiv = document.createElement('div');
    todoList.item(0).appendChild(listDiv);
    
    for (const [key, value] of Object.entries(projectObject)) {
        if (key === 'list') {
            //value.forEach( Add function to display to-do's );
        };
    };
};

export {generalProject};