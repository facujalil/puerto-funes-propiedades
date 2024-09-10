const slider = document.getElementById("slider");
const sliderItem = document.querySelectorAll(".slider-item");
const lastSliderItem = sliderItem[sliderItem.length - 1];

const sliderLeftButton = document.querySelector(".slider-left-button");
const sliderRightButton = document.querySelector(".slider-right-button");

let interval;

slider.insertAdjacentElement("afterbegin", lastSliderItem);

const previous = () => {
  const sliderItem = document.querySelectorAll(".slider-item");
  const lastSliderItem = sliderItem[sliderItem.length - 1];
  slider.style.marginLeft = "0%";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", lastSliderItem);
    slider.style.marginLeft = "-100%";
  }, 500);
};

const next = () => {
  const firstSliderItem = document.querySelectorAll(".slider-item")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", firstSliderItem);
    slider.style.marginLeft = "-100%";
  }, 500);
};

interval = setInterval(next, 5000);

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
