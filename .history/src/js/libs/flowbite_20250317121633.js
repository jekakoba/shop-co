// import 'flowbite';

// document.querySelectorAll('[data-input-counter]').forEach((input) => {
// 	const minValue = 1;
// 	if (parseInt(input.value) < minValue || !input.value) {
// 		input.value = minValue;
// 	}
// 	input.addEventListener('input', () => {
// 		let value = parseInt(input.value) || minValue;
// 		if (value < minValue) input.value = minValue;
// 	});
// 	const decrementBtn = document.querySelector(`[data-input-counter-decrement="${input.id}"]`);
// 	decrementBtn?.addEventListener('click', (event) => {
// 		let value = parseInt(input.value) || minValue;
// 		if (value <= minValue) {
// 			event.preventDefault();
// 			input.value = minValue;
// 		}
// 	}, { capture: true });
// });