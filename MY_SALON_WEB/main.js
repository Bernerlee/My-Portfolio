"use strict";
// const header = document.querySelectorAll(".stylist--section");
// console.log(header);

// const displayStylists = function (entries, obeserver) {
//   const [entry] = entries;
//   //console.log(entry);
// };

// const headerObserver = new IntersectionObserver(displayStylists, {
//   root: null,
//   threshold: 0.1,
// });

// header.forEach((head) => {
//   headerObserver.observe(head);
//   head.classList.add(".section--hidden");
// });

// setTimeout(() => console.log("Love you"), 0);
// const testing = new Promise((resolve, reject) => {
//   resolve("Value has been resolved");
// }).then((res) => console.log(res));

// setTimeout(() => console.log("Love you"), 0);
// const testing = fetch("https://dog.ceo/api/breeds/image/random");
// testing.then((res) => console.log(res));

const colors = ["red", "blue", ["green", "purple"]];
const [red, blue, [x, y]] = colors;

console.log(x);
console.log(y);
