document.addEventListener("partialsLoaded", () => {
    const form = document.querySelector('.contact-form-container');
    const submitButton = form.querySelector('.contact-form-button a');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const phone = form.querySelector('input[name="phone"]').value;
        const subject = form.querySelector('input[name="subject"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (!name || !email || !phone || !subject || !message) {
            alert('Please fill in all fields of the form.');
            return; 
        }


        alert('The form is correct. Now you can send it.');
    });
});