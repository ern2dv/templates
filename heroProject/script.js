const openBtn = document.querySelector(".open-nav");
const closeBtn = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");

closeBtn.addEventListener("click", () => {
  nav.classList.remove("nav-open");
});
openBtn.addEventListener("click", () => {
  nav.classList.add("nav-open");
});
