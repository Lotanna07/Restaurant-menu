//about use review slides

let reviews = document . querySelectorAll('.review-wrapper');

let currentReviews = [0, 2];

let updateReviewSlider =(cards) =>{

    cards.forEach( () => {
        reviews[cards_index_].classList.add('active');
    })
}

setInterval(() =>{
     currentReviews.forEach( (cards_index, i) => {
        reviews[cards_index_].classList.remove('active');

        currentReviews[i] =cards_index >= reviews.length -1 ? 0 : cards_index + 1 ;
    })

    setTimeout(() =>{
        updateReviewSlider(currentReviews)

    }, 250)


}, 5000)

updateReviewSlider(currentReviews)