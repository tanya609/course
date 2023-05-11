//Кнопка слайдера
let promo__button = document.querySelector(".promo__button");
let main_slider = document.querySelector(".main_slider");
promo__button.addEventListener("click", () => {
  main_slider.classList.add("active");
});

let close_btn = document.querySelector(".close_btn");
close_btn.addEventListener("click", () => {
  main_slider.classList.remove("active");
});
