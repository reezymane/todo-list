import {todo, projects, currentProject, currentTodo, todoLocalName} from './factories';
import {closeTDForm, openTDPCForm, closeTDPCForm, openEditTodoForm, closeEditTodoForm, openEditTitleForm,
    openEditDescriptionForm, openEditDueDateForm, openEditNotesForm, closeEditTitleForm, closeEditDescriptionForm,
    closeEditDueDateForm, closeEditNotesForm} from './functions';
import Arrow from './img/arrow.png';
import Trash from './img/trash.png';
import {format, parseISO} from 'date-fns';

// Gets value for to-do radio button selection
const todoPri = () => {
    const todoRadio = document.getElementsByName('todoPriority');
    for (let i = 0; i < todoRadio.length; i++) {
        if (todoRadio[i].checked) {
            return todoRadio[i].value;
        };
    };
};

// Displays to-do
const displayTodo = (list) => {
    const todoList = document.getElementsByClassName('todoList');
    const todoDiv = document.createElement('div');
    todoDiv.setAttribute('id', list.title + 'Div');
    todoList.item(0).appendChild(todoDiv);

    const todoHeading2 = document.createElement('div');
    todoHeading2.setAttribute('id', list.title + 'Heading2');
    todoDiv.appendChild(todoHeading2);

    // Adds mark complete button
    const completeButtonContainer = document.createElement('div');
    completeButtonContainer.setAttribute('id', list.title + 'CompleteContainer');
    todoHeading2.appendChild(completeButtonContainer);

    const completeButton = document.createElement('button');
    completeButton.setAttribute('id', list.title + 'Complete');
    completeButton.textContent = 'C';
    completeButtonContainer.appendChild(completeButton);

    // Turns complete button green on click
    let completeCount = 0;
    completeButton.addEventListener('click', () =>{
        completeButton.style.backgroundColor = 'green';
        
        if (completeCount === 1) {
            completeButton.style.backgroundColor = 'rgba(240, 248, 255, 0)';
            completeCount = 0;
        } else {
            completeCount++;
        };
    });

    const todoHeading = document.createElement('div');
    todoHeading.setAttribute('id', list.title + 'Heading');
    todoDiv.appendChild(todoHeading);
    
    let flexCount = 0;
    todoHeading.addEventListener('click', () => {
        currentTodo.name = list.title;

        // Expands to-do on click
        const hidden = document.getElementById(list.title + 'Hidden');
        hidden.style.display = 'flex';

        // Collapses to-do on second click
        if (flexCount === 1) {
            hidden.style.display = 'none';
            flexCount = 0;
        } else {
            flexCount++;
        };
    });

    // Adds to-do title
    const todoTitle = document.createElement('p');
    todoTitle.textContent = list.title;
    todoHeading.appendChild(todoTitle);

    // Adds to-do description
    const todoDescription = document.createElement('p');
    todoDescription.textContent = list.description;
    todoHeading.appendChild(todoDescription);

    // Creates div for dueDate display
    const toDueDisplay = document.createElement('div');
    toDueDisplay.setAttribute('id', list.title + 'toDueDisplay');
    todoDiv.appendChild(toDueDisplay);

    // Adds 'Due' text
    const toDueText = document.createElement('p');
    toDueText.textContent = 'Due:';
    toDueDisplay.appendChild(toDueText);

    // Adds to-do dueDate
    const toDueDate = document.createElement('p');
    if (list.dueDate != '') {
        toDueDate.textContent = format(parseISO(list.dueDate), 'MM/dd/yyyy');
    } else {
        toDueDate.textContent = list.dueDate;
    };
    
    toDueDisplay.appendChild(toDueDate);

    // Creates div for priority, notes, and remove/change priority buttons
    const hiddenDiv = document.createElement('div');
    hiddenDiv.setAttribute('id', list.title + 'Hidden');
    todoDiv.appendChild(hiddenDiv);

    // Creates inner div for priority and notes
    const priorityNotes = document.createElement('div');
    priorityNotes.setAttribute('id', list.title + 'PriorityNotes');
    hiddenDiv.appendChild(priorityNotes);

    // Adds priority and color
    const toPriority = document.createElement('p');
    toPriority.textContent = list.priority;
    if (list.priority === 'High') {
        toPriority.style.color = 'rgb(255, 0, 0, 0.69)';
        toPriority.style.border = '2px solid red';
    } else if (list.priority === 'Mid') {
        toPriority.style.color = 'rgb(255,165,0, 0.69)';
        toPriority.style.border = '2px solid orange';
    } else if (list.priority === 'Low') {
        toPriority.style.color = 'rgb(255, 240, 0, 0.69)';
        toPriority.style.border = '2px solid yellow';
    };
    priorityNotes.appendChild(toPriority);

    // Adds notes
    const toNotes = document.createElement('p');
    toNotes.textContent = list.notes;
    priorityNotes.appendChild(toNotes);

    // Adds todo Remove and PriorityChange buttons
    const todoButtons = document.createElement('div');
    todoButtons.setAttribute('id', list.title + 'RemovePri');
    hiddenDiv.appendChild(todoButtons);

    const todoRemoveButton = document.createElement('button');
    todoRemoveButton.setAttribute('id', list.title + 'RemoveButton');
    todoButtons.appendChild(todoRemoveButton);

    // Adds image to remove to-do button
    const myTrash = new Image();
    myTrash.src = Trash;
    todoRemoveButton.appendChild(myTrash);

    const todoEditButton = document.createElement('button');
    todoEditButton.setAttribute('id', list.title + 'EditButton');
    todoButtons.appendChild(todoEditButton);

    // Adds image to priority to-do button
    const myArrow = new Image();
    myArrow.src = Arrow;
    todoEditButton.appendChild(myArrow);

    // Deletes to-do when Remove is clicked
    todoRemoveButton.addEventListener('click', () => {
        // Removes todo div from display
        todoList.item(0).removeChild(document.getElementById(list.title + 'Div'));
        
        //Remove to-do from local storage
        localStorage.removeItem(list.title);
        
        
        // Remove to-do object
        let todoIndexCount = 0;
        projects.list.forEach((parentProject) => {
            if (currentProject.name === parentProject.name) {
                parentProject.list.forEach((todoItem) => {
                    if (list.title === todoItem.title) {
                        parentProject.list.splice(todoIndexCount, 1);
                    };
                    
                    todoIndexCount++;
                });
            };
        });
    });

    // Opens to-do edit form
    todoEditButton.addEventListener('click', () => {
        openEditTodoForm();
    });

    // Closes to-do edit form
    const editTodoCancel = document.getElementById('editTodoCancel');
    editTodoCancel.addEventListener('click', () => {
        closeEditTodoForm();
    });
};

// Edit to-do property buttons open appropriate form
document.querySelectorAll('.editProperty').forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Title') {
            closeEditTodoForm();
            openEditTitleForm();
        } else if (button.textContent === 'Description') {
            closeEditTodoForm();
            openEditDescriptionForm();
        } else if (button.textContent === 'Due Date') {
            closeEditTodoForm();
            openEditDueDateForm();
        } else if (button.textContent === 'Priority') {
            closeEditTodoForm();
            openTDPCForm();
        } else if (button.textContent === 'Notes') {
            closeEditTodoForm();
            openEditNotesForm();
        };
    });
});

// Changes title in to-do object, displays new title, and updates div names
document.getElementById('editTitleSubmit').addEventListener('click', () => {
    projects.list.forEach((parentProject) => {
        parentProject.list.forEach((todoItem) => {
            if (currentTodo.name === todoItem.title) {
                const titleDiv = document.getElementById(todoItem.title + 'Div');
                const titleHeading2 = document.getElementById(todoItem.title + 'Heading2');
                const titleHeading = document.getElementById(todoItem.title + 'Heading');
                const titleDueDisplay = document.getElementById(todoItem.title + 'toDueDisplay');
                const titleHidden = document.getElementById(todoItem.title + 'Hidden');
                const titlePriorityNotes = document.getElementById(todoItem.title + 'PriorityNotes');
                const titleRemovePri = document.getElementById(todoItem.title + 'RemovePri');

                // Removes old to-do entry
                localStorage.removeItem(todoItem.title);

                todoItem.title = document.getElementById('editTodoTitle').value;
                titleHeading.firstChild.textContent = todoItem.title;

                titleDiv.setAttribute('id', todoItem.title + 'Div');
                titleHeading2.setAttribute('id', todoItem.title + 'Heading2');
                titleHeading.setAttribute('id', todoItem.title + 'Heading');
                titleDueDisplay.setAttribute('id', todoItem.title + 'toDueDisplay');
                titleHidden.setAttribute('id', todoItem.title + 'Hidden');
                titlePriorityNotes.setAttribute('id', todoItem.title + 'PriorityNotes');
                titleRemovePri.setAttribute('id', todoItem.title + 'RemovePri');
                
                currentTodo.name = todoItem.title;

                // Adds updated to-do to local storage
                Storage.prototype.setObject = function(key, value) {
                    this.setItem(key, JSON.stringify(value));
                };

                localStorage.setObject(todoItem.title, todo(todoItem.projectHome, todoItem.title,
                todoItem.description, todoItem.dueDate, todoItem.priority,
                todoItem.notes));

                closeEditTitleForm();
            };
        });
    });
});

// Closes edit title form
document.getElementById('editTitleCancel').addEventListener('click', () => {
    closeEditTitleForm();
});

// Changes description in to-do object and displays new description
document.getElementById('editDescriptionSubmit').addEventListener('click', () => {
    projects.list.forEach((parentProject) => {
        parentProject.list.forEach((todoItem) => {
            if (currentTodo.name === todoItem.title) {
                const titleHeading = document.getElementById(todoItem.title + 'Heading');
                todoItem.description = document.getElementById('editTodoDescription').value;
                titleHeading.lastChild.textContent = todoItem.description;

                // Removes old to-do entry
                localStorage.removeItem(todoItem.title);

                // Adds updated to-do to local storage
                Storage.prototype.setObject = function(key, value) {
                    this.setItem(key, JSON.stringify(value));
                };

                localStorage.setObject(todoItem.title, todo(todoItem.projectHome, todoItem.title,
                todoItem.description, todoItem.dueDate, todoItem.priority,
                todoItem.notes));

                closeEditDescriptionForm();
            };
        });
    });
});

// Closes edit description form
document.getElementById('editDescriptionCancel').addEventListener('click', () => {
    closeEditDescriptionForm();
});

// Changes dueDate in to-do object and displays new dueDate
document.getElementById('editDueDateSubmit').addEventListener('click', () => {
    projects.list.forEach((parentProject) => {
        parentProject.list.forEach((todoItem) => {
            if (currentTodo.name === todoItem.title) {
                const titleDueDisplay = document.getElementById(todoItem.title + 'toDueDisplay');
                todoItem.dueDate = document.getElementById('editTodoDueDate').value;
                if (todoItem.dueDate != '') {
                    titleDueDisplay.lastChild.textContent = format(parseISO(todoItem.dueDate), 'MM/dd/yyyy');
                } else {
                    titleDueDisplay.lastChild.textContent = todoItem.dueDate;
                };

                // Removes old to-do entry
                localStorage.removeItem(todoItem.title);

                // Adds updated to-do to local storage
                Storage.prototype.setObject = function(key, value) {
                    this.setItem(key, JSON.stringify(value));
                };

                localStorage.setObject(todoItem.title, todo(todoItem.projectHome, todoItem.title,
                todoItem.description, todoItem.dueDate, todoItem.priority,
                todoItem.notes));
                
                closeEditDueDateForm();
            };
        });
    });
});

// Closes edit dueDate form
document.getElementById('editDueDateCancel').addEventListener('click', () => {
    closeEditDueDateForm();
});

// Changes notes in to-do object and displays new notes
document.getElementById('editNotesSubmit').addEventListener('click', () => {
    projects.list.forEach((parentProject) => {
        parentProject.list.forEach((todoItem) => {
            if (currentTodo.name === todoItem.title) {
                const titlePriorityNotes = document.getElementById(todoItem.title + 'PriorityNotes');
                todoItem.notes = document.getElementById('editTodoNotes').value;
                titlePriorityNotes.lastChild.textContent = todoItem.notes;

                // Removes old to-do entry
                localStorage.removeItem(todoItem.title);

                // Adds updated to-do to local storage
                Storage.prototype.setObject = function(key, value) {
                    this.setItem(key, JSON.stringify(value));
                };

                localStorage.setObject(todoItem.title, todo(todoItem.projectHome, todoItem.title,
                todoItem.description, todoItem.dueDate, todoItem.priority,
                todoItem.notes));

                closeEditNotesForm();
            };
        });
    });
});

// Closes edit notes form
document.getElementById('editNotesCancel').addEventListener('click', () => {
    closeEditNotesForm();
});

// Changes priority in to-do object and displays new priority
const tdpcSubmit = document.getElementById('tdpcSubmit');
tdpcSubmit.addEventListener('click', () => {
    const tdpcRadio = document.getElementsByName('tdpc');

    for (let i = 0; i < tdpcRadio.length; i++) {
        if (tdpcRadio[i].checked) {
            projects.list.forEach((parentProject) => {
                parentProject.list.forEach((todoItem) => {
                    if (currentTodo.name === todoItem.title) {
                        todoItem.priority = tdpcRadio[i].value;

                        // Removes old to-do entry
                        localStorage.removeItem(todoItem.title);

                        // Adds updated to-do to local storage
                        Storage.prototype.setObject = function(key, value) {
                            this.setItem(key, JSON.stringify(value));
                        };

                        localStorage.setObject(todoItem.title, todo(todoItem.projectHome, todoItem.title,
                        todoItem.description, todoItem.dueDate, todoItem.priority,
                        todoItem.notes));

                        let changePriorityNotes = document.getElementById(todoItem.title + 'PriorityNotes');
                        // Removes existing priority text
                        while (changePriorityNotes.firstChild != null) {
                            changePriorityNotes.removeChild(changePriorityNotes.firstChild); 
                        };

                        // Adds updated text
                        const changePriority = document.createElement('p');
                        changePriority.textContent = todoItem.priority;
                        if (todoItem.priority === 'High') {
                            changePriority.style.color = 'rgb(255, 0, 0, 0.69)';
                            changePriority.style.border = '2px solid red';
                        } else if (todoItem.priority === 'Mid') {
                            changePriority.style.color = 'rgb(255,165,0, 0.69)';
                            changePriority.style.border = '2px solid orange';
                        } else if (todoItem.priority === 'Low') {
                            changePriority.style.color = 'rgb(255, 240, 0, 0.69)';
                            changePriority.style.border = '2px solid yellow';
                        };
                        changePriorityNotes.appendChild(changePriority);
                        
                        const changeNotes = document.createElement('p');
                        changeNotes.textContent = todoItem.notes;
                        changePriorityNotes.appendChild(changeNotes);
                    };
                });
            });
        };
    };

    closeTDPCForm();
});

// Closes priority change form
document.getElementById('tdpcCancel').addEventListener('click', () => {
    closeTDPCForm();
});

// Submits a new to-do object to current project's list array
const submitTodo = () => {
    const todoSubmit = document.getElementById('todoSubmit');
    todoSubmit.addEventListener('click', () => {
        // Checks if to-do name already exists
        const projectToCheck = projects.list.find(object => object.name === currentProject.name);
        const todoNameExists = projectToCheck.list.find(object => object.title === document.getElementById('todoTitle').value);
        if (todoNameExists != undefined) {
            alert('A to-do with this name already exists!');
        } else {
            // Checks if to-do name is blank
            if (document.getElementById('todoTitle').value != '') {
                projects.list.forEach((object) => {
                    if (currentProject.name === object.name) {
                    object.list.push(todo(object.name, document.getElementById('todoTitle').value,
                    document.getElementById('todoDescription').value,
                    document.getElementById('todoDueDate').value,
                    todoPri(),
                    document.getElementById('notes').value));

                    // Stores to-do object in local storage
                    Storage.prototype.setObject = function(key, value) {
                        this.setItem(key, JSON.stringify(value));
                    };

                    localStorage.setObject(todoLocalName.count, todo(object.name, document.getElementById('todoTitle').value,
                    document.getElementById('todoDescription').value,
                    document.getElementById('todoDueDate').value,
                    todoPri(),
                    document.getElementById('notes').value));

                    todoLocalName.count++;

                    displayTodo(object.list[(object.list.length - 1)]);
                    

                    closeTDForm();
                    };
                });
            } else {
                alert('To-do name cannot be blank!');
            };
        };
    });
};

export {submitTodo, displayTodo};