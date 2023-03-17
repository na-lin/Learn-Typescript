"use strict";
class Player {
    // !Parameter 'first' implicitly has an 'any' type.
    // !Property 'first' does not exist on type 'Player'. -> need to tell the type of first before assign
    constructor(first, last) {
        // public field
        this.score = 0;
        this.first = first;
        this.last = last;
    }
}
const player1 = new Player("john", "excel");
player1.first = "12";
