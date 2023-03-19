// const nums: number[] = []
const nums: Array<number> = [];
const colors: Array<string> = []; // name of interface + <T some type>

// querySelector will return something with this type
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
inputEl.value = "Hacked!";
console.log(inputEl);

const btn = document.querySelector<HTMLButtonElement>(".btn");

function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}

// no relationship between input and output
function badIdentity(item: any): any {
  return item;
}

// Generic,
function identity<Type>(item: Type): Type {
  return item;
}
const result = identity<number>(1);
