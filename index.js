const m1 = document.getElementById('button');

function addingEventListener(e) {
    alert('I was clicked!');
    m1.addEventListener('click', addingEventListener);
}

// m1.addEventListener('click', addingEventListener);