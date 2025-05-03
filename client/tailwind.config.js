// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx}'
    ],
    theme: {
      extend: {
        screens: {
          'xs': '320px',
        },
      },
    },
    plugins: [],
  }