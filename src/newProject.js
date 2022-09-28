import {generalProject} from './generalProject';
import {openPPCForm, closePPCForm, openTDPCForm, closeTDPCForm} from './functions';
import {projects, currentProject} from './factories';
import {displayTodo} from './newTodo';
import Arrow from './img/arrow.png';
import Trash from './img/trash.png';

// Adds new projects to sidebar
const addProject = (name) => {
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
    projects.list.forEach((object) => {
        if (object.name === name) {
            dueDisplay.textContent = object.dueDate;
        };
    });
    
    newAdd.appendChild(dueDisplay);

    // Changes project background color based on priority
    projects.list.forEach((object) => {
        if (object.name === name) {
            if (object.priority === 'High') {
                newName.style.backgroundColor = 'rgb(255, 0, 0, 0.69)';
            } else if (object.priority === 'Mid') {
                newName.style.backgroundColor = 'rgb(255,165,0, 0.69)';
            } else if (object.priority === 'Low') {
                newName.style.backgroundColor = 'rgb(255, 240, 0, 0.69)';
            };
        };
    });

    // Adds project Remove and PriorityChange buttons
    const projectButtons = document.createElement('div');
    projectButtons.setAttribute('id', name + 'Buttons');

    outerDiv.appendChild(projectButtons);

    const projectRemoveButton = document.createElement('button');
    projectRemoveButton.setAttribute('id', name + 'RemoveButton');

    projectButtons.appendChild(projectRemoveButton);

    // Adds image to remove project button
    const myTrash = new Image();
    myTrash.src = Trash;
    projectRemoveButton.appendChild(myTrash);

    const projectPriorityButton = document.createElement('button');
    projectPriorityButton.setAttribute('id', name + 'PriorityButton');

    projectButtons.appendChild(projectPriorityButton);

    // Adds image to priority project button
    const myArrow = new Image();
    myArrow.src = Arrow;
    projectPriorityButton.appendChild(myArrow);

    // Deletes project when Remove is clicked
    projectRemoveButton.addEventListener('click', () => {
        // Removes project div from sidebar
        projectList.item(0).removeChild(document.getElementById(name + 'Outer'));

        // Remove project object
        let indexCount = 0;
        projects.list.forEach((object) => {
            for (const [key, value] of Object.entries(object)) {
                if (value === name) {
                    projects.list.splice(indexCount, 1)
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

        // Removes existing to-do list
        const currentTodo = document.getElementsByClassName('todoList');

        while (currentTodo.item(0).firstChild != null) {
            currentTodo.item(0).removeChild(currentTodo.item(0).firstChild);
        };

        generalProject();
        });
    });

    // Opens project priority form
    projectPriorityButton.addEventListener('click', () => {
        openPPCForm();
    });

    // Closes priority change form
    const ppcCancel = document.getElementById('ppcCancel');
    ppcCancel.addEventListener('click', () => {
        closePPCForm();
    });

};

// Changes priority in project object
const ppcSubmit = document.getElementById('ppcSubmit');
ppcSubmit.addEventListener('click', () => {
    const ppcRadio = document.getElementsByName('ppc');
    for (let i = 0; i < ppcRadio.length; i++) {
        if (ppcRadio[i].checked) {
            projects.list.forEach((object) => {
                if (object.name === currentProject.name) {
                    object.priority = ppcRadio[i].value;
                    
                    // Removes due date and priority to be re-added with updates
                    const projectDue = document.getElementsByClassName('projectDue');
                    while (projectDue.item(0).firstChild != null) {
                    projectDue.item(0).removeChild(projectDue.item(0).firstChild);
                    };

                    // Adds current project due date
                    const dueDisplay = document.createElement('p');
                    dueDisplay.textContent = object.dueDate;

                    projectDue.item(0).appendChild(dueDisplay);

                    // Adds current project priority
                    const priorityDisplay = document.createElement('p');
                    priorityDisplay.textContent = object.priority;

                    projectDue.item(0).appendChild(priorityDisplay);
                };
            });
        };
    };

    

    closePPCForm();
});

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
const clickProject = (name) => {
    const projectInfo = document.getElementById(name);
    projectInfo.addEventListener('click', () => {
        // Changes currentProject
        currentProject.name = name;

        // Removes existing project name, dueDate, and priority
        const currentTitle = document.getElementsByClassName('currentTitle');
        const projectDue = document.getElementsByClassName('projectDue');

        while (currentTitle.item(0).firstChild != null) {
            currentTitle.item(0).removeChild(currentTitle.item(0).firstChild);
        };

        while (projectDue.item(0).firstChild != null) {
            projectDue.item(0).removeChild(projectDue.item(0).firstChild);
        };

        // Removes existing to-do list
        const currentTodo = document.getElementsByClassName('todoList');

        while (currentTodo.item(0).firstChild != null) {
            currentTodo.item(0).removeChild(currentTodo.item(0).firstChild);
        };

        // Adds current project name
        const currentDisplay = document.createElement('p');
        currentDisplay.textContent = name;

        currentTitle.item(0).appendChild(currentDisplay);

        // Adds current project due date
        const dueDisplay = document.createElement('p');
        projects.list.forEach((object) => {
            if (object.name === name) {
                dueDisplay.textContent = object.dueDate;
            };
        });

        projectDue.item(0).appendChild(dueDisplay);

        // Adds current project priority
        const priorityDisplay = document.createElement('p');
        projects.list.forEach((object) => {
            if (object.name === name) {
                priorityDisplay.textContent = object.priority;
            };
        });
        

        projectDue.item(0).appendChild(priorityDisplay);

        // Displays current project's to-do list
        projects.list.forEach((object) => {
            if (object.name === name) {
                object.list.forEach((todoListItem) => {
                    displayTodo(todoListItem);
                });
            };
        });

        // Displays remove and priority buttons
        const removePri = document.querySelectorAll('[id$=Buttons]');
        removePri.forEach((node) => {
            const nodeString = node.outerHTML;
            
            if (nodeString.includes(currentProject.name + 'Buttons')) {
                node.style.display = 'flex';
            } else {
                node.style.display = 'none';
            };
        });

        // Project title italics on click
        projects.list.forEach((object) => {
            if (object.name === name) {
                document.getElementById(object.name).style.fontStyle = 'italic';
            } else {
                console.log(document.getElementById(object.name));
                document.getElementById(object.name).style.fontStyle = 'normal';
            };
        });
    });
};

export {addProject, projectPri, clickProject};