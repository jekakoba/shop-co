// import postcss from 'postcss'
import plugin from 'tailwindcss/plugin';
/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		screens: {
			'sm': '571px',
			'smMax': { 'max': '570.98px' },
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
				'c-gray': '#F0EEED',
				'c-yellow': '#FFC633',
				'c-red': '#F33',
				'c-red-100': 'rgba(255, 51, 51, 0.10)',
				'old-price': 'rgba(255, 51, 51, 0.10)',
				'discount': 'rgba(255, 51, 51, 0.10);',
			},
			fontFamily: {
				'f-primary': ['Satoshi', 'sans-serif'],
				'f-secondary': ['IntegralCF', 'sans-serif']
			},
			backgroundImage: {
				'decor-star': "url('@i/decors/vector.svg')",
			},
			borderRadius: {
				'primary': '40px',
				'big': '62px',
				'middle': '20px',
				'small': '13px',
			},
			aspectRatio: {
				'2/1': '2 / 1',
				'3/1': '3 / 3',
			},
		}
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('not-last', '&:not(:last-child)');
		}),
	],
	content: [
		'./src/**/*.{html,scss,css,js}',
	],
}