// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";

const inputBtn = document.querySelector("[data-start]");
const timeDays = document.querySelector("[data-days]");
const timeHours = document.querySelector("[data-hours]");
const timeMinutes = document.querySelector("[data-minutes]");
const timeSeconds = document.querySelector("[data-seconds]");

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

let chosedDate;
let timeLeft;
let dataTimer;
inputBtn.classList.add("btnOff");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      chosedDate = selectedDates[0];
      timeLeft = chosedDate.getTime() - new Date().getTime()
      if (timeLeft < 0) {
          window.alert("Please choose a date in the future");
          inputBtn.classList.add("btnOff");
          inputBtn.removeEventListener("click", timer);
          clearInterval(dataTimer);
      } else {
          inputBtn.classList.remove("btnOff");
          inputBtn.addEventListener("click", timer);
      }
  },
};

const timer = () => {
    const timerFunction = () => {
        timeLeft = chosedDate.getTime() - new Date().getTime();
        timeDays.textContent = convertMs(timeLeft).days;
        timeHours.textContent = convertMs(timeLeft).hours;
        timeMinutes.textContent = convertMs(timeLeft).minutes;
        timeSeconds.textContent = convertMs(timeLeft).seconds;
        if (convertMs(timeLeft).seconds == 0) clearInterval(dataTimer);
    }
    timerFunction();
    dataTimer = setInterval(timerFunction, 1000);
}

flatpickr("#datetime-picker", options);