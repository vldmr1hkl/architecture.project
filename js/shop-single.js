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
                document.querySelector('.shop-single-info h3').textContent = selectedService.name;
                document.querySelector('.shop-single-info p').textContent = `$${selectedService.price} USD`;
                const serviceImage = document.querySelector('.shop-card-img-wrapper');
                serviceImage.innerHTML = `<img src="img/${selectedService.img}" alt="${selectedService.name}">`;

                



            } else {
                console.error('Service not found');
    }
});