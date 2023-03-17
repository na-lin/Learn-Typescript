const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoInput") as HTMLInputElement;
const form = document.querySelector("#todoform")!;

// btn?.addEventListener("click", () => {
//   console.log("click");
//   console.log(input.value);
// });

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log("submit");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit");
});
