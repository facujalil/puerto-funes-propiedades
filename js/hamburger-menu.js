const hamburgerMenuButton = document.querySelector(".hamburger-menu-button");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const bars = document.querySelectorAll(".bar");

hamburgerMenuButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
  body.style.overflowY === ""
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "");
  nav.classList.toggle("open");
  bars.forEach((bar) => {
    bar.classList.toggle("animated");
  });
});
