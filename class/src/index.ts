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
    private score: number = 0
  ) {}

  private secret(): void {
    console.log("secret");
  }
}

const player1 = new Player("john", "excel");
console.log(player1);
