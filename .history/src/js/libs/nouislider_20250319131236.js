import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css'; // Правильний імпорт стилів

let range = document.getElementById('nouislider');

noUiSlider.create(range, {

	range: {
		'min': 1,
		'max': 300
	},

	step: 5,

	// Ручки починаються з ...
	start: [50, 200],

	// ... must be at least 300 apart
	// margin: 300,
	margin: 250,

	// ... but no more than 600
	limit: 600,

	// Display colored bars between handles
	connect: true,

	// Put '0' at the bottom of the slider
	direction: 'rtl',
	orientation: 'vertical',

	// Move handle on tap, bars are draggable
	behaviour: 'tap-drag',
	tooltips: true,
	// format: wNumb({
	// 	decimals: 0
	// }),

	// Show a scale with the slider
	pips: {
		mode: 'steps',
		stepped: true,
		density: 4
	}
});
