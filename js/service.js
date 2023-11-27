const services = [
    {
      name: "Architectural Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem repellat ullam cupiditate nam, earum in aliquam odio mollitia consequatur rerum doloribus voluptatibus sit voluptates fuga totam vitae similique unde?",
      img: "architecture-design.jpeg",
    },
    {
      name: "interior Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem repellat ullam cupiditate nam, earum in aliquam odio mollitia consequatur rerum doloribus voluptatibus sit voluptates fuga totam vitae similique unde?",
      img: "interior-design.jpeg",
    },
    {
      name: "Space Planning",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem repellat ullam cupiditate nam, earum in aliquam odio mollitia consequatur rerum doloribus voluptatibus sit voluptates fuga totam vitae similique unde?",
      img: "space-planing.jpeg",
    },
    {
      name: "Decoration",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem repellat ullam cupiditate nam, earum in aliquam odio mollitia consequatur rerum doloribus voluptatibus sit voluptates fuga totam vitae similique unde?",
      img: "decoration.jpeg",
    },
    {
      name: "Exterior Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem repellat ullam cupiditate nam, earum in aliquam odio mollitia consequatur rerum doloribus voluptatibus sit voluptates fuga totam vitae similique unde?",
      img: "exterior-design.jpeg",
    },
    {
      name: "Construction",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem repellat ullam cupiditate nam, earum in aliquam odio mollitia consequatur rerum doloribus voluptatibus sit voluptates fuga totam vitae similique unde?",
      img: "construction.jpeg",
    },
  ];
  
  const servicesContainer = document.getElementById('serviceCarsContainer');
  
  function displayServise(array) {
    servicesContainer.innerHTML = "";
  
    array.forEach(service => {
      const serviceDiv = document.createElement('div');
  
      serviceDiv.innerHTML = `
        <a href="#" class="service-card card-link">
          <div class="service-card-img image-container">
            <img class="img-fluid" src="img/${service.img}" alt="${service.img}">
          </div>
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <span class="border-link">View services</span>
        </a>
      `;
  
      servicesContainer.appendChild(serviceDiv);
    });
  }
  
  displayServise(services);