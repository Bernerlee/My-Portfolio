"use strict";
const header = document.querySelectorAll(".stylist--section");
console.log(header);

const displayStylists = function (entries, obeserver) {
  const [entry] = entries;
  //console.log(entry);
};

const headerObserver = new IntersectionObserver(displayStylists, {
  root: null,
  threshold: 0.1,
});

header.forEach((head) => {
  headerObserver.observe(head);
  head.classList.add(".section--hidden");
});
