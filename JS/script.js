// // legger tekst her så det blir lastet opp i github

// const slideShowImages = document.querySelectorAll('.slide');
// const imagesInSlideshow = document.querySelectorAll('.slideshow__images')
// const prevButton = document.querySelector('.slideshow__button--previous');
// const nextButton = document.querySelector('.slideshow__button--next');
// /* const imageText = document.querySelectorAll('slideshow__images--text'); */
// const navigationDots = document.querySelectorAll('.slideshow__dots');
// const current = 0 ;


// nextButton.addEventListener('click',handleNextButtonClick);

// function handleNextButtonClick() {
// 	slide ();
// }

// function slide() {
// 	const photoBox = document.querySelectorAll('.photo_box');
// 	photoBox.classList.slide('.photo_box__hidden');
// };

const slides = document.querySelectorAll('.photo_box');

slides.forEach((slide, index) => {
	slide.style.transform = `translateX(${index * 100}%)`;
});

console.log(slides)

let currentSlide = 0;

const nextSlide = document.querySelector('.slideshow__button--next');

nextSlide.addEventListener('click', function () {
	currentSlide++;

	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
	});
});