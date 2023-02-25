// array types
const users: string[] = [];
users.push("miso");
users.push(12);

const names: Array<string> = ["misco"];

type Point = {
  x: number;
  y: number;
};
const pos: Point[] = [];
pos.push({ x: 12, y: 2 });
pos.push({ y: 2 });

// multidimensonal arrays, eg: [["X","O"]]
const river: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

// exercies
const ages: number[] = [];
const gameBoard: string[][] = [];
type Product = {
  name: string;
  price: number;
};
const getTotal = (products: Product[]): number => {
  return products.reduce((acc, curr) => acc + curr.price, 0);
};
