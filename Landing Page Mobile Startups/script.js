// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

toggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

// Pricing toggle
const billingToggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

billingToggle.addEventListener("change", () => {
  prices.forEach((price) => {
    price.textContent = billingToggle.checked
      ? `$${price.dataset.yearly}`
      : `$${price.dataset.monthly}`;
  });
});

// Contact form
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks! We'll get back to you within 24 hours.");
  e.target.reset();
});
