import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
let ranges = document.querySelectorAll('[data-nouislider]');
if (ranges.length > 0) {
	ranges.forEach(range => {
		// We read the settings from Data Attributes
		const start = JSON.parse(range.dataset.start || '[0, 100]'); // The initial values ​​of the handles
		const rangeConfig = JSON.parse(range.dataset.range || '{"min": 0, "max": 100}'); // Range
		const step = parseInt(range.dataset.step || '1'); // Step
		const margin = parseInt(range.dataset.margin || '10'); // The minimum distance between handles
		const connect = range.dataset.connect === 'true'; // The connecting strip
		const orientation = range.dataset.orientation || 'horizontal'; // Orientation
		const direction = range.dataset.direction || 'ltr'; // Direction
		const tooltips = range.dataset.tooltips === 'true'; // Tips
		const pips = range.dataset.pips === 'true'; // Pips

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
			// Formatting values ​​(leave in javaScript since it's logic)
			format: {
				to: function (value) {
					return '$' + Math.floor(value); // Format: $ 50, $ 200
				},
				from: function (value) {
					return Number(value.replace('$', '')); // For reverse conversion
				}
			}
		});
	});
}