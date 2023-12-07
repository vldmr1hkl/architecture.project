document.addEventListener("partialsLoaded", async () => {
    
    async function fetchData() {
        const response = await fetch('api/services.json');
        return await response.json();
    }
    const services = await fetchData()

    const servicesContainer = document.getElementById('serviceCardsContainer');
  
    function displayServise(array) {
        servicesContainer.innerHTML = "";
  
        array.forEach(service => {
            const serviceDiv = document.createElement('div');
  
                serviceDiv.innerHTML = `
                <a href="service-single.html?id=${service.id}" class="service-card card-link slick-slide">
                        <div class="service-card-img image-container">
                            <img class="img-fluid" src="img/${service.img}" alt="${service.img}">
                        </div>
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                        <p class="border-link">View services</p>
                    </a>
                `;
  
            servicesContainer.appendChild(serviceDiv);
        });
    }
  
    displayServise(services);

    $(function(){
        $('.slick-slider').slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
      });
});  