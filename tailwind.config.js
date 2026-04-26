/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['EB Garamond', 'serif'],
      },
      colors: {
        dark: '#0f0f0f',
        light: '#f5f3ef',
      },
    },
  },
  plugins: [],
}
