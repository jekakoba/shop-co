// import postcss from 'postcss'
import plugin from 'tailwindcss/plugin';
/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		screens: {
			'smMax': { 'max': '570.98px' },
			'sm': '571px',
			'md': '768px',
			'mdMax': { 'max': '767.98px' },
			'lg': '991.98px',
			'lgMax': { 'max': '991.98px' },
			'laptop': '1024px',
			'pc': '1200px'
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
			},
			backgroundImage: {
				'decor-star': "url('@i/decors/vector.svg')",
			},
		}
	},
	plugins: [
		plugin(function ({ addVariant }) {
			// addVariant('not-last', '&:not(:last-child)');
			addVariant('not-last-mb', '&:not(:last-child)'); // Додайте новий варіант
		}),
	],
	content: [
		'./src/**/*.{html,scss,css,js}',
	],
}