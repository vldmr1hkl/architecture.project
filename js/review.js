document.addEventListener("partialsLoaded", async () => {
    async function fetchReviewData() {
        const response = await fetch('api/reviews.json');
        return await response.json();
      }
      const reviews = await fetchReviewData();
      const reviewsContainer = document.getElementById('reviewsContainer');
      
      async function displayRandomReview(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const review = array[randomIndex];
      
        const reviewDiv = document.createElement('div');
        reviewDiv.innerHTML = `
          <div class="review__user-info">
            <h3>"${review.testimonial}"</h3>
            <p>${review.review}</p>
            <figure>
              <img class="review__user-avatar" src="img/${review.avatar}" alt="${review.author}">
              <figcaption>
                <span>${review.author}</span>
                <span>${review.location}</span>
              </figcaption>
            </figure>
          </div>
          <div class="review__img-wrapper">
            <img src="img/${review.img}" alt="${review.location}">
          </div>
        `;
      
        reviewsContainer.innerHTML = '';
        reviewsContainer.appendChild(reviewDiv);
      }
      displayRandomReview(reviews);
});