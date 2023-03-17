class Player {
  // add value which is hard code to init
  score = 0;
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
}

const player1 = new Player("x", "y");
