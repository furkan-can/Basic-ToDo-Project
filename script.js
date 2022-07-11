const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnAddNewTask = document.querySelector('#btnAddNewTask');
const brnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

eventListeners();

function eventListeners() {

    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', deleteTask);
    btnAddNewTask.addEventListener('click', addTask);
    brnDeleteAll.addEventListener('click', deleteAllTasks);
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
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-secondary';
        li.appendChild(document.createTextNode(input.value));

        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.className = 'delete-item float-right';
        link.innerHTML = '<i class="fas fa-times"></i>';
        li.appendChild(link);

        taskList.appendChild(li);

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
