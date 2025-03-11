import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';

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
	if (document.querySelector('[data-double-slider]')) {
		let thumbsSwiper = new Swiper('[data-double-preview]', {
			modules: [Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			speed: 1000,
			slideToClickedSlide: true,
			spaceBetween: 8,
			grabCursor: true,
		});
		// Створюємо слайдер
		new Swiper('[data-double-main]', {
			modules: [Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			speed: 300,
			grabCursor: true,
			thumbs: {
				swiper: thumbsSwiper
			},

		});
	}

}
window.addEventListener('load', function () {
	initSliders();
});
