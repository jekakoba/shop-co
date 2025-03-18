import { Accordion } from 'flowbite';
const accordionElement = document.getElementById('accordion-filter');
const accordionItems = [
	{
		id: 'accordion-price-heading-1',
		triggerEl: document.querySelector('#accordion-price-heading-1'),
		targetEl: document.querySelector('#accordion-price-body-1'),
		active: true
	},
	{
		id: 'accordion-colors-heading-2',
		triggerEl: document.querySelector('#accordion-colors-heading-2'),
		targetEl: document.querySelector('#accordion-colors-body-2'),
		active: false
	},
	{
		id: 'accordion-size-heading-3',
		triggerEl: document.querySelector('#accordion-size-heading-3'),
		targetEl: document.querySelector('#accordion-size-body-3'),
		active: false
	}
];

// options with default values
const options = {
	alwaysOpen: true,
	activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
	inactiveClasses: 'text-gray-500 dark:text-gray-400',
	onOpen: (item) => {
		console.log('accordion item has been shown');
		console.log(item);
	},
	onClose: (item) => {
		console.log('accordion item has been hidden');
		console.log(item);
	},
	onToggle: (item) => {
		console.log('accordion item has been toggled');
		console.log(item);
	},
};

// instance options object
const instanceOptions = {
	id: 'accordion-example',
	override: true
};

const filterAccordion = new Accordion(accordionElement, accordionItems, options, instanceOptions);