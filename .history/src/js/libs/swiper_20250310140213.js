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
					spaceBetween: 15,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
}
window.addEventListener('load', function () {
	initSliders();
});
