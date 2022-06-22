const form = document.getElementById("form");
const toDoInput = document.getElementById("toDoInput");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoText = toDoInput.value;

    if (todoText) {
        const todoEl = document.createElement("li");
        todoEl.innerText = todoText;
        todos.appendChild(todoEl)

        toDoInput.value = "";
    }
})