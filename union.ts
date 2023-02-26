type Point = {
  x: number;
  y: number;
};
type Lat = {
  lat: number;
  log: number;
};

let point: Point | Lat;

// type narrow
function cal(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// union type array
// const stuff: (number | string)[] = [1, 2, "12"];

// literal types
let zero: 0 = 0;
zero = 2;

zero = 0;

// the mood has be equal to happy or sad
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
mood = "Angry";

// possible value
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "wed";

// exercise
let highScore: number | boolean = true;
const stuff: number[] | string[] = [];
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};
type RGB = {
  r: number;
  g: number;
  b: number;
};
type HSL = {
  h: number;
  s: number;
  l: number;
};

const colors: (RGB | HSL)[] = [
  { r: 12, g: 12, b: 12 },
  { h: 12, s: 12, l: 12 },
];

function greet(name: string | string[]): void {
  if (typeof name === "string") {
    console.log(`Hello, ${name}`);
  } else {
    name.forEach((person) => {
      console.log(`Hello,${person}`);
    });
  }
}
