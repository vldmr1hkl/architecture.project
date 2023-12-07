document.addEventListener("partialsLoaded", async () => {
    
    async function fetchTeamMembersData() {
        const response = await fetch('api/team-members.json');
        return await response.json();
    }
    const teamMembers = await fetchTeamMembersData();

    const urlParams = new URLSearchParams(window.location.search);
            const memberId = urlParams.get('id');

            const selectedMember = teamMembers.find(member => member.id === parseInt(memberId));

            if (selectedMember) {
                document.getElementById('memberName').textContent = selectedMember.name;
                document.getElementById('memberPosition').textContent = selectedMember.position;
                document.getElementById('memberlinkedinProfile').href = selectedMember.linkedinProfile;
                document.getElementById('memberTwitterProfile').href = selectedMember.twitterProfile;
                document.getElementById('memberFacebookProfile').href = selectedMember.facebookProfile;

                document.getElementById('aboutMember').textContent = `About ${selectedMember.name}`;
                document.getElementById('articlesByAuthor').textContent = `Articles by ${selectedMember.name}`
                document.getElementById('memberInfo').textContent = selectedMember.info;
                
                const mebmerImage = document.querySelector('.team-single-card__img-wrapper');
                mebmerImage.innerHTML = `<img src="img/${selectedMember.img}" alt="${selectedMember.name}">`;

                const ulElement = document.getElementById('memberSkills');
                selectedMember.skills.forEach(skill => {
                    const liElement = document.createElement('li');
                    liElement.textContent = skill;
                    ulElement.appendChild(liElement);
                  });

                  async function fetchArticlesData() {
                    const response = await fetch('api/articles.json');
                    return await response.json();
                }
                const articles = await fetchArticlesData()
            
                function displayArticlesByAuthor(array, author) {
                const blogContainer = document.querySelector('.team-single-blog');
                blogContainer.innerHTML = "";
            
                const articleDiv = document.createElement('div');
            
              
              
                array.forEach(function(article) {
                  if (article.author === selectedMember.name) {
                    const articleDiv = document.createElement('div');
            
              
                    articleDiv.innerHTML = `
                    <a class="blog-card card-link" href="blog-post.html?id=${article.id}">
                      <div class="blog-card__img-wrapper">
                        <img src="img/${article.img}" alt="${article.img}">
                      </div>
                      <span>${article.publicationDate} - ${article.readTime} min read</span>
                      <h3>${article.title}</h3>
                      <p class="border-link">Read more</p>
                    </a>
                    `;
              
                    blogContainer.appendChild(articleDiv);
                  }
                });
              }
              displayArticlesByAuthor(articles, 'author');

            } else {
                console.error('Service not found');
            }


    
});