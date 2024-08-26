/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            white: '#fff',
            black: '#000',
        },
        fontFamily: {
            sans: ['"Manrope"', ...defaultTheme.fontFamily.sans],
        },

        extend: {},
    },
    plugins: [],
}
