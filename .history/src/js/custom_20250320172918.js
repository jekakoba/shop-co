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
		if (window.matchMedia("(max-width: 767px)").matches) {
			input.placeholder = mobilePlaceholder;
		} else {
			input.placeholder = "Search for products...";
		}
	});
}
function showFilter() {
	const filter = document.querySelector('[data-filter]')
	let filterStatus = false
	const filterButton = document.querySelector('[data-show-filter]')
	if (!filter && !filterButton) return;
	filterButton.addEventListener('click', (e) => {
		document.documentElement.classList.toggle('show-filter')
		filterStatus = true
		document.documentElement.classList.add('lock');
	})
	function closeFilter() {
		document.addEventListener('click', (e) => {
			if (e.target.closest('[data-close-filter]') || (!e.target.closest('[data-filter]') && !e.target.closest('[data-show-filter]'))) {
				document.documentElement.classList.remove('show-filter')
				filterStatus = false
				document.documentElement.classList.remove('lock')
			}
		})
	}
	closeFilter()
}
document.addEventListener("DOMContentLoaded", function (e) {
	fullSearchInput();
	searchFormClear()
	updatePlaceholder();
	showFilter()
});
window.addEventListener("resize", updatePlaceholder);
