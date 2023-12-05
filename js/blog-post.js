document.addEventListener("partialsLoaded", async () => {
    
    async function fetchData() {
        const response = await fetch('api/articles.json');
        return await response.json();
    }
    const articles = await fetchData();

    const urlParams = new URLSearchParams(window.location.search);
            const articleId = urlParams.get('id');

            const selectedArticle = articles.find(article => article.id === parseInt(articleId));

            if (selectedArticle) {
                document.querySelector('h1').textContent = selectedArticle.title;
                document.querySelector('.blog-post__hero-title p').textContent = selectedArticle.subtitle;

                const articleImage = document.querySelector('.blog-post__hero-img-wrapper');
                articleImage.innerHTML = `<img src="img/${selectedArticle.img}" alt="${selectedArticle.title}">`;

                const blogPostImage = document.querySelector('.blog-post-img-wrapper');
                blogPostImage.innerHTML = `<img src="img/${selectedArticle.blogPostImg}" alt="${selectedArticle.title}">`;
                document.querySelector('figcaption').textContent = selectedArticle.blogPostSubtitle;

                document.getElementById('articleAuthor').textContent = selectedArticle.author;
                document.getElementById('articlePublicationDate').textContent = selectedArticle.publicationDate;
                document.getElementById('articleReadTime').textContent = selectedArticle.readTime;
                document.getElementById('articleCategory').textContent = selectedArticle.category;

                



                

            } else {
                console.error('Service not found');
            }
});