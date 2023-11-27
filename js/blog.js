const articles = [
    {
      publicationDate: "September 1, 2022",
      title: "Six inspiring New York young architects you should be following",
      img: "young-architects.jpeg",
      subtitle: "Explore the innovative work of emerging architects in the vibrant landscape of New York City.",
      author: "Andy Smith",
      readTime: 5,
      category: "design"
    },
    {
      publicationDate: "August 15, 2022",
      title: "8 types of trendy Architectural styles for your future home design",
      img: "future-home.jpeg",
      subtitle: "Discover the latest trends in architectural styles that will redefine the future of home design and aesthetics.",
      author: "Mike Warren",
      readTime: 7,
      category: "design"
    },
    {
      publicationDate: "January 17, 2023",
      title: "Interior design trends 2022 - The 25 top looks for the new year and beyond",
      img: "design-trends.jpeg",
      subtitle: "Dive into the world of interior design with the 25 most captivating trends that will shape homes in 2022 and beyond.",
      author: "John Carter",
      readTime: 10,
      category: "trends"
    },
    {
      publicationDate: "March 8, 2023",
      title: "18 useful online research resources for student architects",
      img: "useful-research.jpeg",
      subtitle: "Empower your architectural studies with 18 essential online resources to enhance your research and knowledge.",
      author: "Andy Smith",
      readTime: 10,
      category: "resources"
    },
    {
      publicationDate: "November 11, 2022",
      title: "5 Architectural trends that is worth knowing about in 2022",
      img: "building-in-manhattan.jpeg",
      subtitle: "Stay ahead of the curve by exploring the architectural trends that are reshaping the industry in 2022 and beyond.",
      author: "John Carter",
      readTime: 15,
      category: "trends"
    },
    {
      publicationDate: "December 19, 2022",
      title: "Emerging trends that will shape the future of architecture design",
      img: "emerging-trends.jpeg",
      subtitle: "Empower your architectural studies with 18 essential online resources to enhance your research and knowledge.",
      author: "John Carter",
      readTime: 5,
      category: "trends"
    }
  ];
  
  let currentArticleIndex = 0;
  let isHovered = false;
  
  const articlesContainer = document.getElementById('blogHero');
  function displayArticles(array, category) {
    articlesContainer.innerHTML = "";
  
    // Перевірка, чи є об'єкт за поточним індексом
    if (array.length > 0 && currentArticleIndex < array.length) {
      const article = array[currentArticleIndex];
  
      const articleDiv = document.createElement('div');
      articleDiv.className = 'blog-hero__card';
  
      articleDiv.innerHTML = `
      <a class="card-link" href="#">
      <div class="blog-hero__card-img image-container">
          <img src="img/${article.img}" alt="${article.img}">
      </div>
      <div class="blog-hero__card-title">
          <span>${article.publicationDate} - ${article.readTime} min read</span>
          <h3>${article.title}</h3>
          <p>${article.subtitle}</p>
          <p class="border-link text-color-hover">View project</p>
      </div>
  </a>
      `;
  
      articlesContainer.appendChild(articleDiv);
  
      // Збільшення індексу для наступного виклику функції
      currentArticleIndex = (currentArticleIndex + 1) % array.length;
    }
  }
  displayArticles(articles, 'all');
  
  function startAutoUpdate() {
    // Встановлення затримки для виклику функції знову після певного періоду (наприклад, 5000 мілісекунд)
    return setInterval(() => {
      if (!isHovered) {
        displayArticles(articles);
      }
    }, 4000); // Призначте значення затримки за потребою
  }
  
  let autoUpdateInterval = startAutoUpdate();
  
  // Додавання обробників подій для наведення та зняття наведення
  articlesContainer.addEventListener('mouseenter', () => {
    isHovered = true;
    clearInterval(autoUpdateInterval); // Зупинка автоматичного оновлення при наведенні
  });
  
  articlesContainer.addEventListener('mouseleave', () => {
    isHovered = false;
    autoUpdateInterval = startAutoUpdate(); // Поновлення автоматичного оновлення після зняття наведення
  });
  
  // Початковий виклик для відображення статей
  displayArticles(articles);
  
  
  
  function displayArticlesByCategory(array, category) {
    const articlesContainer = document.getElementById('blogCarsContainer');
    articlesContainer.innerHTML = "";
  
  
    array.forEach(function(article) {
      if (category === 'all' || article.category === category) {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'blog-card';
  
        articleDiv.innerHTML = `
          <div class="blog-card__img-wrapper">
            <img class="img-fluid" src="img/${article.img}" alt="${article.img}">
          </div>
          <span>${article.publicationDate} - ${article.readTime} min read</span>
          <h3>${article.title}</h3>
          <p>Read more</p>
        `;
  
        articlesContainer.appendChild(articleDiv);
      }
    });
  }
  
  const categoryLinks = document.querySelectorAll('.posts-category a');
  
  // Додавання обробників подій для елементів категорії
  categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Отримання значення категорії з атрибуту data-category
      const selectedCategory = link.getAttribute('data-category');
      
      // Виклик функції відображення статей за вибраною категорією
      displayArticlesByCategory(articles, selectedCategory);
    });
  });
  
  // Виклик функції при завантаженні сторінки для відображення всіх статей
  displayArticlesByCategory(articles, 'all');