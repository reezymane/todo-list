// Display and hide forms
function openPForm() {
    document.getElementById('newProject').style.display = 'block';
};

function closePForm() {
    document.getElementById('newProject').style.display = 'none';
    document.getElementById('newProject').reset();
};

function openTDForm() {
    document.getElementById('todo').style.display = 'block';
};

function closeTDForm() {
    document.getElementById('todo').style.display = 'none';
    document.getElementById('todo').reset();
};

function openPPCForm() {
    document.getElementById('projectPriChange').style.display = 'block';
};

function closePPCForm() {
    document.getElementById('projectPriChange').style.display = 'none';
    document.getElementById('projectPriChange').reset();
};

function openTDPCForm() {
    document.getElementById('todoPriChange').style.display = 'block';
};

function closeTDPCForm() {
    document.getElementById('todoPriChange').style.display = 'none';
    document.getElementById('todoPriChange').reset();
};

export {openPForm, closePForm, openTDForm, closeTDForm, openPPCForm, closePPCForm, openTDPCForm, closeTDPCForm};