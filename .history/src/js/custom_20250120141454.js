function fullSearchInput() {
	document.addEventListener("click", function (e) {
		const targetElement = e.target;

		// Відкриття пошуку при кліку на кнопку з ID `search`
		if (targetElement.closest("#search")) {
			document.documentElement.classList.add("search-open");
			e.preventDefault();
		}
		// Закриття пошуку при кліку за межами `#header` або на іконку `_icon-serach`
		else if (
			!targetElement.closest("#header") ||
			targetElement.closest("._icon-serach")
		) {
			document.documentElement.classList.remove("search-open");
		}
	});
}

fullSearchInput();
