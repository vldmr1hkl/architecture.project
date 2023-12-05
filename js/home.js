document.addEventListener("partialsLoaded", async () => {
    async function fetchData() {
      const response = await fetch('api/projects.json');
      return await response.json();
    }
    
    const projects = await fetchData()
    const projectsContainer = document.getElementById('projectCarsContainer');
  
    function displayProjects(array) {
      projectsContainer.innerHTML = "";
  
      // Використовуємо метод slice для обрізання масиву і вибираємо лише перші два об'єкти
      const slicedProjects = array.slice(0, 2);
  
      slicedProjects.forEach(project => {
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

    const openVideoButton = document.querySelector(".video-section__open-button");
    const closeVideoButton = document.querySelector(".video-section__close-button");
    const videoWrapper = document.querySelector(".video-section__video-wrapper");
    const body = document.querySelector("body");
    const videoIframe = document.querySelector(".video-section__video-wrapper iframe");


    openVideoButton.addEventListener("click", () => {
      videoWrapper.classList.add("active");
      body.classList.add("overflow-hidden");
    });

    closeVideoButton.addEventListener("click", () => {
      videoWrapper.classList.remove("active");
      body.classList.remove("overflow-hidden");

      if (videoIframe) {
        const videoSrc = videoIframe.src;
        videoIframe.src = "";
        videoIframe.src = videoSrc;
      }
    });

    const zoomImage = document.getElementById('zoomImage');
    document.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const scale = 1 + scrollY * 0.00005;
    
        zoomImage.style.transform = `scale(${scale})`;
      });

  });