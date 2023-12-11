document.addEventListener("partialsLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".header__nav-list");
  const body = document.querySelector("body");
  const darkModeButton = document.getElementById('dark-mode-button');
  const lightModeButton = document.getElementById('light-mode-button');

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

  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeButton.style.display = 'none';
    lightModeButton.style.display = 'block';
  } else {
    body.classList.remove('dark-mode');
    lightModeButton.style.display = 'none';
    darkModeButton.style.display = 'block';
  }

  darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeButton.style.display = 'none';
    lightModeButton.style.display = 'block';

    localStorage.setItem('darkMode', 'true');
  });

  lightModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    lightModeButton.style.display = 'none';
    darkModeButton.style.display = 'block';
    
    localStorage.setItem('darkMode', 'false');
  });
});


