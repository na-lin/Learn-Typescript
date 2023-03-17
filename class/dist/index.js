class Player {
  // add value which is hard code to init
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
  loseLive() {
    this.numLives -= 1;
  }
  getScore() {
    return this.#score;
  }
  setScore(newScore) {
    this.#score = newScore;
  }

  #secret() {
    console.log("this is secret inside class");
  }
}

const player1 = new Player("x", "y");
// console.log(player1.#score);
console.log(player1.getScore());
