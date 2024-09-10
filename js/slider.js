const slider = document.getElementById("slider");

const sliderLeftButton = document.querySelector(".slider-left-button");
const sliderRightButton = document.querySelector(".slider-right-button");

let sliderItems = document.querySelectorAll(".slider-item");
let lastSliderItem = sliderItems[sliderItems.length - 1];

let interval;

slider.insertAdjacentElement("afterbegin", lastSliderItem);

sliderLeftButton.addEventListener("click", () => {
  clearInterval(interval);
  previous();
  interval = setInterval(next, 5000);
});

sliderRightButton.addEventListener("click", () => {
  clearInterval(interval);
  next();
  interval = setInterval(next, 5000);
});

const previous = () => {
  sliderItems = document.querySelectorAll(".slider-item");
  lastSliderItem = sliderItems[sliderItems.length - 1];
  slider.style.marginLeft = "0%";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", lastSliderItem);
    slider.style.marginLeft = "-100%";
  }, 500);
};

const next = () => {
  sliderItems = document.querySelectorAll(".slider-item");
  const firstSliderItem = sliderItems[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", firstSliderItem);
    slider.style.marginLeft = "-100%";
  }, 500);
};

interval = setInterval(next, 5000);
