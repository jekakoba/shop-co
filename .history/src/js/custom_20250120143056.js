function fullSearchInput() {
	document.addEventListener("click", function (e) {
		const targetElement = e.target;
		if (targetElement.closest("#search")) {
			document.documentElement.classList.add("search-open");
			e.preventDefault();
		} else if (!targetElement.closest("#header") || targetElement.closest("_icon-serach")) {
			document.documentElement.classList.remove("search-open");
		}
	});
}

function showIconInSearchInput() {
	const inputSearch = document.querySelector("input[name='search']"); // Знаходимо правильний інпут
	if (!inputSearch) return;

	const clearButton = document.querySelector("#search-form-clear"); // Знаходимо кнопку очистки
	if (!clearButton) return;

	inputSearch.addEventListener("input", function () {
		// Показуємо або ховаємо кнопку очистки залежно від введеного значення
		if (inputSearch.value.trim()) {
			clearButton.hidden = true;
		} else {
			clearButton.hidden = false;
		}
	});
}

document.addEventListener("DOMContentLoaded", function (e) {
	fullSearchInput();
	showIconInSearchInput()
});


