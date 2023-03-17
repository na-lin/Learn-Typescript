"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector("#todoform");
const todoList = document.getElementById("todolist");
// btn?.addEventListener("click", () => {
//   console.log("click");
//   console.log(input.value);
// });
function handleSubmit(e) {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement("li");
    newLI.textContent = newTodoText;
    // checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newLI.append(checkBox);
    todoList === null || todoList === void 0 ? void 0 : todoList.append(newLI);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
