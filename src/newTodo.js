import {todo, projects, currentProject} from './factories';
import {closeTDForm} from './functions';

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
    const todoHeading = document.createElement('div');
    todoHeading.setAttribute('id', list.title + 'Heading');
    todoList.item(0).appendChild(todoHeading);

    const innerHeading = document.createElement('div');
    innerHeading.setAttribute('id', list.title + 'Inner');
    todoHeading.appendChild(innerHeading);

    // Adds mark complete button
    const completeButton = document.createElement('button');
    completeButton.setAttribute('id', list.title + 'Complete');
    completeButton.textContent = '*complete*';
    innerHeading.appendChild(completeButton);

    // Adds to-do title
    const todoTitle = document.createElement('p');
    todoTitle.textContent = list.title;
    innerHeading.appendChild(todoTitle);

    // Adds to-do description
    const todoDescription = document.createElement('p');
    todoDescription.textContent = list.description;
    innerHeading.appendChild(todoDescription);

    // Creates div for dueDate display
    const toDueDisplay = document.createElement('div');
    toDueDisplay.setAttribute('id', list.title + 'toDueDisplay');
    todoList.item(0).appendChild(toDueDisplay);

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
    hiddenDiv.setAttribute('id', list.title + 'HiddenDiv');
    todoList.item(0).appendChild(hiddenDiv);

    // Creates inner div for priority and notes
    const priorityNotes = document.createElement('div');
    priorityNotes.setAttribute('id', list.title + 'PriorityNotes');
    hiddenDiv.appendChild(priorityNotes);

    // Adds priority
    const toPriority = document.createElement('p');
    toPriority.textContent = list.priority;
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
    todoRemoveButton.textContent = '*trash*';
    todoButtons.appendChild(todoRemoveButton);

    const todoPriorityButton = document.createElement('button');
    todoPriorityButton.setAttribute('id', list.title + 'PriorityButton');
    todoPriorityButton.textContent = '*priority*';
    todoButtons.appendChild(todoPriorityButton);
};

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

export {submitTodo};