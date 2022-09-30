import {generalProject} from './generalProject';
import {openPPCForm, closePPCForm} from './functions';
import {projects, currentProject, todo} from './factories';
import {displayTodo} from './newTodo';
import Arrow from './img/arrow.png';
import Trash from './img/trash.png';
import {format, parseISO} from 'date-fns';

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
    newName.setAttribute('id', name + 'ProjectName');
    newName.textContent = name;

    newAdd.appendChild(newName);

    // Adds project dueDate to sidebar
    const dueDisplay = document.createElement('p');
    projects.list.forEach((object) => {
        if (object.name === name) {
            if (object.dueDate != '') {
                dueDisplay.textContent = format(parseISO(object.dueDate), 'MM/dd/yyyy');
            } else {
                dueDisplay.textContent = object.dueDate;
            };
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

        //Remove project from local storage
        localStorage.removeItem(name);

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
                    if (object.dueDate != '') {
                        dueDisplay.textContent = format(parseISO(object.dueDate), 'MM/dd/yyyy');
                    } else {
                        dueDisplay.textContent = object.dueDate;
                    };

                    projectDue.item(0).appendChild(dueDisplay);

                    // Adds current project priority
                    const priorityDisplay = document.createElement('p');
                    priorityDisplay.textContent = object.priority;
                    if (object.priority === 'High') {
                        priorityDisplay.style.backgroundColor = 'rgb(255, 0, 0, 0.69)';
                        priorityDisplay.style.color = 'rgb(255, 255, 255, 0.69)';
                        priorityDisplay.style.borderColor = 'rgb(255, 255, 255, 0.69)';
                    } else if (object.priority === 'Mid') {
                        priorityDisplay.style.backgroundColor = 'rgb(255,165,0, 0.69)';
                        priorityDisplay.style.color = 'rgb(255, 255, 255, 0.69)';
                        priorityDisplay.style.borderColor = 'rgb(255, 255, 255, 0.69)';
                    } else if (object.priority === 'Low') {
                        priorityDisplay.style.backgroundColor = 'rgb(255, 240, 0, 0.69)';
                        priorityDisplay.style.color = 'rgb(255, 255, 255, 0.69)';
                        priorityDisplay.style.borderColor = 'rgb(255, 255, 255, 0.69)';
                    };
                    

                    projectDue.item(0).appendChild(priorityDisplay);

                    // Changes project background color
                    const projectName = document.getElementById(currentProject.name + 'ProjectName')
                    if (object.priority === 'High') {
                        projectName.style.backgroundColor = 'rgb(255, 0, 0, 0.69)';
                    } else if (object.priority === 'Mid') {
                        projectName.style.backgroundColor = 'rgb(255,165,0, 0.69)';
                    } else if (object.priority === 'Low') {
                        projectName.style.backgroundColor = 'rgb(255, 240, 0, 0.69)';
                    };
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

        console.log(localStorage);
        // Load projects from local storage
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                const localProject = localStorage.getItem(localStorage.key(i));
                let splitLocal = localProject.replace(/"/g, '');
                let noBrackets = splitLocal.slice(1, -1);
                let stringArray = noBrackets.split(',');

                let localName;
                let localDescription;
                let localDueDate;
                let localPriority;
                let localNotes;
                let dueDateFilled = 0;
                let priorityFilled = 0;
                let descriptionFilled = 0;
                let notesFilled = 0;
                const todoTest = /projectHome/g;

                // Filters local storage for objects with a projectHome i.e. a to-do
                if (stringArray.some(e => todoTest.test(e))) {
                    // Filters for objects with currentProject.name as project home
                    if (stringArray[0] === `projectHome:${currentProject.name}`) {
                        stringArray.forEach((property) =>{
                            let propSplit = property.split(':');
                            if (propSplit.includes('title')) {
                                localName = propSplit[1];
                            } else if (propSplit.includes('description'))  {
                                localDescription = propSplit[1];
                                descriptionFilled++;
                            } else if (propSplit.includes('dueDate'))  {
                                localDueDate = propSplit[1];
                                dueDateFilled++;
                            } else if (propSplit.includes('priority'))  {
                                localPriority = propSplit[1];
                                priorityFilled++;
                            } else if (propSplit.includes('notes'))  {
                                localNotes = propSplit[1];
                                notesFilled++;
                            };
                        });

                        if (descriptionFilled === 0) {
                            projects.list.forEach((object) => {
                                if (currentProject.name === object.name) {
                                    object.list.push(todo('General', localName, '', localDueDate, localPriority, localNotes));
                                };
                            });
                        } else if (dueDateFilled === 0) {
                            projects.list.forEach((object) => {
                                if (currentProject.name === object.name) {
                                    object.list.push(todo('General', localName, localDescription, '', localPriority, localNotes));
                                };
                            });
                        } else if (priorityFilled === 0) {
                            projects.list.forEach((object) => {
                                if (currentProject.name === object.name) {
                                    object.list.push(todo('General', localName, localDescription, localDueDate, '', localNotes));
                                };
                            });
                        } else if (notesFilled === 0) {
                            projects.list.forEach((object) => {
                                if (currentProject.name === object.name) {
                                    object.list.push(todo('General', localName, localDescription, localDueDate, localPriority, ''));
                                };
                            });
                        } else {
                            projects.list.forEach((object) => {
                                if (currentProject.name === object.name) {
                                    object.list.push(todo('General', localName, localDescription, localDueDate, localPriority, localNotes));
                                };
                            });
                        };
                    };
                };
            };
        };

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
                if (object.dueDate != '') {
                    dueDisplay.textContent = format(parseISO(object.dueDate), 'MM/dd/yyyy');
                } else {
                    dueDisplay.textContent = object.dueDate;
                };
            };
        });

        projectDue.item(0).appendChild(dueDisplay);

        // Adds current project priority
        const priorityDisplay = document.createElement('p');
        projects.list.forEach((object) => {
            if (object.name === name) {
                priorityDisplay.textContent = object.priority;
                if (object.priority === 'High') {
                    priorityDisplay.style.backgroundColor = 'rgb(255, 0, 0, 0.69)';
                    priorityDisplay.style.color = 'rgb(255, 255, 255, 0.69)';
                    priorityDisplay.style.borderColor = 'rgb(255, 255, 255, 0.69)';
                } else if (object.priority === 'Mid') {
                    priorityDisplay.style.backgroundColor = 'rgb(255,165,0, 0.69)';
                    priorityDisplay.style.color = 'rgb(255, 255, 255, 0.69)';
                    priorityDisplay.style.borderColor = 'rgb(255, 255, 255, 0.69)';
                } else if (object.priority === 'Low') {
                    priorityDisplay.style.backgroundColor = 'rgb(255, 240, 0, 0.69)';
                    priorityDisplay.style.color = 'rgb(255, 255, 255, 0.69)';
                    priorityDisplay.style.borderColor = 'rgb(255, 255, 255, 0.69)';
                };
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

        // Project title italics and outer div shadow on click
        projects.list.forEach((object) => {
            if (object.name === name) {
                document.getElementById(object.name).style.fontStyle = 'italic';
                document.getElementById(object.name + 'Outer').style.boxShadow = '0px 5px 5px #888, 0px -5px 5px #888';
            } else {
                if (object.name != 'General') {
                    document.getElementById(object.name).style.fontStyle = 'normal';
                    document.getElementById(object.name + 'Outer').style.boxShadow = 'none';
                } else {
                    document.getElementById(object.name).style.boxShadow = 'none';
                };
            };
        });

        // Displays hyphen on click
        const span = document.querySelectorAll('span');
        span.forEach((hyphen) => {
            if (hyphen.parentNode != document.querySelector('footer')) {
                if (hyphen.parentNode === document.getElementById(name)) {
                    hyphen.style.opacity = 1;
                } else {
                    hyphen.style.opacity = 0;
                };
            };
        });
    });
};

export {addProject, projectPri, clickProject};