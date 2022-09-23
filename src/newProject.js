import {generalProject} from './generalProject';

// Adds new projects to sidebar
const addProject = (name, projects, currentProject, generalP, projectObject) => {
    // Adds project name
    const projectList = document.getElementsByClassName('projects');
    
    const outerDiv = document.createElement('div');
    outerDiv.setAttribute('id', name + 'Outer');

    projectList.item(0).appendChild(outerDiv);

    const newAdd = document.createElement('div');
    newAdd.setAttribute('id', name);

    outerDiv.appendChild(newAdd);

    const span = document.createElement('span');
    span.textContent = '-';

    newAdd.appendChild(span);

    const newName = document.createElement('p');
    newName.textContent = name;

    newAdd.appendChild(newName);

    // Adds project dueDate to sidebar
    const dueDisplay = document.createElement('p');
        for (const [key, value] of Object.entries(projectObject)) {
            if (key === 'dueDate') {
                dueDisplay.textContent = value;
            };
        };

        newAdd.appendChild(dueDisplay);

    // Adds project Remove and PriorityChange buttons
    const projectButtons = document.createElement('div');
    projectButtons.setAttribute('id', name + 'Buttons');

    outerDiv.appendChild(projectButtons);

    const projectRemoveButton = document.createElement('button');
    projectRemoveButton.setAttribute('id', name + 'RemoveButton');
    projectRemoveButton.textContent = '*trash*';

    projectButtons.appendChild(projectRemoveButton);

    const projectPriorityButton = document.createElement('button');
    projectPriorityButton.setAttribute('id', name + 'PriorityButton');
    projectPriorityButton.textContent = '*priority*';

    projectButtons.appendChild(projectPriorityButton);

    // Deletes project
    projectRemoveButton.addEventListener('click', () => {
        // Removes project div from sidebar
        projectList.item(0).removeChild(document.getElementById(name + 'Outer'));

        // Remove project object
        let indexCount = 0;
        projects.forEach((object) => {
            for (const [key, value] of Object.entries(object)) {
                if (value === name) {
                    projects.splice(indexCount, 1)
                };
            };

            indexCount++;

        // Removes existing project name, dueDate, and priority and changes display to General project
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
    });

    // This section is for priority change functionality

};

// Gets value for radio button selection
const projectPri = () => {
    const projectRadio = document.getElementsByName('projectPriority');
    for (let i = 0; i < projectRadio.length; i++) {
        if (projectRadio[i].checked) {
            return projectRadio[i].value;
        };
    };
};

// Populates content div with current project info
const clickProject = (name, projectObject, currentProject) => {
    const projectInfo = document.getElementById(name);
    projectInfo.addEventListener('click', () => {
        // Changes currentProject
        currentProject = name;

        // Removes existing project name, dueDate, and priority
        const currentTitle = document.getElementsByClassName('currentTitle');
        const projectDue = document.getElementsByClassName('projectDue');

        while (currentTitle.item(0).firstChild != null) {
            currentTitle.item(0).removeChild(currentTitle.item(0).firstChild);
        };

        while (projectDue.item(0).firstChild != null) {
            projectDue.item(0).removeChild(projectDue.item(0).firstChild);
        };

        // Adds current project name
        const currentDisplay = document.createElement('p');
        currentDisplay.textContent = name;

        currentTitle.item(0).appendChild(currentDisplay);

        // Adds current project due date
        const dueDisplay = document.createElement('p');
        for (const [key, value] of Object.entries(projectObject)) {
            if (key === 'dueDate') {
                dueDisplay.textContent = value;
            };
        };

        projectDue.item(0).appendChild(dueDisplay);

        // Adds current project priority
        const priorityDisplay = document.createElement('p');
        for (const [key, value] of Object.entries(projectObject)) {
            if (key === 'priority') {
                priorityDisplay.textContent = value;
            };
        };

        projectDue.item(0).appendChild(priorityDisplay);

        // Displays current project's to-do list
        const todoList = document.getElementsByClassName('todoList');
        const listDiv = document.createElement('div');
        todoList.item(0).appendChild(listDiv);
        
        for (const [key, value] of Object.entries(projectObject)) {
            if (key === 'list') {
                //value.forEach( Add function to display to-do's );
            };
        };
        
    });
};

export {addProject, projectPri, clickProject};