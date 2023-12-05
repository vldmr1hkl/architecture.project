document.addEventListener("partialsLoaded", () => {
    const darkButtons = document.querySelectorAll("a.dark-button");
    darkButtons.forEach(function(button) {
        button.href = "contact.html";
    });
});