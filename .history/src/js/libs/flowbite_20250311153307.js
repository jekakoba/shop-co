

// src/js/counter-fix.js
document.querySelectorAll('[data-input-counter]').forEach((input) => {
	const minValue = 1; // Мінімум 1

	// Перевірка при завантаженні
	if (parseInt(input.value) < minValue || !input.value) {
		input.value = minValue;
	}

	// Обмеження при ручному вводі
	input.addEventListener('input', () => {
		let value = parseInt(input.value) || minValue;
		if (value < minValue) input.value = minValue;
	});

	// Перехоплення декремента до Flowbite
	const decrementBtn = document.querySelector(`[data-input-counter-decrement="${input.id}"]`);
	decrementBtn?.addEventListener('click', (event) => {
		let value = parseInt(input.value) || minValue;
		if (value <= minValue) {
			event.preventDefault(); // Зупиняємо стандартну поведінку Flowbite
			input.value = minValue; // Залишаємо 1
		}
		// Якщо value > 1, Flowbite виконає зменшення
	}, { capture: true }); // Використовуємо capture phase, щоб запустити раніше Flowbite
});
import 'flowbite';