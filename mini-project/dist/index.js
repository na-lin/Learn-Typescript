"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector("#todoform");
const todoList = document.getElementById("todolist");
const todo = readTodo();
initTodos();
function readTodo() {
    const todos = localStorage.getItem("todo");
    if (todos === null)
        return [];
    return JSON.parse(todos);
}
function initTodos() {
    todo.forEach((todo) => {
        createTodo(todo);
    });
}
function handleSubmit(e) {
    e.preventDefault();
    // save todo to localStorage
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todo.push(newTodo);
    localStorage.setItem("todo", JSON.stringify(todo));
    createTodo(newTodo);
    input.value = "";
}
function createTodo(todo) {
    // create todo li
    const newLI = document.createElement("li");
    newLI.textContent = todo.text;
    // checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newLI.append(checkBox);
    // append to ul
    todoList === null || todoList === void 0 ? void 0 : todoList.append(newLI);
}
form.addEventListener("submit", handleSubmit);
// btn?.addEventListener("click", () => {
//   console.log("click");
//   console.log(input.value);
// });
