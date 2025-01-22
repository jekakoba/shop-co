function fullSearchInput() {
	document.addEventListener("click", function (e) {
		const targetElement = e.target;
		if (targetElement.closest("#search")) {
			document.documentElement.classList.add("search-open");
			e.preventDefault();
		} else if (!targetElement.closest("#header")) {
			document.documentElement.classList.remove("search-open");
		}
	});
}

function searchFormClear() {
	const closeInputButton = document.querySelector("close-input");
	if (!closeInputButton) return
	if (inputSearch.value.trim()) {
		clearButton.hidden = false;
	} else {
		clearButton.hidden = true;
	}
}
document.addEventListener("DOMContentLoaded", function (e) {
	fullSearchInput();
	searchFormClear()
});


