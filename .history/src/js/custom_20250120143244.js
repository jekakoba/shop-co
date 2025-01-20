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
}

document.addEventListener("DOMContentLoaded", function (e) {
	fullSearchInput();
	showIconInSearchInput()
});


