const form = document.getElementById("form");
const toDoInput = document.getElementById("toDoInput");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach(todo => {
        addAndDeleteTodo(todo)
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addAndDeleteTodo();
});

//adds and removes the todo items 
function addAndDeleteTodo(todo) {
    let todoText = toDoInput.value;

    if(todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");

        if(todo && todo.completed) {
            todoEl.classList.add("completed");
        }
        
        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed")

            //Putting update here allows the completed flag to update when an item is clicked
            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl)

        toDoInput.value = "";

        updateLS();
    }
}

//updates local storage
function updateLS() {
    const todosEl = document.querySelectorAll("li");

    const todos = [];
    
    //Note Elements are the list items DOM element
    //notes will be an array of the notes 
    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains
            ("completed"),
        });
    });

    //Posts the value of the text and the completed flag, currently stores all of the notes in the same JSON rather than per note 
    localStorage.setItem("todos", JSON.stringify(todos));
}

