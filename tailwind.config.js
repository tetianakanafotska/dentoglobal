/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            white: '#fff',
            black: '#000',
            yellow: '#F7BB63',
        },
        fontFamily: {
            sans: ['"Manrope"', ...defaultTheme.fontFamily.sans],
        },

        extend: {},
    },
    plugins: [],
}
