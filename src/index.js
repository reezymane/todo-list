import './style.css';
import {project, projects, projectStorage} from './factories';
import {openPForm, closePForm, openTDForm, closeTDForm} from './functions';
import {addProject, projectPri, clickProject} from './newProject';
import {generalProject} from './generalProject';
import {submitTodo} from "./newTodo";
import Folder from './img/folder.png'

(() => {
    // Load projects from local storage
    if (localStorage.length > 0) {
        Storage.prototype.getObject = function(key) {
            var value = this.getItem(key);
            return value && JSON.parse(value);
        };

        for (let i = 0; i < localStorage.length; i++) {
            const localProject = localStorage.getItem(localStorage.key(i));
            let splitLocal = localProject.replace(/"/g, '');
            let noBrackets = splitLocal.slice(1, -1);
            let stringArray = noBrackets.split(',');

            let localPname;
            let localDueDate;
            let localPriority;
            let dueDateFilled = 0;
            let priorityFilled = 0;
            stringArray.forEach((property) => {
                let propSplit = property.split(':');
                if (propSplit.includes('name')) {
                    localPname = propSplit[1];
                } else if (propSplit.includes('dueDate')) {
                    localDueDate = propSplit[1];
                    dueDateFilled++;
                } else if (propSplit.includes('priority')) {
                    localPriority = propSplit[1];
                    priorityFilled++;
                };

                
            });

            if (dueDateFilled === 0) {
                projects.list.push(project(localPname, '', localPriority));
            } else if (priorityFilled === 0) {
                projects.list.push(project(localPname, localDueDate, ''));
            } else {
                projects.list.push(project(localPname, localDueDate, localPriority));
            };

            addProject(localPname);

            clickProject(localPname);
        };
    };
    
    // Makes new project form appear when new project button is clicked
    const newProject = document.getElementsByClassName('newProject');
    newProject.item(0).addEventListener('click', () => {
        openPForm();
    });

    // Adds image to new project button
    const myFolder = new Image();
    myFolder.src = Folder;
    newProject.item(0).appendChild(myFolder);

    // Displays General project info on initial load and click
    generalProject();

    const generalClick = document.getElementById('General');
    generalClick.addEventListener('click', () => {
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

        // Hides other project remove and priority buttons
        const removePri = document.querySelectorAll('[id$=Buttons]');
        removePri.forEach((node) => {
            node.style.display = 'none';
        });

        generalProject();
    });

    // Submits a new project object to projects.list array and displays in sidebar
    const projectSubmit = document.getElementById('projectSubmit');
    projectSubmit.addEventListener('click', () => {
        // Checks if project name already exists
        const projectNameExists = projects.list.find(object => object.name === document.getElementById('projectName').value);
        if (projectNameExists != undefined) {
            alert('A project with this name already exists!');
        } else {
            // Checks if project name is blank
            if (document.getElementById('projectName').value != '') {
                projects.list.push(project(document.getElementById('projectName').value,
                document.getElementById('projectDueDate').value,
                projectPri()));

                // Stores project object in local storage
                Storage.prototype.setObject = function(key, value) {
                    this.setItem(key, JSON.stringify(value));
                };

                localStorage.setObject(document.getElementById('projectName').value, project(document.getElementById('projectName').value,
                document.getElementById('projectDueDate').value,
                projectPri()));

                addProject(document.getElementById('projectName').value);

                clickProject(document.getElementById('projectName').value);

                closePForm();
            } else {
                alert('Project name cannot be blank!');
            };
        };
    });

    // Cancel button closes project form
    const projectCancel = document.getElementById('projectCancel');
    projectCancel.addEventListener('click', () => {
        closePForm();
    });

    // Makes new to-do form appear when to-do button is clicked
    const newTodo = document.getElementsByClassName('newTodo');
    newTodo.item(0).addEventListener('click', () => {
        openTDForm();
    });

    // Submits a new to-do object to projects.list array
    submitTodo();

    // Cancel button closes to-do form
    const todoCancel = document.getElementById('todoCancel');
    todoCancel.addEventListener('click', () => {
        closeTDForm();
    });
})();