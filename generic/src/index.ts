// const nums: number[] = []
const nums: Array<number> = [];
const colors: Array<string> = []; // name of interface + <T some type>

// querySelector will return something with this type
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
inputEl.value = "Hacked!";
console.log(inputEl);

const btn = document.querySelector<HTMLButtonElement>(".btn");
