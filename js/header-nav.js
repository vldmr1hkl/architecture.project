document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".header__nav-list");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll(".nav-list__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("show");
  }));
});


