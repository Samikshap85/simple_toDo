document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');

    addButton.addEventListener('click', () => {
        const newTodoText = newTodoInput.value.trim();
        if (newTodoText) {
            const li = document.createElement('li');
            li.textContent = newTodoText;
            todoList.appendChild(li);
            newTodoInput.value = '';
        }
    });
});
