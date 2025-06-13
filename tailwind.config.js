// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      maxHeight: {
        '40': '10rem', // or adjust for longer answers
        '60': '15rem',
        '80': '20rem',
        'full': '100%'  // just in case you want full height
      },
      transitionProperty: {
        'max-height': 'max-height' // enable smooth max-height transitions
      }
    },
  },
  plugins: [],
  
}
