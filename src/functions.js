// Display and hide forms
function openPForm() {
    document.getElementById('newProject').style.display = 'flex';
};

function closePForm() {
    document.getElementById('newProject').style.display = 'none';
    document.getElementById('newProject').reset();
};

function openTDForm() {
    document.getElementById('todo').style.display = 'flex';
};

function closeTDForm() {
    document.getElementById('todo').style.display = 'none';
    document.getElementById('todo').reset();
};

function openPPCForm() {
    document.getElementById('projectPriChange').style.display = 'flex';
};

function closePPCForm() {
    document.getElementById('projectPriChange').style.display = 'none';
    document.getElementById('projectPriChange').reset();
};

function openTDPCForm() {
    document.getElementById('todoPriChange').style.display = 'flex';
};

function closeTDPCForm() {
    document.getElementById('todoPriChange').style.display = 'none';
    document.getElementById('todoPriChange').reset();
};

function openEditTodoForm() {
    document.getElementById('editTodo').style.display = 'flex';
};

function closeEditTodoForm() {
    document.getElementById('editTodo').style.display = 'none';
    document.getElementById('editTodo').reset();
};

function openEditTitleForm() {
    document.getElementById('editTitleForm').style.display = 'flex';
};

function closeEditTitleForm() {
    document.getElementById('editTitleForm').style.display = 'none';
    document.getElementById('editTitleForm').reset();
};

function openEditDescriptionForm() {
    document.getElementById('editDescriptionForm').style.display = 'flex';
};

function closeEditDescriptionForm() {
    document.getElementById('editDescriptionForm').style.display = 'none';
    document.getElementById('editDescriptionForm').reset();
};

function openEditDueDateForm() {
    document.getElementById('editDueDateForm').style.display = 'flex';
};

function closeEditDueDateForm() {
    document.getElementById('editDueDateForm').style.display = 'none';
    document.getElementById('editDueDateForm').reset();
};

function openEditNotesForm() {
    document.getElementById('editNotesForm').style.display = 'flex';
};

function closeEditNotesForm() {
    document.getElementById('editNotesForm').style.display = 'none';
    document.getElementById('editNotesForm').reset();
};

export {openPForm, closePForm, openTDForm, closeTDForm,
    openPPCForm, closePPCForm, openTDPCForm, closeTDPCForm,
    openEditTodoForm, closeEditTodoForm, openEditTitleForm,
    closeEditTitleForm, openEditDescriptionForm, closeEditDescriptionForm,
    openEditDueDateForm, closeEditDueDateForm, openEditNotesForm, closeEditNotesForm};