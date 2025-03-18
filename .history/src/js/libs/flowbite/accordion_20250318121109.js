import { Accordion } from 'flowbite';
document.addEventListener('DOMContentLoaded', () => {
	const accordionElements = document.querySelectorAll('[data-spoiler-filter]');
	accordionElements.forEach((element) => {
		new Accordion(element);
	});
});