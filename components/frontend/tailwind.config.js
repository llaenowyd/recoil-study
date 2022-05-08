const colors = require('tailwindcss/colors')

// primary: withOpacityValue('--color-primary'),
// secondary: withOpacityValue('--color-secondary'),
// const withOpacityValue =
//   variable =>
//   ({ opacityValue }) =>
//     opacityValue
//       ? `rgb(var(${variable}) / ${opacityValue})`
//       : `rgb(var(${variable}) / 1)`

module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        'text-primary': 'var(--text-primary)',
        shadow: 'var(--color-shadow)',
        sky: colors.sky,
        teal: colors.teal,
      },
      fontSize: {
        '2xs': ['0.6rem', { lineHeight: '0.75rem' }],
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        control: 'var(--bg-control)',
        'control-disabled': 'var(--bg-control-disabled)',
        obscure: 'var(--bg-obscure)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        control: 'var(--text-control)',
        'control-disabled': 'var(--text-control-disabled)',
      },
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    screens: {
      sm: '526px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [],
}
