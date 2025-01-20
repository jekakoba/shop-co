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
	const inputSearch = document.querySelector("#search");
	if (!inputSearch) return

	inputSearch.addEventListener("input", function (e) {
		const targetElement = e.target;
		if (targetElement.value) {
			document.querySelector("_icon-serach").hidden = true;
		} else {
			document.querySelector("_icon-serach").hidden = false;
		}
	});
}

document.addEventListener("DOMContentLoaded", function (e) {
	fullSearchInput();
});


