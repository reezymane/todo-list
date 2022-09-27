// Stores to-do details into an object
const todo = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes};
};

// Stores project name and an array to hold to-do's into an object
const project = (name, dueDate, priority) => {
    return {name, dueDate, priority, list: []};
};

// Creates a General project object, an all projects object, and current project object
const generalP = {
    name: 'General',
    list: []
};

const projects = {
    list : [generalP]
};
const currentProject = {
    name: 'General'
};

const currentTodo = {
    name: ''
};

export {todo, project, generalP, projects, currentProject, currentTodo};