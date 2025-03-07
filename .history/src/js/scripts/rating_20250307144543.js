function updateStarRating(rating) {
	const stars = document.querySelectorAll('#star-rating svg');
	const fullStars = Math.floor(rating); // Кількість повних зірок
	const partialStar = rating - fullStars; // Дробова частина (наприклад, 0.2 для 2.2)

	stars.forEach((star, index) => {
		const path = star.querySelector('path');
		// Скидаємо зірку до сірого кольору
		path.setAttribute('fill', '#E0E0E0');

		if (index < fullStars) {
			// Повністю заповнені зірки
			path.setAttribute('fill', '#FFC633');
		} else if (index === fullStars && partialStar > 0) {
			// Додаємо частково заповнену зірку
			const clipPercentage = (1 - partialStar) * 100; // Обчислюємо відсоток обрізки
			const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			newPath.setAttribute('d', path.getAttribute('d'));
			newPath.setAttribute('fill', '#FFC633');
			newPath.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
			star.appendChild(newPath);
		}
	});
}

// Приклад використання
updateStarRating(2.2); // Для рейтингу 2.2
// updateStarRating(4.3); // Для рейтингу 4.3