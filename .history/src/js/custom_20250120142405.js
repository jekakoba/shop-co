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

}

document.addEventListener("DOMContentLoaded", function (e) {
	fullSearchInput();
});


