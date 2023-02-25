function add(a: number, b: number, c: number = 1): number {
  return a + b + c;
}
add("1", "2");
add(1);

function greet(person: string = "joly") {
  return person;
}
greet();
greet("hello");
greet(123);

const square = (x: number): number => {
  return x * x;
};

const randon = (x: number): string | number => {
  if (Math.random() < 0.5) {
    return x.toString();
  }
  return x;
};

// anonymous
const colors = ["red", "blue"];
colors.map((color) => color);

// void
function printName(person: string): void {
  console.log(person);
  return person;
}

// never
function giveError(msg: string): never {
  return msg;
  throw new Error(msg);
}

// practice
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

function twoFer(name: string = "you"): string {
  return `one for ${name}, one for me`;
}

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year

function isLeapyear(year: number): boolean {
  if (year % 4 === 0 && year % 100 > 0) {
    return true;
  }
  if (year % 400 === 0) {
    return true;
  }
  return false;
}

// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
