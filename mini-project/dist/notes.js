"use strict";
//  ### type of DOM
document; // type with Document
// type of btn: HTMLElement | null
const button = document.getElementById("btn");
// const input = document.getElementById("todoInput");
const todoInput = document.getElementById("todoInput");
// Approach 2: non-null assertion operator ! -> this guarentee not to be null
// const btn = document.getElementById("btn")!;
// Approach 1: ?. -> if btn exist, which mean btn !== null, add event listner to the element
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("click");
    console.log(todoInput.value); // Property 'value' does not exist on type 'HTMLElement'
    // Tell typescript input is a HTMLInputElement, which have the value property
});
// ##### Type Assertions, I know more then you
let mystery = "Hello world";
// don't change the type of mystery, but just there treat mystery with type of string
const numChars = mystery.length;
// ##### Type Assertions with DOM
