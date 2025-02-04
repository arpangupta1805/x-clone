/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      screens: {
        // Custom height breakpoints
        'nrm': { 'raw': '(min-width: 1000px)' },
        'h-md': { 'raw': '(min-height: 768px)' },
        'h-lg': { 'raw': '(min-height: 1024px)' },
      },
    },
  },
  plugins: [],
}

