/* 
	used 
	https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/
	as a refenrence
	*/

const slides = document.querySelectorAll('.slideshow__photo-box');

slides.forEach((slide, index) => {
	slide.style.transform = `translateX(${index * 500}%)`;
});

 // next slide
const nextSlide = document.querySelector('.slideshow__button-next');

let currentSlide = 0;

let maxSlide = slides.length - 1;

nextSlide.addEventListener('click', function () {
	if (currentSlide === maxSlide) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}

	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${500 * (index - currentSlide)}%)`;
	});
});
 
 // previous slide
const previousSlide = document.querySelector('.slideshow__button-previous');

previousSlide.addEventListener('click', function () {
	if (currentSlide === 0) {
		currentSlide = maxSlide;
	} 	else {
		currentSlide--;
	}

	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${500 * (index - currentSlide)}%)`;
	});
});
