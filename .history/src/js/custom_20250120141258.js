function fullSearchInput() {
	document.addEventListener("click", function (e) {
		const targetElement = e.target;
		if (targetElement.closest("#search")) {
			document.documentElement.classList.add("search-open");
			e.preventDefault();
		} else if (!targetElement.closest("#header") && targetElement.closest("#header")) {
			document.documentElement.classList.remove("search-open");
		}
	});
}

fullSearchInput();
