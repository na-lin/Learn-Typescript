import axios from "axios";
// https://jsonplaceholder.typicode.com/posts
// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// {
//   userId: 10,
//   id: 100,
//   title: 'at nam consequatur ea labore ea harum',
//   body: 'cupiditate quo est a modi nesciunt soluta\n' +
//     'ipsa voluptas error itaque dicta in\n' +
//     'autem qui minus magnam et distinctio eum\n' +
//     'accusamus ratione error aut'
// }

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

axios
  .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    const { data } = res;
    // console.log(data);
    printPost(data[0]);
  })
  .catch((e) => {
    console.log(e);
  });

function printPost(post: Post) {
  console.log(post.title);
  console.log(post.body);
}

// install type separately
import _ from "lodash"; // Could not find a declaration file for module 'lodash'.
