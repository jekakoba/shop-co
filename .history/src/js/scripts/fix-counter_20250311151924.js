// src/js/counter-fix.js
document.querySelectorAll('[data-input-counter]').forEach((input) => {
	const minValue = 1; // Мінімум 1, не 0 і не від’ємне

	// Перевірка при завантаженні
	if (parseInt(input.value) < minValue || !input.value) {
		input.value = minValue;
	}

	// Обмеження при ручному вводі
	input.addEventListener('input', () => {
		let value = parseInt(input.value) || minValue;
		if (value < minValue) input.value = minValue;
	});

	// Flowbite уже обробляє кнопки, але ми перевіряємо ще раз
	const decrementBtn = document.querySelector(`[data-input-counter-decrement="${input.id}"]`);
	decrementBtn?.addEventListener('click', () => {
		let value = parseInt(input.value) || minValue;
		if (value <= minValue) input.value = minValue;
	});
});