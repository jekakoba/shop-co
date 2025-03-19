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
				'c-white-200': '#F0F0F0',
				'c-gray': '#F0EEED',
				'c-yellow': '#FFC633',
				'c-hover': '#FFC633',
				'c-red': '#F33',
				'c-red-100': 'rgba(255, 51, 51, 0.10)',
				'old-price': 'rgba(255, 51, 51, 0.10)',
				'discount': 'rgba(255, 51, 51, 0.10);',
				product: {
					'c-brown': '#4F4631',
					'c-green': '#314F4A',
					'c-green-200': '#00C12B',
					'c-red': '#F50606',
					'c-yellow': '#F5DD06',
					'c-orange': '#F57906',
					'c-aqua': '#06CAF5',
					'c-blue': '#31344F',
					'c-blue-200': '#063AF5',
					'c-purple': '#7D06F5',
					'c-pink': '#F506A4',
					'c-white': '#fff',
					'c-black': '#000',
				}
			},
			fontFamily: {
				'f-primary': ['Satoshi', 'sans-serif'],
				'f-secondary': ['IntegralCF', 'sans-serif'],
				'f-icons': ['icons']
			},
			backgroundImage: {
				'decor-star': "url('@i/decors/vector.svg')",
				'radio-checked': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjUzMDYgNS4wMzA2M0w2LjUzMDYgMTMuMDMwNkM2LjQ2MDkyIDEzLjEwMDYgNi4zNzgxMyAxMy4xNTYgNi4yODY5NiAxMy4xOTM5QzYuMTk1OCAxMy4yMzE3IDYuMDk4MDYgMTMuMjUxMiA1Ljk5OTM1IDEzLjI1MTJDNS45MDA2NCAxMy4yNTEyIDUuODAyOSAxMy4yMzE3IDUuNzExNzMgMTMuMTkzOUM1LjYyMDU3IDEzLjE1NiA1LjUzNzc4IDEzLjEwMDYgNS40NjgxIDEzLjAzMDZMMS45NjgxIDkuNTMwNjNDMS44OTgzMyA5LjQ2MDg3IDEuODQyOTkgOS4zNzgwNCAxLjgwNTI0IDkuMjg2ODlDMS43Njc0OCA5LjE5NTc0IDEuNzQ4MDUgOS4wOTgwNCAxLjc0ODA1IDguOTk5MzhDMS43NDgwNSA4LjkwMDcyIDEuNzY3NDggOC44MDMwMiAxLjgwNTI0IDguNzExODdDMS44NDI5OSA4LjYyMDcyIDEuODk4MzMgOC41Mzc4OSAxLjk2ODEgOC40NjgxM0MyLjAzNzg2IDguMzk4MzcgMi4xMjA2OSA4LjM0MzAyIDIuMjExODQgOC4zMDUyN0MyLjMwMjk5IDguMjY3NTEgMi40MDA2OSA4LjI0ODA4IDIuNDk5MzUgOC4yNDgwOEMyLjU5ODAxIDguMjQ4MDggMi42OTU3MSA4LjI2NzUxIDIuNzg2ODYgOC4zMDUyN0MyLjg3ODAxIDguMzQzMDIgMi45NjA4MyA4LjM5ODM3IDMuMDMwNiA4LjQ2ODEzTDUuOTk5OTcgMTEuNDM3NUwxMy40NjkzIDMuOTY5MzhDMTMuNjEwMiAzLjgyODQ4IDEzLjgwMTMgMy43NDkzMyAxNC4wMDA2IDMuNzQ5MzNDMTQuMTk5OSAzLjc0OTMzIDE0LjM5MSAzLjgyODQ4IDE0LjUzMTggMy45NjkzOEMxNC42NzI3IDQuMTEwMjggMTQuNzUxOSA0LjMwMTM3IDE0Ljc1MTkgNC41MDA2M0MxNC43NTE5IDQuNjk5ODkgMTQuNjcyNyA0Ljg5MDk4IDE0LjUzMTggNS4wMzE4OEwxNC41MzA2IDUuMDMwNjNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K')",
				'radio-checked-black': "url("data: image / svg + xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSJub25lIj4NCjxwYXRoIGQ9Ik0xNC41MzA2IDUuMDMwNjNMNi41MzA2IDEzLjAzMDZDNi40NjA5MiAxMy4xMDA1IDYuMzc4MTMgMTMuMTU2IDYuMjg2OTYgMTMuMTkzOUM2LjE5NTggMTMuMjMxNyA2LjA5ODA2IDEzLjI1MTIgNS45OTkzNSAxMy4yNTEyQzUuOTAwNjQgMTMuMjUxMiA1LjgwMjkgMTMuMjMxNyA1LjcxMTczIDEzLjE5MzlDNS42MjA1NyAxMy4xNTYgNS41Mzc3OCAxMy4xMDA1IDUuNDY4MSAxMy4wMzA2TDEuOTY4MSA5LjUzMDYzQzEuODk4MzMgOS40NjA4NyAxLjg0Mjk5IDkuMzc4MDQgMS44MDUyNCA5LjI4Njg5QzEuNzY3NDggOS4xOTU3NCAxLjc0ODA1IDkuMDk4MDQgMS43NDgwNSA4Ljk5OTM4QzEuNzQ4MDUgOC45MDA3MiAxLjc2NzQ4IDguODAzMDIgMS44MDUyNCA4LjcxMTg3QzEuODQyOTkgOC42MjA3MiAxLjg5ODMzIDguNTM3ODkgMS45NjgxIDguNDY4MTNDMi4wMzc4NiA4LjM5ODM3IDIuMTIwNjkgOC4zNDMwMiAyLjIxMTg0IDguMzA1MjdDMi4zMDI5OSA4LjI2NzUxIDIuNDAwNjkgOC4yNDgwOCAyLjQ5OTM1IDguMjQ4MDhDMi41OTgwMSA4LjI0ODA4IDIuNjk1NzEgOC4yNjc1MSAyLjc4Njg2IDguMzA1MjdDMi44NzgwMSA4LjM0MzAyIDIuOTYwODMgOC4zOTgzNyAzLjAzMDYgOC40NjgxM0w1Ljk5OTk3IDExLjQzNzVMMTMuNDY5MyAzLjk2OTM4QzEzLjYxMDIgMy44Mjg0OCAxMy44MDEzIDMuNzQ5MzMgMTQuMDAwNiAzLjc0OTMzQzE0LjE5OTkgMy43NDkzMyAxNC4zOTEgMy44Mjg0OCAxNC41MzE4IDMuOTY5MzhDMTQuNjcyNyA0LjExMDI4IDE0Ljc1MTkgNC4zMDEzNyAxNC43NTE5IDQuNTAwNjNDMTQuNzUxOSA0LjY5OTg5IDE0LjY3MjcgNC44OTA5OCAxNC41MzE4IDUuMDMxODhMMTQuNTMwNiA1LjAzMDYzWiIgZmlsbD0iYmxhY2siLz4NCjwvc3ZnPg== ");",
		},
		borderRadius: {
			'primary': '40px',
			'big': '62px',
			'middle': '20px',
			'small': '13px',
		},
		aspectRatio: {
			'2/1': '2 / 1',
			'3/2': '3 / 2',
			'slide-preview-prod': '152 / 167',
			'slide-main-prod': '444 / 550'
		},
	}
},
plugins: [
	plugin(function ({ addVariant }) {
		addVariant('not-last', '&:not(:last-child)');
		addVariant('hover', '@media (hover: hover) { &:hover }');
	}),

],
	content: [
		'./src/**/*.{html,scss,css,js}',
		'./node_modules/flowbite/**/*.js'
	],
}