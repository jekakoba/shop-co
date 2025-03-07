function updateStarRating(rating) {
	const stars = document.querySelectorAll('#star-rating svg');
	const fullStars = Math.floor(rating);
	const partialStar = rating - fullStars;

	stars.forEach((star, index) => {
		const path = star.querySelector('path');
		path.setAttribute('fill', '#E0E0E0');
		const extraPath = star.querySelector('path:nth-child(2)');
		if (extraPath) extraPath.remove();

		if (index < fullStars) {
			path.setAttribute('fill', '#FFC633');
		} else if (index === fullStars && partialStar > 0) {
			// Корекція для візуальної точності
			const visualCorrection = partialStar * 1.2; // Збільшуємо заповнення на 20% для компенсації форми
			const clipPercentage = (1 - Math.min(visualCorrection, 1)) * 100; // Обмежуємо до 100%
			const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			newPath.setAttribute('d', path.getAttribute('d'));
			newPath.setAttribute('fill', '#FFC633');
			newPath.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
			star.appendChild(newPath);
		}
	});
}

// Тестуємо
updateStarRating(4.5); // Половина зірки виглядатиме ближче до 50%