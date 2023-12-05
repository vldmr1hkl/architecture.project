document.addEventListener("partialsLoaded", () => {
    const accordionButtons = document.querySelectorAll(".accordion__btn");

    accordionButtons.forEach(function (plusminusBtn) {
        plusminusBtn.addEventListener('click', function () {
            plusminusBtn.classList.toggle('active');

            const accordionItem = plusminusBtn.closest('.accordion__content-item');
            const accordionAnswer = accordionItem.querySelector('.accordion__content-answer');

            if (accordionAnswer) {
                accordionAnswer.classList.toggle('active');
            }
        });
    });
});
