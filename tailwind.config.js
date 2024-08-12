/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {
			colors: {
				primary: '#0F121D',
				primaryLight: '#131624',
				primaryLighter: '#151A2A',
				secondary: '#201C40',
				secondaryLight: '#292546',
				secondaryLighter: '#201C4080',
				"purple": {
					"box": '#6A6A9F',
					"table": '#201C40'
				},
				"red": {
					600: "#B80042",
					"roulette": "#dd375f"
				},
				"gray": {
					800: "#1E292E",
				}
			},
			keyframes: {
				overlayShow: {
					from: {opacity: '0'},
					to: {opacity: '1'},
				},
				contentShow: {
					from: {
						opacity: '0',
						transform: 'translate(-50%, -48%) scale(0.96)'
					},
					to: {
						opacity: '1',
						transform: 'translate(-50%, -50%) scale(1)'
					},
				},
			},
			animation: {
				overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
			},
		},
	},
	plugins: [],
}

