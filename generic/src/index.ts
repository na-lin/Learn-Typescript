// const nums: number[] = []
const nums: Array<number> = [];
const colors: Array<string> = []; // name of interface + <T some type>

// querySelector will return something with this type
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
inputEl.value = "Hacked!";
console.log(inputEl);

const btn = document.querySelector<HTMLButtonElement>(".btn");

function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}

// no relationship between input and output
function badIdentity(item: any): any {
  return item;
}

// Generic,
function identity<T>(item: T): T {
  return item;
}
const result = identity<number>(1);

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

getRandomElement([1, 2]);

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

const comboObj = merge({ name: "john" }, { pets: ["blue", "colt"] });
merge({ name: "john" }, 0);

interface Lengthy {
  length: number;
}
function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

printDoubleLength("123");
const x = printDoubleLength(1);

function makeEmptyArray<T = number>(): T[] {
  return [];
}
const emptyNums = makeEmptyArray();

interface Video {
  title: string;
  creator: string;
}
interface Song {
  title: string;
  songer: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
songs.add({ title: "a", songer: "b" });
