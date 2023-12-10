document.addEventListener("partialsLoaded", () => {

    const form = document.getElementById('contactForm');
    let formData = {};

    function validateForm() {
        

        function validateField(inputId, errorId, validationRegex, requiredMessage, errorMessage) {
            const input = document.getElementById(inputId);
            const error = document.getElementById(errorId);
            const inputValue = input.value.trim();

            if (inputValue === '') {
                error.textContent = requiredMessage;
                formData = {}; // Очищаємо об'єкт, оскільки не всі поля заповнені
                return false;
            } else if (input.type === 'select' && inputValue === '') {
                error.textContent = requiredMessage;
                formData = {}; // Очищаємо об'єкт, оскільки не всі поля заповнені
                return false;
            } else if (!validationRegex.test(inputValue)) {
                error.textContent = errorMessage;
                formData = {}; // Очищаємо об'єкт, оскільки дані не валідні
                return false;
            } else {
                error.textContent = '';
                formData[input.name] = inputValue; // Додаємо дані у об'єкт
                return true;
            }
        }

        // Перевірка імені
        const isNameValid = validateField('nameInput', 'nameError', /^[a-zA-Z]+ [a-zA-Z]+$/, 'Please enter a name','Please enter a valid full name, eg "John Carter"');


        // Перевірка електронної пошти
        const isEmailValid = validateField('emailInput', 'emailError', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please fill in the field', 'Please enter a valid email address, eg. "email@example.com');

        // Валідуємо отримане форматоване значення телефонного номеру
        const isPhoneValid = validateField('phoneInput', 'phoneError', /^\(\d{3}\)-\d{3} \d{4}$/,'Please enter a phone number', 'Please enter a valid phone number, eg. (123)-456 7890');


        // Перевірка теми
        const isSubjectValid = validateField('subjectInput', 'subjectError', /.+/,'Please select a service.');

        // Перевірка повідомлення
        const isMessageValid = validateField('messageInput', 'messageError', /.+/, 'Please enter a message.');

        return isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formSendMessage = document.getElementById('successfullySend');

        if (validateForm()) {
            console.log('Form data:', formData);
            formSendMessage.innerHTML = `Thank you ${formData.name}!<br>Your message has been successfully sent. We will contact you very soon!`;
            // Очистити форму після успішної відправки
            form.reset();
        } else {
            // Якщо дані не валідні, знищити попереднє повідомлення про успішну відправку
            formSendMessage.innerHTML = '';
        }
    });
});