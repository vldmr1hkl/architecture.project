document.addEventListener("partialsLoaded", async () => {
    
  async function fetchData() {
      const response = await fetch('api/projects.json');
      return await response.json();
  }
  const projects = await fetchData()
  
  const projectsContainer = document.getElementById('projectCarsContainer');
  
  function displayProjects(array) {
    projectsContainer.innerHTML = "";
  
    array.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'portfolio-card';
  
      projectDiv.innerHTML = `
        <a href="portfolio-single.html?id=${project.id}" class="card-link">
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
});