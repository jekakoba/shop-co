import Swiper from 'swiper';
import {
	Navigation,
	FreeMode
} from 'swiper/modules';

function initSliders() {
	if (document.querySelector('.customers')) {
		new Swiper('.customers', {
			modules: [Navigation],
			spaceBetween: 30,
			slidesPerView: 3,
			speed: 500,
			grabCursor: true,
			freeMode: true,
			// centeredSlides: true,
			// loopedSlides: 3,
			// loop: true,
			// watchOverflow: true,
			// loop: true,
			navigation: {
				prevEl: '[data-prev-customers-slide]',
				nextEl: '[data-next-customers-slide]',
			},
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 	},
			// 	768: {
			// 		slidesPerView: 1,
			// 	},
			// 	992: {
			// 		slidesPerView: 1,
			// 	},
			// 	1200: {
			// 		slidesPerView: 1,
			// 	},
			// },
		});
	}
}
window.addEventListener('load', function () {
	initSliders();
});
