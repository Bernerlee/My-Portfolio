const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

const mobileHamburger = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

mobileHamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("inactive");
});

// const pricingCards = document.querySelector(".price-card");

// const hasHighlighted = pricingCards.querySelector(".highlighted");

// pricingCards.addEventListener("click", function (e) {
//   hasHighlighted.classList.remove("highlighted");

//   e.target.classList.add("highlighted");

//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// const priceCards = document.querySelectorAll(".price-card");
// const btnPrimary = document.querySelector(".price-btn");

// btnPrimary.addEventListener("click", function (e) {
//   priceCards.classList.toggle(".highlighted");
//   console.log("CLICKEEEED");
// });
