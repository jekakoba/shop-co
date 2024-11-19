import postcss from 'postcss'

/** @type {import('tailwindcss').Config} */
export default {
	theme: {	
		screens: {
		'sm': '570px',
		'md': '767.98px',
		'lg': '992px',
		'lgMax': { 'max': '991.98px' },
	},
		extend: {
			colors: {
				'c-white-light': '#F0EEED',
				'c-yellow': '#FFC633',
				'c-red': '#F33',
				'c-red-100': 'rgba(255, 51, 51, 0.10)',
			},
			fontFamily: {
				'f-primary': ['Satoshi', 'sans-serif'],
				'f-secondary': ['IntegralCF', 'sans-serif']
			}
		}
	},
	plugins: [
		postcss
	],
	content: [
		'./src/**/*.{html,scss,css,js}',
	],
}