import {todo, projects, currentProject, currentTodo} from './factories';
import {closeTDForm, openTDPCForm, closeTDPCForm} from './functions';
import Arrow from './img/arrow.png';
import Trash from './img/trash.png';

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
    toDueDate.textContent = list.dueDate;
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

    const todoPriorityButton = document.createElement('button');
    todoPriorityButton.setAttribute('id', list.title + 'PriorityButton');
    todoButtons.appendChild(todoPriorityButton);

    // Adds image to priority to-do button
    const myArrow = new Image();
    myArrow.src = Arrow;
    todoPriorityButton.appendChild(myArrow);

    // Deletes to-do when Remove is clicked
    todoRemoveButton.addEventListener('click', () => {
        // Removes todo div from display
        todoList.item(0).removeChild(document.getElementById(list.title + 'Div'));
        
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

    // Opens to-do priority form
    todoPriorityButton.addEventListener('click', () => {
        openTDPCForm();
    });

    // Closes priority change form
    const tdpcCancel = document.getElementById('tdpcCancel');
    tdpcCancel.addEventListener('click', () => {
        closeTDPCForm();
    });
};

// Changes priority in to-do object
const tdpcSubmit = document.getElementById('tdpcSubmit');
tdpcSubmit.addEventListener('click', () => {
    const tdpcRadio = document.getElementsByName('tdpc');

    for (let i = 0; i < tdpcRadio.length; i++) {
        if (tdpcRadio[i].checked) {
            projects.list.forEach((parentProject) => {
                parentProject.list.forEach((todoItem) => {
                    if (currentTodo.name === todoItem.title) {
                        todoItem.priority = tdpcRadio[i].value;

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

// Submits a new to-do object to projects.list array
const submitTodo = () => {
    const todoSubmit = document.getElementById('todoSubmit');
    todoSubmit.addEventListener('click', () => {
        projects.list.forEach((object) => {
            if (currentProject.name === object.name) {
                object.list.push(todo(document.getElementById('todoTitle').value,
                document.getElementById('todoDescription').value,
                document.getElementById('todoDueDate').value,
                todoPri(),
                document.getElementById('notes').value));

                displayTodo(object.list[(object.list.length - 1)]);

                closeTDForm();
            };
        });
    });
};

export {submitTodo, displayTodo};