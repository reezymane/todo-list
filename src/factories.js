// Stores to-do details into an object
const todo = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes};
};

// Stores project name and an array to hold to-do's into an object
const project = (name, dueDate, priority) => {
    return {name, dueDate, priority, list: []};
};

export {todo, project};