const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timeoutId = null;

start.addEventListener('click', () => {

     timeoutId = setInterval(() => {
     const newColor = getRandomHexColor();
     body.style.backgroundColor = newColor;
}, 1000);
});

stop.addEventListener('click', () => {
clearInterval(timeoutId)
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


