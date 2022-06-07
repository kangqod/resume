module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      padding: {
        17: '4.2rem'
      },
      lineHeight: {
        15: '3.5rem'
      },
      maxWidth: {
        300: '18.75rem'
      },
      listStyleType: {
        circle: 'circle'
      }
    }
  },
  plugins: [require('daisyui')]
}
