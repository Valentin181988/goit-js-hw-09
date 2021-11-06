import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const form = document.querySelector(".form");

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const amountValue = parseInt(amountInput.value);
  const firstDelay =  parseInt(delayInput.value);
  const delay = parseInt(stepInput.value);
  let promiseDelay = delay + firstDelay;

  for (let i = 1; i <= amountValue; i++) {

    if (i !== 1) {
      promiseDelay += delay;
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
    const args = { position: position, delay: delay };
    const shouldResolve = Math.random() > 0.3;
    
    if (shouldResolve) {
      setTimeout(() => {
        resolve(args);
      }, delay);
    } else {
       setTimeout(() => {
        reject(args);
      }, delay);
    }
  });
}




