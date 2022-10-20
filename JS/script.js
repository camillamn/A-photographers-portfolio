
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


/* 
	used 
	https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/
	as a refenrence
	*/

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





/* Tested function that was not working*/
// const slideIndex = 1;
// showSlides(slideIndex);

// function nextSlide(next) {
// 	showSlides(slideIndex += next);
// }

// function currentSlide(next) {
// 	showSlides(slideIndex = next);
// }

// function showSlides(n) {
// 	let index;
// 	let slides = document.getElementsByClassName('.photo_box');
// 	let dots = document.getElementsByClassName('.slideshow__dots')
// 		if (next > slides.length) {slideIndex = 1}
// 		if (next < 1) { slideIndex = slides.length}
// 		for (index = 0; index < slides.length; index++) {
// 			slides[index].style.display = 'none';
// 		}
// 		for (index = 0; index < dots.length; index++) {
// 			dots[index].className.replace('active', '')
// 		}
// 	slides[slideIndex-1].style.display = 'block';
// 	dots[slideIndex-1].className += 'active';
// }