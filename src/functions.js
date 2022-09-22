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

export {openPForm, closePForm, openTDForm, closeTDForm};