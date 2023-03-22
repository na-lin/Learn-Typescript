"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
    const { data } = res;
    // console.log(data);
    printPost(data[0]);
})
    .catch((e) => {
    console.log(e);
});
function printPost(post) {
    console.log(post.title);
    console.log(post.body);
}
