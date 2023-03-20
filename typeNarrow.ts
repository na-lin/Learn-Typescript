function triple(value: number | string) {
  if (typeof value === "number") {
    return value * 3;
  }
  return value.repeat(3);
}

function printLetter(word?: string) {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    word;
    console.log("You don't provide a word");
  }
}

const someFunc = (x: string | boolean, y: string | number) => {
  if (x === "3") {
    console.log(x);
  }
  if (x === y) {
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
};
