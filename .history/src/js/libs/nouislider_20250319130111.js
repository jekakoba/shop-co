import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css'; // Правильний імпорт стилів

let slider = document.getElementById('nouislider');

noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
})
