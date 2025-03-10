import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

function initSliders() {
	if (document.querySelector('.customers')) {
		new Swiper('.customers', {
			modules: [Navigation],
			spaceBetween: 30,
			slidesPerView: 3,
			loopedSlides: 2,
			loop: true,
			speed: 500,
			// centeredSlides: true,
			loop: true,
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
