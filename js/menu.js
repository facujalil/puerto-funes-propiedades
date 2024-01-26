/*Active menu*/

const currentLocation = location.href;
const menuItem = document.querySelectorAll(".menu-items li a");
const menuLength = menuItem.length;

for (let i = 1; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active";
  }
}

/*Hamburger menu*/

const hamburgerMenu = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");
const menuItems = document.querySelector(".menu-items");
const bars = document.querySelectorAll(".hamburger-menu .bar");

hamburgerMenu.addEventListener("click", () => {
  window.scrollTo(0, 0);
  body.style.overflowY === ""
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "");
  menuItems.classList.toggle("activated");
  bars.forEach((child) => {
    child.classList.toggle("animated");
  });
});
