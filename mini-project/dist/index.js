"use strict";
//  ### type of DOM
document; // type with Document
// type of btn: HTMLElement | null
const btn = document.getElementById("btn");
// Approach 2: non-null assertion operator ! -> this guarentee not to be null
// const btn = document.getElementById("btn")!;
// Approach 1: ?. -> if btn exist, which mean btn !== null, add event listner to the element
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    console.log("click");
});
// ##### Type Assertions, I know more then you
let mystery = "Hello world";
// don't change the type of mystery, but just there treat mystery with type of string
const numChars = mystery.length;
