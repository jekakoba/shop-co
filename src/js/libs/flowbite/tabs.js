

// const tabsElement = document.getElementById('default-tab');
// const tabElements = [
// 	{
// 		id: 'product-detail',
// 		triggerEl: document.querySelector('#product-detail-tab-button'),
// 		targetEl: document.querySelector('#product-detail-tab'),
// 	},
// 	{
// 		id: 'rating',
// 		triggerEl: document.querySelector('#rating-tab-button'),
// 		targetEl: document.querySelector('#rating-tab'),
// 	},
// 	{
// 		id: 'faq',
// 		triggerEl: document.querySelector('#faq-tab-button'),
// 		targetEl: document.querySelector('#faq-tab'),
// 	},
// ];

// // options with default values
// const options = {
// 	defaultTabId: 'rating',
// 	activeClasses: 'border-black text-black',
// 	inactiveClasses: 'border-black/10 text-black/60 transition-colors duration-300 font-normal',
// 	onShow: () => {
// 		console.log('tab is shown');
// 	},
// };

// const instanceOptions = {
// 	id: 'default-tab',
// 	override: true
// };

// window.addEventListener("DOMContentLoaded", function (e) {
// 	const tabs = new Tabs(tabsElement, tabElements, options, instanceOptions);
// });