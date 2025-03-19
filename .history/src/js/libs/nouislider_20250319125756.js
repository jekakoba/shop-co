import noUiSlider from 'nouislider';

let slider = document.getElementById('nouislider');

noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
})
