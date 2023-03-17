class Player {
  // this class has properties with this type
  first: string;
  last: string;
  // Parameter 'first' implicitly has an 'any' type.
  // Property 'first' does not exist on type 'Player'. -> need to tell the type of first before assign
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const player1 = new Player("john", "excel");
