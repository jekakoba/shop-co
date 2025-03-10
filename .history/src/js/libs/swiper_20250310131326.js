import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

function initSliders() {
	if (document.querySelector('.preview-projects')) {
		let progressInterval;
		function startProgressBar(swiper) {
			const activeSlide = swiper.slides[swiper.activeIndex];
			const progressBar = activeSlide.querySelector('.slide-preview__progress-bar');
			if (!progressBar) return;
			clearInterval(progressInterval);
			progressBar.style.width = '0%';
			let progress = 0;
			const step = 100 / (swiper.params.autoplay.delay / 50);
			progressInterval = setInterval(() => {
				progress += step;
				if (progress >= 100) {
					progress = 100;
					clearInterval(progressInterval);
				}
				progressBar.style.width = `${progress}%`;
			}, 50);
		}
		function resetProgressBar(swiper) {
			swiper.slides.forEach((slide) => {
				const progressBar = slide.querySelector('.slide-preview__progress-bar');
				if (progressBar) progressBar.style.width = '0%';
			});
			startProgressBar(swiper);
		}
		new Swiper('.preview-projects', {
			modules: [EffectFade, Autoplay],
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			speed: 500,
			effect: 'fade',
			allowTouchMove: false,
			autoplay: {
				delay: 5000,
			},
			fadeEffect: {
				crossFade: true,
			},
			on: {
				init(swiper) {
					startProgressBar(swiper);
				},
				slideChange(swiper) {
					resetProgressBar(swiper);
				},
				autoplayTimeLeft(swiper, time) {
					const activeSlide = swiper.slides[swiper.activeIndex];
					const progressBar = activeSlide.querySelector('.slide-preview__progress-bar');
					if (!progressBar) return;
					const step = 100 / (swiper.params.autoplay.delay / 50);
					const progress = 100 - (time / swiper.params.autoplay.delay) * 100;
					progressBar.style.width = `${progress}%`;
				},
			},
		});
	}
}
window.addEventListener('load', function () {
	initSliders();
});
