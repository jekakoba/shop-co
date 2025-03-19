import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

let ranges = document.querySelectorAll('[data-nouislider]');

if (ranges.length > 0) {
	ranges.forEach(range => {
		// Зчитуємо налаштування з data-атрибутів
		const start = JSON.parse(range.dataset.start || '[0, 100]'); // Початкові значення ручок
		const rangeConfig = JSON.parse(range.dataset.range || '{"min": 0, "max": 100}'); // Діапазон
		const step = parseInt(range.dataset.step || '1'); // Крок
		const margin = parseInt(range.dataset.margin || '10'); // Мінімальна відстань між ручками
		const connect = range.dataset.connect === 'true'; // З'єднувальна смуга
		const orientation = range.dataset.orientation || 'horizontal'; // Орієнтація
		const direction = range.dataset.direction || 'ltr'; // Напрямок
		const tooltips = range.dataset.tooltips === 'true'; // Підказки
		const pips = range.dataset.pips === 'true'; // Піпси

		// Ініціалізація слайдера
		noUiSlider.create(range, {
			range: rangeConfig,
			step: step,
			start: start,
			margin: margin,
			connect: connect,
			orientation: orientation,
			direction: direction,
			tooltips: tooltips,
			pips: pips,
			// Форматування значень (залишаємо в JavaScript, оскільки це логіка)
			format: {
				to: function (value) {
					return '$' + Math.floor(value); // Формат: $50, $200
				},
				from: function (value) {
					return Number(value.replace('$', '')); // Для зворотного перетворення
				}
			}
		});
	});
}