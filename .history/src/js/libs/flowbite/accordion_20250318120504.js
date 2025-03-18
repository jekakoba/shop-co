
const accordionElements = document.querySelectorAll('[data-spoiler-filter]');
accordionElements.forEach((element) => {
	new Accordion(element);
});