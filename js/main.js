const chooseColor = document.querySelectorAll(".choise-color__btn");
const contentItem = document.querySelectorAll(".content-item");

chooseColor.forEach((item) => item.addEventListener("click", open));

function open(event) {
  const target = event.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach((item) => item.classList.remove("choise-color__btn--active"));
  target.classList.add("choise-color__btn--active");

  contentItem.forEach((item) => item.classList.remove("content-item__active"));
  contentActive.forEach((item) => item.classList.add("content-item__active"));
}
