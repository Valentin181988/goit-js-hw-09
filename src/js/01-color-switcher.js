const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timeoutId = null;

stop.disabled = true;
stop.classList.add('js-opacity');

start.addEventListener('click', () => {
  start.disabled = true;
  start.classList.toggle('js-opacity');

  stop.disabled = false;
  stop.classList.toggle('js-opacity');

  timeoutId = setInterval(() => {
     const newColor = getRandomHexColor();
     body.style.backgroundColor = newColor;
  }, 1000);
});

stop.addEventListener('click', () => {
  start.disabled = false;
  start.classList.toggle('js-opacity');

  stop.disabled = true;
  stop.classList.toggle('js-opacity');
  
  clearInterval(timeoutId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


