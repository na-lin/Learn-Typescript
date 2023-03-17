class Player {
  // staic
  static description = "player in our game";

  static randomPlayer() {
    return new Player("anne", "chen");
  }

  // public field,  add value which is hard code to init
  #score = 0;
  numLives = 10;

  // dynamic init value
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  taught() {
    console.log("hello");
  }

  // public fields
  loseLive() {
    this.numLives -= 1;
  }

  // access and update private field
  getScore() {
    return this.#score;
  }
  setScore(newScore) {
    this.#score = newScore;
  }
  // private method
  #secret() {
    console.log("this is secret inside class");
  }

  // getter
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  get score() {
    return this.#score;
  }

  //setter
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive number");
    }
    this.#score = newScore;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, power) {
    super(first, last);
    this.power = power;
  }
}

const player1 = new Player("x", "y");
// console.log(player1.#score);
console.log(player1.getScore());
console.log(player1.fullName);
console.log(player1.score);
player1.score = 12;
console.log(player1.score);

const ps = Player.randomPlayer();
console.log(ps);

const admin1 = new AdminPlayer("a", "v", [12]);
console.log(admin1);
