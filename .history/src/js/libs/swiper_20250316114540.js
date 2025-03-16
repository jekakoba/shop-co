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
		let productsThumbsSwiper = new Swiper('[data-double-preview]', {
			modules: [Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			speed: 0,
			slideToClickedSlide: true,
			direction: 'vertical',
			spaceBetween: 14,
			autoHeight: true,
		});
		new Swiper('[data-double-main]', {
			modules: [Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 14,
			speed: 0,
			grabCursor: true,
			autoHeight: true,
			thumbs: {
				swiper: productsThumbsSwiper
			},

		});
	}

}
window.addEventListener('load', function () {
	initSliders();
});
