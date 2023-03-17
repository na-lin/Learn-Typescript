const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoInput") as HTMLInputElement;
const form = document.querySelector("#todoform")!;
const todoList = document.getElementById("todolist");

// btn?.addEventListener("click", () => {
//   console.log("click");
//   console.log(input.value);
// });

function handleSubmit(e: Event) {
  e.preventDefault();
  const newTodoText = input.value;
  const newLI = document.createElement("li");
  newLI.textContent = newTodoText;

  // checkbox
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  newLI.append(checkBox);
  todoList?.append(newLI);
  input.value = "";
}

form.addEventListener("submit", handleSubmit);
