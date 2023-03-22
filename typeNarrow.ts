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

// in operator
// type Cat = {
//   meow: () => void;
// };
// type Dog = {
//   bark: () => void;
// };
// const talk = (creature: Cat | Dog) => {
//   if ("meow" in creature) {
//     console.log(creature.meow());
//   } else {
//     console.log(creature.bark());
//   }
// };

// instandof
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}
function printName(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity);
  } else {
    console.log(entity);
  }
}

// type predicates
interface Cat {
  name: string;
  numsLives: number;
}
interface Dog {
  name: string;
  breed: string;
}
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numsLives !== undefined;
}
function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return "meow";
  } else {
    animal;
    return "bark";
  }
}

// discriminated unions
interface Rooster {
  kind: "rooster";
  name: string;
  weight: number;
  age: number;
}
interface Cow {
  kind: "cow";
  name: string;
  weight: number;
  age: number;
}
interface Pig {
  kind: "pig";
  name: string;
  weight: number;
  age: number;
}
type FarmAnimal = Pig | Rooster | Cow;
function getFarmAnimal(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      animal;
      return "Orik";
    case "cow":
      return "Mooo";
    case "rooster":
      return "Cock";
  }
}

const steve: Rooster = {
  name: "Stevie",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};
