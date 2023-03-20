"use strict";
// const nums: number[] = []
const nums = [];
const colors = []; // name of interface + <T some type>
// querySelector will return something with this type
const inputEl = document.querySelector("#username");
inputEl.value = "Hacked!";
console.log(inputEl);
const btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
// no relationship between input and output
function badIdentity(item) {
    return item;
}
// Generic,
function identity(item) {
    return item;
}
const result = identity(1);
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
getRandomElement([1, 2]);
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const comboObj = merge({ name: "john" }, { pets: ["blue", "colt"] });
merge({ name: "john" }, 0);
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("123");
const x = printDoubleLength(1);
function makeEmptyArray() {
    return [];
}
const emptyNums = makeEmptyArray();
