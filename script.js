const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnAddNewTask = document.querySelector('#btnAddNewTask');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

const items = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

function createItem(text) {
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.className = 'delete-item float-right';
    link.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
}

eventListeners();

function eventListeners() {
    loadTasks();
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', deleteTask);
    btnDeleteAll.addEventListener('click', deleteAllTasks);
}

function loadTasks() {
    items.forEach(function (item) {
        createItem(item);
    }
    );
}

function addTask(e) {
    let control = true;

    document.getElementById('task-list').childNodes.forEach(function (item) {
        if (item.innerText == input.value) {
            control = false;
        }
    });

    if (input.value === '') {
        alert('Please add a task');
    } else if (!control) {
        alert('Task already exists');
        input.value = '';
    } else {
        createItem(input.value);

        input.value = '';
    }
    e.preventDefault();
}

function deleteTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

function deleteAllTasks(e) {
    if (confirm('Are you sure?')) {
        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }
        });
    }
}

