const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoInput") as HTMLInputElement;
const form = document.querySelector("#todoform")!;
const todoList = document.getElementById("todolist");

interface Todo {
  text: string;
  completed: boolean;
}

const todo: Todo[] = readTodo();
initTodos();

function readTodo(): Todo[] {
  const todos = localStorage.getItem("todo");
  if (todos === null) return [];
  return JSON.parse(todos);
}

function initTodos() {
  todo.forEach((todo) => {
    createTodo(todo);
  });
}

function handleSubmit(e: Event) {
  e.preventDefault();

  // save todo to localStorage
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todo.push(newTodo);
  createTodo(newTodo);
  input.value = "";
}

function saveTodos() {
  localStorage.setItem("todo", JSON.stringify(todo));
}

function createTodo(todo: Todo) {
  // create todo li
  const newLI = document.createElement("li");
  newLI.textContent = todo.text;

  // checkbox
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = todo.completed;
  checkBox.addEventListener("change", function () {
    todo.completed = checkBox.checked;
    saveTodos();
  });
  newLI.append(checkBox);

  // append to ul
  todoList?.append(newLI);
}

form.addEventListener("submit", handleSubmit);

// btn?.addEventListener("click", () => {
//   console.log("click");
//   console.log(input.value);
// });
