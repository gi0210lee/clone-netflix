const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {},
    },
  },
  plugins: [],
}
