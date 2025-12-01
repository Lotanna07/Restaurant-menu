/*nav toggler*/

let navToggler = document.querySelector('.nav-toggler');
let linksContainer = document.querySelector('.links-container');

navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('active')
    linksContainer.classList.toggle('active')

})




//about use review slides

let reviews = document . querySelectorAll('.review-wrapper');

let currentReviews = [0, 2];

let updateReviewSlider =(cards) =>{

    cards.forEach((cardIndex) => {
        reviews[cardIndex].classList.add('active');
    })
}

setInterval(() =>{
     currentReviews.forEach((cardIndex, i) => {
        reviews[cardIndex].classList.remove('active');

        currentReviews[i] = cardIndex >= reviews.length - 1 ? 0 : cardIndex + 1;
    })

    setTimeout(() =>{
        updateReviewSlider(currentReviews)

    }, 250)


}, 5000)

updateReviewSlider(currentReviews)



//faq
let faqs = [...document.querySelectorAll('.faq')];

faqs.map(faq =>{
    let ques = faq.querySelector('.question-box');

    ques.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})


//dish slider

let dishSlider = document.querySelector('.dish-slide');

let rotationValue = 0;

setInterval(()=>{

    rotationValue += 120;


    dishSlider.style.transform = `translateY(-50%) rotate(${rotationValue}deg)`

},3000)

AOS.init();
