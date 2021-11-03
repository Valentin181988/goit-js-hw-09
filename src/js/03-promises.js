import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const form = document.querySelector(".form");

form.addEventListener('submit', (evt) => {
  const amountValue = amountInput.value;
  const firstDelay = delayInput.value;
  const delay = stepInput.value;

  evt.preventDefault();

  for (let i = 1; i <= amountValue; i++) {
    let promiseDelay = delay;

    if (i === 1) {
      promiseDelay += firstDelay;
    }

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(position, delay);
    } else {
      reject(position, delay);
    }
  });
}




