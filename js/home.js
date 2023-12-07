document.addEventListener("partialsLoaded", async () => {
    async function fetchProjectsData() {
      const response = await fetch('api/projects.json');
      return await response.json();
    }
    
    const projects = await fetchProjectsData()
    const projectsContainer = document.getElementById('projectCarsContainer');
  
    function displayProjects(array) {
      projectsContainer.innerHTML = "";
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

    async function fetchArticlesData() {
      const response = await fetch('api/articles.json');
      return await response.json();
    }
    const articles = await fetchArticlesData();
    const articlesContainer = document.getElementById('blogCarsContainer');
  
    function displayArticles(array) {
      articlesContainer.innerHTML = "";
      const slicedArticles = array.slice(0, 2);
  
      slicedArticles.forEach(article => {
        const articleDiv = document.createElement('div');
  
        articleDiv.innerHTML = `
          <a class="blog-card card-link" href="blog-post.html?id=${article.id}">
            <div class="blog-card__img-wrapper">
              <img src="img/${article.img}" alt="${article.img}">
            </div>
            <span>${article.publicationDate} - ${article.readTime}</span>
            <h3>${article.title}</h3>
            <p class="border-link">Read more</p>
          </a>
        `;
  
        articlesContainer.appendChild(articleDiv);
      });
    }
    displayArticles(articles);

});