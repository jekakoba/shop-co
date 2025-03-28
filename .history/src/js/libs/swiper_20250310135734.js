import Swiper from 'swiper';
import {
	Navigation,
	FreeMode
} from 'swiper/modules';

function initSliders() {
	if (document.querySelector('.customers')) {
		new Swiper('.customers', {
			modules: [Navigation, FreeMode],
			spaceBetween: 30,
			slidesPerView: 3,
			speed: 500,
			grabCursor: true,
			freeMode: true,
			navigation: {
				prevEl: '[data-prev-customers-slide]',
				nextEl: '[data-next-customers-slide]',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				767.98: {
					slidesPerView: 2,
				},
				991.98: {
					slidesPerView: 3,
				},
			},
		});
	}
}
window.addEventListener('load', function () {
	initSliders();
});
