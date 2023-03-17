"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector("#todoform");
// btn?.addEventListener("click", () => {
//   console.log("click");
//   console.log(input.value);
// });
function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit");
});
