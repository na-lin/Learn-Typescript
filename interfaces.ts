// type alias
// type Point = {
//   x: number;
//   y: number;
// };
// const pt: Point = { x: 12, y: 23 };

// interfaces, only object, not allow union
interface Point {
  x: number;
  y: number;
}
const pt: Point = { x: 123, y: 123 };

// readonly and optional interface properties
// interface methods -> what method it include, the input&output
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string; // must be a method and return string
  greet(): string; // 2nd way to write
}
// interface parameters
interface Product {
  name: string;
  price: number;
  applyDiscound(discount: number): number;
}
const shoes: Product = {
  name: "Blue shoes",
  price: 100,
  applyDiscound(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return newPrice;
  },
};

// reopen and add new properties to interface after we've already discribe interfaces
interface Name {
  first: string;
}
interface Name {
  last: string;
}
const person: Name = { first: "misco", last: "crris" };

// extend interface / inherit from another interface
interface Animal {
  name: string;
  age: number;
}
interface Dog extends Animal {
  breed: string;
}

const poppy: Dog = {
  name: "isc",
  age: 2,
  breed: "Poppy",
};

// interface mulitple inheritance
interface People {
  name: string;
}
interface Employee {
  readonly id: number;
  email: string;
}
interface Engineer extends People, Employee {
  level: string;
  skill: string[];
}

const tonny: Engineer = {
  name: "tonny",
  id: 12344,
  email: "tonny@work.com",
  level: "junor",
  skill: ["typescript", "javascript"],
};

// Interface vs type alias
