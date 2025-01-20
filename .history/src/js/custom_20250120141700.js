function fullSearchInput() {
	document.addEventListener("click", function (e) {
		const targetElement = e.target;

		// Відкриття пошуку
		if (targetElement.closest("#search")) {
			document.documentElement.classList.add("search-open");
			e.preventDefault();
			return;
		}

		// Закриття пошуку
		if (
			!targetElement.closest("#header") &&
			document.documentElement.classList.contains("search-open")
		) {
			document.documentElement.classList.remove("search-open");
			return;
		}

		// Якщо клік на іконку `_icon-serach`
		if (targetElement.closest("._icon-serach")) {
			document.documentElement.classList.remove("search-open");
		}
	});
}

fullSearchInput();
