document.addEventListener("partialsLoaded", async () => {
    
    async function fetchData() {
        const response = await fetch('api/services.json');
        return await response.json();
    }
    const services = await fetchData();

    const urlParams = new URLSearchParams(window.location.search);
            const serviceId = urlParams.get('id');

            const selectedService = services.find(service => service.id === parseInt(serviceId));

            if (selectedService) {
                document.querySelector('.service-hero__title h1').textContent = selectedService.name;
                document.querySelector('.service-hero__title p').textContent = selectedService.description;
                document.getElementById('aboutService').textContent = selectedService.aboutService;
                document.getElementById('whatServiceIncluded').textContent = selectedService.whatServiceIncluded;
            
                const serviceImage = document.querySelector('.service-hero__img-wrapper');
                serviceImage.innerHTML = `<img id="zoomImage" src="img/${selectedService.img}" alt="${selectedService.name}">`;

                
                const ulElement = document.getElementById('additionalInfo');
                selectedService.additionalInfo.forEach(info => {
                    const liElement = document.createElement('li');
                    liElement.textContent = info;
                    ulElement.appendChild(liElement);
                  });


            } else {
                console.error('Service not found');
    }
    const zoomImage = document.getElementById('zoomImage');
    document.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const scale = 1 + scrollY * 0.00005;
    
        zoomImage.style.transform = `scale(${scale})`;
    });
});