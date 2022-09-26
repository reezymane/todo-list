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

// Submits a new to-do object to projects.list array
const submitTodo = () => {
    const todoSubmit = document.getElementById('todoSubmit');
    todoSubmit.addEventListener('click', () => {
        projects.list.forEach((object) => {
            if (currentProject.name === object.name) {
                object.list.push(todo(document.getElementById('todoTitle').value,
                document.getElementById('todoDescription').value,
                todoPri(),
                document.getElementById('notes').value));

                closeTDForm();
            };
        });
    });
};

export {submitTodo};