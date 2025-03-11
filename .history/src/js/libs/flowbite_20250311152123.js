import 'flowbite';

// src/js/counter.js
document.querySelectorAll('[data-input-counter]').forEach((input) => {
	const decrementBtn = document.querySelector(`[data-input-counter-decrement="${input.id}"]`);
	const incrementBtn = document.querySelector(`[data-input-counter-increment="${input.id}"]`);

	// Налаштування
	const minValue = 1;    // Мінімум 1
	const maxValue = 999;  // Максимум (можете змінити)
	const step = 1;        // Крок
	const defaultValue = 1; // Початкове значення

	// Встановлюємо початкове значення
	if (!input.value || parseInt(input.value) < minValue) {
		input.value = defaultValue;
	}

	// Обробка декремента
	decrementBtn?.addEventListener('click', () => {
		let value = parseInt(input.value) || minValue;
		if (value > minValue) { // Зменшуємо тільки якщо більше 1
			value -= step;
		}
		input.value = value;
	});

	// Обробка інкремента
	incrementBtn?.addEventListener('click', () => {
		let value = parseInt(input.value) || minValue;
		value = Math.min(maxValue, value + step); // Не вище maxValue
		input.value = value;
	});

	// Обмеження ручного вводу
	input.addEventListener('input', () => {
		let value = input.value.replace(/\D/g, ''); // Тільки цифри
		value = parseInt(value) || minValue;
		input.value = Math.min(maxValue, Math.max(minValue, value));
	});
});