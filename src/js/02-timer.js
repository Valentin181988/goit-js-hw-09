import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonStart = document.querySelector('[data-start]');
const showDays = document.querySelector('[data-days]');
const showHours = document.querySelector('[data-hours]');
const showMinutes = document.querySelector('[data-minutes]');
const showSeconds = document.querySelector('[data-seconds]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    dateFormat: "Y-m-d H:i",

    onClose(selectedDates) {
     const nowDate = new Date();
      const selectedDate = selectedDates[0];
      const deltaTime = selectedDate - nowDate;

      if (deltaTime <= 0) {
        buttonStart.disabled = true;
        Notify.warning("Please choose a date in the future");
      } else {
        buttonStart.disabled = false;
      };
  }
    
};

const fp = flatpickr("#datetime-picker", options);

buttonStart.addEventListener('click', () => {
    
    startTimer(fp.selectedDates[0]); 
});

let check = true;

function startTimer(selectedDate) {
  if (check) {
        const intervalId = setInterval(() => {
        const nowDate = new Date();
        const deltaTime = selectedDate - nowDate;
        const showTime = convertMs(deltaTime);
        insrtHtml(showTime);
        }, 1000);
    check = false;
  }
      
}

function insrtHtml({ days, hours, minutes, seconds }) {
  
  showDays.textContent = `${days}`;
  showHours.textContent = `${hours}`;
  showMinutes.textContent = `${minutes}`;
  showSeconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}
