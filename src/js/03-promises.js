import Notiflix from 'notiflix';

const startDelay = document.querySelector('[name="delay"]');
const stepDelay = document.querySelector('[name="step"]');
const amountPromises = document.querySelector('[name="amount"]');
const createPromisesBtn = document.querySelector('[type="submit"]');

let counter = 1;
let delayInc = Number(startDelay.value);
let inter = "";

function createPromise(position, delay) {
  const counterContener = {
    position: position,
    delay: delay,
  };
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay } = counterContener);
      } else {
        reject({ position, delay } = counterContener);
      }
      counter++;
      delayInc += Number(stepDelay.value);
      if (counter == Number(amountPromises.value) + 1) {
        clearInterval(inter);
        counter = 1;
      }
    });
};

createPromisesBtn.addEventListener('click', e => {
  e.preventDefault();
  delayInc = Number(startDelay.value);
  clearInterval(inter);
  setTimeout(() => {
    inter = setInterval(() => {
    createPromise(counter, delayInc)
      .then(({ position, delay }) => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  })
      .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  });
}, stepDelay.value)
  }, startDelay.value)
});