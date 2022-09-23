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

export {addProject};