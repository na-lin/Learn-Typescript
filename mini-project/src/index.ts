//  ### type of DOM
document; // type with Document

// type of btn: HTMLElement | null
const btn = document.getElementById("btn");

// Approach 2: non-null assertion operator ! -> this guarentee not to be null
// const btn = document.getElementById("btn")!;

// Approach 1: ?. -> if btn exist, which mean btn !== null, add event listner to the element
btn?.addEventListener("click", () => {
  console.log("click");
});
