/* 
	used 
	https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/
	as a refenrence
	*/

const slides = document.querySelectorAll('.photo_box');

slides.forEach((slide, index) => {
	slide.style.transform = `translateX(${index * 500}%)`;
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
		slide.style.transform = `translateX(${500 * (index - currentSlide)}%)`;
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
		slide.style.transform = `translateX(${500 * (index - currentSlide)}%)`;
	});
});
 




/* Tested function that was not working*/
/*  const slideIndex = 0;
  showSlides(slideIndex);

 function nextSlide(next) {
	showSlides(slideIndex += next);
 }

 function currentSlide(next) {
showSlides(slideIndex = next);
 }

 function showSlides(n) {
 	let index;
	let slides = document.getElementsByClassName('.photo_box');
 	let dots = document.getElementsByClassName('.slideshow__dots')
 		if (next > slides.length) {slideIndex = 1}
 		if (next < 1) { slideIndex = slides.length}
 		for (index = 0; index < slides.length; index++) {
 			slides[index].style.display = 'none';
 		}
 		for (index = 0; index < dots.length; index++) {
 			dots[index].className.replace('active', '')
 		}
 	slides[slideIndex-1].style.display = 'block';
 	dots[slideIndex-1].className += 'active';
 } */