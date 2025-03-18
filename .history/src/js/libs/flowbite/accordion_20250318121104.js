import { Accordion } from 'flowbite';
document.addEventListener('DOMContentLoaded', () => {
	console.log('asdasd');
	const accordionElements = document.querySelectorAll('[data-spoiler-filter]');
	accordionElements.forEach((element) => {
		new Accordion(element);
	});
});