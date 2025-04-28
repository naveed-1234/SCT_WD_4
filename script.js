const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskText = document.getElementById('task-input').value;
    const taskDatetime = document.getElementById('task-datetime').value;

    addTask(taskText, taskDatetime);

    taskForm.reset();
});

function addTask(text, datetime) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.innerText = `${text} (Due: ${new Date(datetime).toLocaleString()})`;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'task-buttons';

    const completeBtn = document.createElement('button');
    completeBtn.innerText = '✔️';
    completeBtn.onclick = () => li.classList.toggle('completed');

    const editBtn = document.createElement('button');
    editBtn.innerText = '✏️';
    editBtn.onclick = () => editTask(li, taskContent);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '🗑️';
    deleteBtn.onclick = () => li.remove();

    buttonsDiv.append(completeBtn, editBtn, deleteBtn);
    li.append(taskContent, buttonsDiv);

    taskList.appendChild(li);
}

function editTask(listItem, taskContent) {
    const newTask = prompt('Edit your task:', taskContent.innerText.split(' (Due:')[0]);
    const newDatetime = prompt('Edit Date and Time (YYYY-MM-DDTHH:MM format):', '');

    if (newTask) {
        if (newDatetime) {
            taskContent.innerText = `${newTask} (Due: ${new Date(newDatetime).toLocaleString()})`;
        } else {
            taskContent.innerText = `${newTask}`;
        }
    }
}
