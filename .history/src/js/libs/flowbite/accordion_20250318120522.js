
const accordionElements = document.querySelectorAll('[data-spoiler-filter]');
console.log('jeasda');
accordionElements.forEach((element) => {
	new Accordion(element);
});