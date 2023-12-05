document.addEventListener("partialsLoaded", async () => {
    
  async function fetchData() {
      const response = await fetch('api/articles.json');
      return await response.json();
  }
  const articles = await fetchData()
  
  let currentArticleIndex = 0;
  let isHovered = false;
  
  const articlesContainer = document.getElementById('blogHero');
  function displayArticles(array, category) {
    articlesContainer.innerHTML = "";
  
    if (array.length > 0 && currentArticleIndex < array.length) {
      const article = array[currentArticleIndex];
  
      const articleDiv = document.createElement('div');
      articleDiv.className = 'blog-hero__card';
  
      articleDiv.innerHTML = `
      <a class="card-link" href="blog-post.html?id=${article.id}">
        <div class="blog-hero__card-img image-container">
          <img src="img/${article.img}" alt="${article.img}">
        </div>
        <div class="blog-hero__card-title">
          <span>${article.publicationDate} - ${article.readTime} min read</span>
          <h3>${article.title}</h3>
          <p>${article.subtitle}</p>
          <p class="border-link text-color-hover">Read more</p>
        </div>
      </a>
      `;
  
      articlesContainer.appendChild(articleDiv);
  
      currentArticleIndex = (currentArticleIndex + 1) % array.length;
    }
  }
  displayArticles(articles, 'all');
  
  function startAutoUpdate() {
    return setInterval(() => {
      if (!isHovered) {
        displayArticles(articles);
      }
    }, 4000);
  }
  
  let autoUpdateInterval = startAutoUpdate();
  
  articlesContainer.addEventListener('mouseenter', () => {
    isHovered = true;
    clearInterval(autoUpdateInterval); 
  });
  
  articlesContainer.addEventListener('mouseleave', () => {
    isHovered = false;
    autoUpdateInterval = startAutoUpdate(); 
  });
  
  displayArticles(articles);
  
  
  
  function displayArticlesByCategory(array, category) {
    const articlesContainer = document.getElementById('blogCarsContainer');
    articlesContainer.innerHTML = "";
  
  
    array.forEach(function(article) {
      if (category === 'all' || article.category === category) {
        const articleDiv = document.createElement('div');

  
        articleDiv.innerHTML = `
        <a class="blog-card card-link" href="blog-post.html?id=${article.id}">
          <div class="blog-card__img-wrapper">
            <img src="img/${article.img}" alt="${article.img}">
          </div>
          <span>${article.publicationDate} - ${article.readTime} min read</span>
          <h3>${article.title}</h3>
          <p class="border-link text-color-hover">Read more</p>
        </a>
        `;
  
        articlesContainer.appendChild(articleDiv);
      }
    });
  }
  
  const categoryLinks = document.querySelectorAll('.posts-category a');

  categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const selectedCategory = link.getAttribute('data-category');
      displayArticlesByCategory(articles, selectedCategory);
    });
  });
  
  displayArticlesByCategory(articles, 'all');
});