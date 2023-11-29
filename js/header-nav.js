document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".header__nav-list");
  const body = document.querySelector("body");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll(".nav-list__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    body.classList.remove("overflow-hidden");
    navMenu.classList.remove("show");
  }));


  const darkModeButton = document.getElementById('dark-mode-button');
  const lightModeButton = document.getElementById('light-mode-button');
  const captionDarkMode = document.querySelectorAll('.section-wrapper');
  const headerElement = document.querySelector('header');
  const logoDarkMode = headerElement.querySelector('img');
  const valuesCardsDarkMode = document.querySelectorAll('.values__card');

    darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode-bg");
    darkModeButton.style.display = 'none';
    lightModeButton.style.display = 'block';

    valuesCardsDarkMode.forEach((valueCardDarkMode) => {
      valueCardDarkMode.classList.toggle("dark-mode-values-card");
    });
    
      logoDarkMode.style.filter = 'invert(1)';

      if (captionDarkMode.length === 1) {
        captionDarkMode[0].classList.toggle("dark-mode-caption");
      } else {
        captionDarkMode.forEach(element => {
          element.classList.toggle("dark-mode-caption");
        });
      }
    });

    lightModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode-bg");
    lightModeButton.style.display = 'none';
    darkModeButton.style.display = 'block';
    logoDarkMode.style.filter = 'invert(0)';

      captionDarkMode.forEach(element => {
      element.classList.remove("dark-mode-caption");
    });
  });
});


