function fullSearchInput() {
	document.addEventListener("click", function (e) {
		const targetElement = e.target;
		if (targetElement.closest("#search")) {
			document.documentElement.classList.add("search-open");
			e.preventDefault();
		} else if (targetElement.closest("[data-close-search]")) {
			document.documentElement.classList.remove("search-open");
		}
	});
}

function searchFormClear() {
	const inputSearch = document.querySelector("input[name='search']"),
		clearButton = document.querySelector("#search-form-clear");
	if (!inputSearch && clearButton) return;

	inputSearch.addEventListener("input", function () {
		if (inputSearch.value.trim()) {
			clearButton.hidden = false;
		} else {
			clearButton.hidden = true;
		}
	});
	clearButton.addEventListener("click", function (e) {
		inputSearch.value = "";
		clearButton.hidden = true;
	});
}
function updatePlaceholder() {
	const inputsPlaceholder = document.querySelectorAll('[data-switch-placeholder]');
	if (!inputsPlaceholder.length) return;
	inputsPlaceholder.forEach(input => {
		const mobilePlaceholder = input.getAttribute('data-mobile-placeholder');
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			input.placeholder = mobilePlaceholder;
		} else {
			input.placeholder = "Search...";
		}
	});
}
document.addEventListener("DOMContentLoaded", function (e) {
	fullSearchInput();
	searchFormClear()
});


window.addEventListener("resize", updatePlaceholder);