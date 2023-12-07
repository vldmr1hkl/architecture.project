document.addEventListener("partialsLoaded", async () => {
    
  async function fetchData() {
      const response = await fetch('api/services.json');
      return await response.json();
  }
  const services = await fetchData()
  
  const servicesContainer = document.getElementById('serviceCarsContainer');
  
  function displayServise(array) {
    servicesContainer.innerHTML = "";
  
    array.forEach(service => {
      const serviceDiv = document.createElement('div');
  
      serviceDiv.innerHTML = `
        <a href="service-single.html?id=${service.id}" class="service-card card-link">
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
});