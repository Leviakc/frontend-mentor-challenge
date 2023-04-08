const cardForm = document.querySelector<HTMLElement>(".card__form")!;
const cardFormSent = document.querySelector<HTMLElement>(".card__form-send")!;

const btns = document.querySelector<HTMLElement>(".card__btns")!;
const btnsClassCheck = btns.querySelectorAll<HTMLElement>(".btn");
const btnSubmit = document.querySelector<HTMLElement>(".btn-submit")!;

const spanValue = document.querySelector<HTMLElement>(".card__value-selected")!;
const loader = document.querySelector<HTMLElement>(".loader");

let formValue = "";

const removeActiveClass = () => {
  btnsClassCheck.forEach((childEl) => {
    if (childEl.classList.contains("btn-active")) {
      childEl.classList.remove("btn-active");
    }
  });
};

const markValue = (e: Event) => {
  const checkValue = e.target as HTMLElement;

  if (!checkValue.classList.contains("btn")) return;

  if (checkValue.classList.contains("btn-active")) {
    checkValue.classList.remove("btn-active");
    formValue = "";
  } else {
    removeActiveClass();
    checkValue.classList.add("btn-active");
    formValue = checkValue.dataset.value!;
  }
};

//Event delegation
btns.addEventListener("click", markValue);

btnSubmit.addEventListener("click", () => {
  if (!formValue) return;

  spanValue!.textContent = formValue;
  loader?.classList.remove("hide-loader");
  cardForm.classList.add("hidden");

  setTimeout(() => {
    loader?.classList.add("hide-loader");
    cardFormSent.classList.remove("hidden");
  }, 1500);
});
