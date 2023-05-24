// Cat slider

const slider = document.querySelector('.slider');
const before = slider.querySelector('.slider__before');
const beforeImage = before.querySelector('img');
const changeBar = slider.querySelector('.slider__change-bar');
const sliderContainer = document.querySelector('.case__illustration');

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  changeBar.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

sliderContainer.addEventListener('mousedown', () => {
  isActive = true;
});

sliderContainer.addEventListener('mouseup', () => {
  isActive = false;
});

sliderContainer.addEventListener('mouseleave', () => {
  isActive = false;
});

sliderContainer.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

sliderContainer.addEventListener('touchstart', () => {
  isActive = true;
});

sliderContainer.addEventListener('touchend', () => {
  isActive = false;
});

sliderContainer.addEventListener('touchcancel', () => {
  isActive = false;
});

sliderContainer.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return;
  }

  let x;
  let i;

  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});
