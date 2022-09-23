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
        const currentTitle = document.getElementsByClassName('currentTitle');

        const currentDisplay = document.createElement('p');
        currentDisplay.textContent = name;

        currentTitle.item(0).appendChild(currentDisplay);
    });
};

export {addProject, projectPri, clickProject};