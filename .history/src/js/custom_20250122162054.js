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

function closeSearchInput() {
	const inputSearch = document.querySelector("input[name='search']"),
		closeInputButton = document.querySelector(".close-input");
	if (!inputSearch && closeInputButton) return;

	inputSearch.addEventListener("input", function () {
		if (inputSearch.value.trim()) {
			closeInputButton.hidden = false;
		} else {
			closeInputButton.hidden = true;
		}
	});
}
document.addEventListener("DOMContentLoaded", function (e) {
	fullSearchInput();
	closeSearchInput()
});


