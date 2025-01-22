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
	const inputSearch = document.querySelector("input[name='search']"),
		closeInputButton = document.querySelector(".close-input");
	if (!inputSearch && closeInputButton) return;

	inputSearch.addEventListener("input", function () {
		if (inputSearch.value.trim()) {
			clearButton.hidden = false;
		} else {
			clearButton.hidden = true;
		}
	});
}
document.addEventListener("DOMContentLoaded", function (e) {
	fullSearchInput();
	searchFormClear()
});


