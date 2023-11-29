document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const bgLines = document.querySelector(".bg-lines");
        bgLines.style.opacity = "1";
        const page = document.querySelector("main")
        page.classList.add("opacity");
    }, 650);
});
