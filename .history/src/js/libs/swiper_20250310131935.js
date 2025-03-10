import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

function initSliders() {
	if (document.querySelector('.customers')) {
		new Swiper('.customers', {
			modules: [Navigation],
			spaceBetween: 30,
			slidesPerView: "auto",
			loop: true,
			speed: 500,
			navigation: {
				prevEl: '.advantages .navigation__btn_prev',
				nextEl: '.advantages .navigation__btn_next',
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
