// class Player {
//   // this class has properties with this type
//   public readonly first: string; //!Cannot assign to 'first' because it is a read-only property
//   public readonly last: string;
//   // public field
//   private score: number = 0;

//   // !Parameter 'first' implicitly has an 'any' type.
//   // !Property 'first' does not exist on type 'Player'. -> need to tell the type of first before assign
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   private secret(): void {
//     console.log("secret");
//   }
// }

class Player {
  // private score: number = 0;

  constructor(
    public first: string,
    public last: string,
    protected _score: number = 0
  ) {}

  private secret(): void {
    console.log("secret");
  }

  // default is read-only
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("score > 0");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  isAdmin = true;
  maxScore() {
    this._score = 9999;
  }
}

const player1 = new Player("john", "excel");
console.log(player1);
console.log(player1.fullName);
player1.fullName = "12";

interface Colorful {
  color: string;
}

interface Printable {
  printful(): void; // method return void
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  printful(): void {
    console.log(this.color);
  }
}

const bike1 = new Bike("blue");
const jacket1 = new Jacket("Pade", "red");

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
}

class FulltimeEmployee extends Employee {
  constructor(first: string, last: string, public salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}
