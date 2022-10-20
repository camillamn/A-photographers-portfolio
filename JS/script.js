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

// next slide
const nextSlide = document.querySelector('.slideshow__button--next');

let currentSlide = 0;

let maxSlide = slides.length - 1;

nextSlide.addEventListener('click', function () {
	if (currentSlide=== maxSlide) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}

	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
	});
});


// previous slide
const previousSlide = document.querySelector('.slideshow__button--previous');

previousSlide.addEventListener('click', function () {
	if (currentSlide === 0) {
		currentSlide = maxSlide;
	} 	else {
		currentSlide--;
	}

	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
	});
});