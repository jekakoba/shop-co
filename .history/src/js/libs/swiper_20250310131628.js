import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

function initSliders() {
	if (document.querySelector('.preview-projects')) {
		new Swiper('.preview-projects', {
			modules: [Navigation],
			spaceBetween: 30,
			slidesPerView: "auto",
			loop: true,
			speed: 500,
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
