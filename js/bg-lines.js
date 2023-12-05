
document.addEventListener("partialsLoaded", () => {
    setTimeout(function() {
        if (window.innerWidth >= 768) {
            const bgLines = document.querySelector(".bg-lines");
        
            bgLines.style.display = "block";
            bgLines.style.opacity = "1";
            
            const page = document.querySelector("main");
            page.classList.add("opacity");
        }
    }, 650);

    function reloadPage() {
        window.location.reload();
    }
    window.addEventListener("resize", function() {
        if (window.innerWidth >= 768 && window.innerWidth < 992) {
            reloadPage();
        }
    });
});