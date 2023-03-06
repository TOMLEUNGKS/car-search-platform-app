module.exports = {
  content: [],
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    backgroundImage: {
      'front-drive': "url('../../public/assets/front-background.png')",
    },

    extend: {
      colors: {
        primary: "var(--ion-color-primary)",
        secondary: "var(--ion-color-secondary)"
      },
      borderRadius: {
        'large': '12px',
      },
      minHeight: {
        '24': '6rem',
      },
      maxWidth: {
        '56': '224px',
      }



    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
