"use strict";
const Stylists = document.querySelectorAll(".stylist--section");
const hamburger = document.querySelector(".container--hamburger");
const sideBarMenu = document.querySelector(".sidebar_menu");
const realBody = document.querySelector(".real_body");
const cta = document.querySelector(".cta");
const logo = document.querySelector(".logo");

const displayStylists = function (entries, obeserver) {
  //const [entry] = entries;
  //console.log(entry);
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    // if (entry.isIntersecting) {
    //   entry.target.classList.remove("section--hidden");
    // }
    // } else if (!entry.isIntersecting) {
    //   entry.target.classList.add("section--hidden");
    // }
    obeserver.unobserve(entry.target);
  });
};

const headerObserver = new IntersectionObserver(displayStylists, {
  root: null,
  threshold: 0.1,
});

Stylists.forEach((sty) => {
  headerObserver.observe(sty);
  sty.classList.add("section--hidden");
});

const hamburgerFunc = function () {
  hamburger.classList.toggle("change");
  realBody.classList.toggle("changedstyles");
  cta.classList.toggle("section--hidden");
  logo.classList.toggle("section--hidden");
  //sideBarMenu.style.left = `-${280}px`;
  // realBody.style.width = `${100}%`;
  // realBody.style.left = `${43}px`;
};
hamburger.addEventListener("click", hamburgerFunc);
