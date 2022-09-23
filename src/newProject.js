// Adds new projects to sidebar
const addProject = (name) => {
    const projectList = document.getElementsByClassName('projects');
    
    const newAdd = document.createElement('div');
    newAdd.setAttribute('id', name);

    projectList.item(0).appendChild(newAdd);

    const span = document.createElement('span');
    span.textContent = '-';

    newAdd.appendChild(span);

    const newName = document.createElement('p');
    newName.textContent = name;

    newAdd.appendChild(newName);
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
const clickProject = (name, projectObject) => {
    const projectInfo = document.getElementById(name);
    projectInfo.addEventListener('click', () => {
        // Removes existing project name, dueDate, and priority
        const currentTitle = document.getElementsByClassName('currentTitle');
        const projectDue = document.getElementsByClassName('projectDue');

        if (currentTitle.item(0).firstChild != null) {
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
    });
};

export {addProject, projectPri, clickProject};