//Бургер меню
let containers = document.querySelector(".containers");
let header__menu = document.querySelector(".header__menu");
containers.addEventListener("click", () => {
  containers.classList.toggle("change");
  header__menu.classList.toggle("active");
});

let header__link = document.querySelectorAll(".header__link");
header__link.forEach((link) => {
  link.addEventListener("click", () => {
    containers.classList.remove("change");
    header__menu.classList.remove("active");
  });
});