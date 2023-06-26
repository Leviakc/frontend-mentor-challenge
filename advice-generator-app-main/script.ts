const adviceNumber = document.querySelector(".advice__number") as HTMLElement;
const generateAdvice = document.querySelector(".btn") as HTMLElement;
const adviceText = document.querySelector(".advice__text") as HTMLButtonElement;

const API_URL = "https://api.adviceslip.com/advice/";
const SLIP_COUNT = 224;

const getRandomAdvice = async () => {
  const slip_id = Math.round(Math.random() * SLIP_COUNT + 1);
  const res = await fetch(`${API_URL}${slip_id}`);

  const {
    slip: { id, advice },
  } = await res.json();

  adviceNumber!.textContent = `#${id}`;
  adviceText!.textContent = `"${advice}"`;
};

document.addEventListener("DOMContentLoaded", getRandomAdvice);

generateAdvice.addEventListener("click", getRandomAdvice);
