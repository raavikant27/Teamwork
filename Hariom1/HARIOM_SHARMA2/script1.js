const reviewsData = [
    { name: "Hariom Sharma", rating: 5, comment: "Great educational resources!" },
    { name: "Siddhant Rathore ", rating: 5, comment: "Very helpful content. Highly recommended!" },
    { name: "Lalit Yadav", rating: 4, comment: "Excellent website. Loved the courses!" },
    { name: "Rohit Sharma", rating: 3, comment: "Good content, but could use some improvement." },
    { name: "Vivek Tyagi", rating: 2, comment: "Informative and engaging material." },
    { name: "Shivam Batham", rating: 3, comment: "Very Helpful Website . Better Websitye to others!" }
    // Add more reviews here
];

// Function to create star icons based on rating
function createStarRating(rating) {
    const starContainer = document.createElement("span");
    starContainer.classList.add("star-container"); // Add star container class
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("span");
        star.textContent = i < rating ? "★" : "☆"; // Display filled or empty star based on rating
        if (i < rating) {
            star.classList.add("filled"); // Add filled class to filled stars
        }
        starContainer.appendChild(star);
    }
    return starContainer;
}

// Function to display reviews
function displayReviews() {
    const reviewContainer = document.getElementById("reviewContainer");

    // Clear existing reviews
    reviewContainer.innerHTML = "";

    // Display each review
    reviewsData.forEach(review => {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        const reviewContent = document.createElement("div");
        reviewContent.classList.add("review-content");

        // Display name
        const reviewName = document.createElement("p");
        reviewName.textContent = `Name: ${review.name}`;
        reviewName.classList.add("reviewer-name"); // Add class to the name element

        // Display star rating
        const reviewRating = document.createElement("p");
        reviewRating.textContent = `Rating: `;
        reviewRating.appendChild(createStarRating(review.rating));

        // Display comment
        const reviewComment = document.createElement("div");
        reviewComment.textContent = review.comment;
        reviewComment.classList.add("review-comment"); // Add class to the comment box

        // Append name, rating, and comment to review content
        reviewContent.appendChild(reviewName);
        reviewContent.appendChild(reviewRating);
        reviewContent.appendChild(reviewComment);

        // Append review content to review card
        reviewCard.appendChild(reviewContent);

        // Append review card to review container
        reviewContainer.appendChild(reviewCard);
    });
}

// Event listener for loading reviews
document.getElementById("loadReviewsBtn").addEventListener("click", displayReviews);

// Initial display of reviews
displayReviews();

