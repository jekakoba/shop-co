import { Tabs } from 'flowbite';

const tabsElement = document.getElementById('tabs-example');
const tabElements = [
	{
		id: 'profile',
		triggerEl: document.querySelector('#profile-tab-example'),
		targetEl: document.querySelector('#profile-example'),
	},
	{
		id: 'dashboard',
		triggerEl: document.querySelector('#dashboard-tab-example'),
		targetEl: document.querySelector('#dashboard-example'),
	},
	{
		id: 'settings',
		triggerEl: document.querySelector('#settings-tab-example'),
		targetEl: document.querySelector('#settings-example'),
	},
	{
		id: 'contacts',
		triggerEl: document.querySelector('#contacts-tab-example'),
		targetEl: document.querySelector('#contacts-example'),
	},
];

// options with default values
const options = {
	defaultTabId: 'settings',
	activeClasses:
		'border-black  text-black',
	inactiveClasses:
		'border-black/10 text-black/60 transition-colors duration-300 font-normal',
	onShow: () => {
		console.log('tab is shown');
	},
};

const instanceOptions = {
	id: 'tabs-example',
	override: true
};