/* import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  buttonStart: document.querySelector('[data-start]'),
  showDays: document.querySelector('[data-days]'),
  showHours: document.querySelector('[data-hours]'),
  showMinutes: document.querySelector('[data-minutes]'),
  showSeconds: document.querySelector('[data-seconds]')
}

class Timer {
  constructor()

  this.enableTime: true,
  this.time_24hr: true,
  this.defaultDate: new Date(),
  this.minuteIncrement: 1,
  this.dateFormat: "Y-m-d H:i",
} 

const options = {
  

    onClose(selectedDates) {
     const nowDate = new Date();
      const selectedDate = selectedDates[0];
      const deltaTime = selectedDate - nowDate;

      if (deltaTime <= 0) {
        buttonStart.disabled = true;
        alert("Please choose a date in the future");
      } else {
        buttonStart.disabled = false;
      };
  }
    
};

const fp = flatpickr("#datetime-picker", options);

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

buttonStart.addEventListener('click', () => {
    
    startTimer(fp.selectedDates[0]); 
});

function startTimer(selectedDate) {
      const intervalId = setInterval(() => {
        const nowDate = new Date();
        const deltaTime = selectedDate - nowDate;
        const showTime = convertMs(deltaTime);
        insrtHtml(showTime);
    }, 1000);
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
 */

