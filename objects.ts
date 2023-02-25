// let coordinate: { x: number; y: number } = { x: 12, y: 23 };
// Type alias
type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 12, y: 23 };
coordinate = {};
coordinate = { age: 12 };

function printName(person: { firstName: string; lastName: string }): void {
  console.log(person);
}

function randomCoor(): Point {
  return { x: Math.random(), y: Math.random() };
}

// Werid things for excess property
printName({ firstName: "Mico", lastName: "Liiid", age: 123 }); // directly inline define -> check only pass property that required
const singe = { isAlive: true, firstName: "Mico", lastName: "Liiid", age: 123 };
printName(singe); // assign variable -> ignore excess property

// type alias with nested object
type Song = {
  title: string;
  credits: {
    a: number;
  };
};
let mysong: Song = {
  title: "hello",
  credits: {
    x: 12,
  },
};

// optional properties
type OptionalPoint = {
  x: number;
  y: number;
  z?: number;
};

let myPoint: OptionalPoint = { x: 12, y: 12 };

// readonly
type User = {
  readonly id: number;
  username: string;
};

let user: User = {
  id: 123,
  username: "helo",
};
user.id = 12345;

// intersection Types
type Colorful = {
  color: string;
};
type Circle = {
  radius: number;
};
type ColorfulCircle = Colorful & Circle;

const happyFace: ColorfulCircle = {
  radius: 4,
  // color: "red",
};

type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};
type CatDog = Cat &
  Dog & {
    age: number;
  };

const catdog: CatDog = {
  numLives: 12,
  breed: "xxx",
  // age: 12,
};
