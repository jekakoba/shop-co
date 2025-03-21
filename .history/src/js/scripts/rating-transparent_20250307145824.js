function updateStarRating() {
	// Знаходимо контейнер із рейтингом
	const ratingContainer = document.querySelector('[data-rating]');
	const rating = parseFloat(ratingContainer.getAttribute('data-rating-value')); // Отримуємо значення рейтингу
	const stars = ratingContainer.querySelectorAll('.flex > svg'); // Знаходимо зірки у вкладеному div

	const fullStars = Math.floor(rating); // Кількість повних зірок
	const partialStar = rating - fullStars; // Дробова частина

	stars.forEach((star, index) => {
		const path = star.querySelector('path');
		// Спочатку робимо всі зірки прозорими
		path.setAttribute('fill', 'transparent');
		const extraPath = star.querySelector('path:nth-child(2)');
		if (extraPath) extraPath.remove(); // Видаляємо попереднє часткове заповнення

		if (index < fullStars) {
			// Повні зірки
			path.setAttribute('fill', '#FFC633');
		} else if (index === fullStars && partialStar > 0) {
			// Частково заповнена зірка з корекцією
			const visualCorrection = partialStar * 1.2; // Корекція для візуальної точності
			const clipPercentage = (1 - Math.min(visualCorrection, 1)) * 100; // Обчислюємо відсоток обрізки
			// Залишаємо базову зірку прозорою
			path.setAttribute('fill', 'transparent');
			// Додаємо часткове заповнення
			const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			newPath.setAttribute('d', path.getAttribute('d'));
			newPath.setAttribute('fill', '#FFC633');
			newPath.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
			star.appendChild(newPath);
		}
	});

	// Оновлення тексту рейтингу (опціонально)
	const ratingText = ratingContainer.querySelector('p span:first-child');
	if (ratingText) {
		ratingText.textContent = rating.toFixed(1); // Оновлюємо текст до "4.3"
	}
}

// Викликаємо функцію для оновлення зірок
updateStarRating();