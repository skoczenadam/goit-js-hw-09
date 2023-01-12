function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let colorSwitch = null;
stopBtn.classList.add("btnOff");

const btnToggle = () => {
    stopBtn.classList.toggle("btnOff");
    startBtn.classList.toggle("btnOff");
}

const randomColor = () => {
    document.body.style.backgroundColor = getRandomHexColor();
}

const startBodyColorSwitch = () => {
    randomColor();
    colorSwitch = setInterval(randomColor, 1000);
    startBtn.removeEventListener("click", startBodyColorSwitch);
    stopBtn.addEventListener("click", stopBodyColorSwitch);
    btnToggle();
};

const stopBodyColorSwitch = () => {
    clearInterval(colorSwitch);
    startBtn.addEventListener("click", startBodyColorSwitch);
    stopBtn.removeEventListener("click", stopBodyColorSwitch);
    btnToggle();
};

startBtn.addEventListener("click", startBodyColorSwitch);