const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timeoutId = null;
let startBtnIsActive = true;

start.addEventListener('click', () => {
    if (startBtnIsActive) {

  timeoutId = setInterval(() => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  startBtnIsActive = false;
}, 1000);
   return;
}
});

stop.addEventListener('click', () => {
clearInterval(timeoutId)
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


