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
		'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
	inactiveClasses:
		'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
	onShow: () => {
		console.log('tab is shown');
	},
};

const instanceOptions = {
	id: 'tabs-example',
	override: true
};