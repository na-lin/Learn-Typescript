// type alias
// type Point = {
//   x: number;
//   y: number;
// };
// const pt: Point = { x: 12, y: 23 };
var pt = { x: 123, y: 123 };
var shoes = {
    name: "Blue shoes",
    price: 100,
    applyDiscound: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return newPrice;
    }
};
var person = { first: "misco", last: "crris" };
var poppy = {
    name: "isc",
    age: 2,
    breed: "Poppy"
};
var tonny = {
    name: "tonny",
    id: 12344,
    email: "tonny@work.com",
    level: "junor",
    skill: ["typescript", "javascript"]
};
// Interface vs type alias
