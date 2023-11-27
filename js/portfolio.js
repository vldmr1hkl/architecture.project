const projects = [
    {
      date: "June 23, 2021",
      location: "New York, NY",
      name: "House architecture design in Manhattan, New York",
      img: "house-in-manhattan.jpeg",
    },
    {
      date: "April 15, 2021",
      location: "New York, NY",
      name: "Interior design in Brooklyn Heights, New York",
      img: "design-in-blooklyn.jpeg",
    },
    {
      date: "September 2, 2022",
      location: "New York, NY",
      name: "Offices architecture design in Chelsea, New York",
      img: "offices-in-chelsea.jpeg",
    },
    {
      date: "March 8, 2023",
      location: "New York, NY",
      name: "Building design in Manhattan, New York",
      img: "building-in-manhattan.jpeg",
    },
  ];
  
  const projectsContainer = document.getElementById('projectCarsContainer');
  
  function displayProjects(array) {
    projectsContainer.innerHTML = "";
  
    array.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'portfolio-card';
  
      projectDiv.innerHTML = `
        <a href="portfolio-single.html" class="card-link">
          <div class="portfolio-card-img image-container">
            <img class="img-fluid" src="img/${project.img}" alt="${project.img}">
          </div>
          <div class="portfolio-card-title">
            <span>${project.date}</span>
            <h3>${project.name}</h3>
            <p class="border-link">View project</p>
          </div>
        </a>
      `;
  
      projectsContainer.appendChild(projectDiv);
    });
  }
  
  displayProjects(projects);