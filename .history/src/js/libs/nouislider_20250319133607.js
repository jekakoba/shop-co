import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css'; // Імпорт стилів

let range = document.getElementById('nouislider');

noUiSlider.create(range, {
	// Діапазон значень
	range: {
		'min': 1, // Початок діапазону
		'max': 300 // Кінець діапазону (можна зробити більше, якщо потрібно)
	},

	// Крок зміни значень
	step: 1,

	// Початкові значення ручок
	start: [50, 200], // Відповідає $50 і $200, як на скріншоті

	// Мінімальна відстань між ручками
	margin: 20,

	// З'єднувальна смуга між ручками
	connect: true,

	// Орієнтація слайдера (горизонтальна за замовчуванням, але вкажемо явно)
	orientation: 'horizontal', // Змінено з 'vertical' на 'horizontal'

	// Напрямок (залишаємо стандартний, не 'rtl')
	direction: 'ltr', // Змінено з 'rtl' на 'ltr'

	// Поведінка слайдера
	// behaviour: 'tap-drag',

	// Вимикаємо підказки (tooltips), оскільки їх немає на скріншоті
	tooltips: true, // Змінено з true на false

	// Форматування значень (додаємо символ $)
	format: {
		to: function (value) {
			return '$' + Math.floor(value); // Формат: $50, $200
		},
		from: function (value) {
			return Number(value.replace('$', '')); // Для зворотного перетворення
		}
	},

	// Вимикаємо піпси (шкалу), оскільки їх немає на скріншоті
	pips: false // Змінено з об'єкта на false
});