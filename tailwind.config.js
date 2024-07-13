const fontSize = {
  'xs': 'var(--text-xs)',
  'sm': 'var(--text-sm)',
  'md': 'var(--text-md)',
  'lg': 'var(--text-lg)',
  'xl': 'var(--text-xl)',
  '2xl': 'var(--text-2xl)',
  '3xl': 'var(--text-3xl)',
  '4xl': 'var(--text-4xl)',
}

const space = {
  'xs': 'var(--space-xs)',
  'sm': 'var(--space-sm)',
  'md': 'var(--space-md)',
  'lg': 'var(--space-lg)',
  'xl': 'var(--space-xl)',
  '2xl': 'var(--space-2xl)',
  '3xl': 'var(--space-3xl)',
  '4xl': 'var(--space-4xl)',
}

const colors = {
  'primary': 'var(--primary-color)',
  'secondary': 'var(--secondary-color)',
  'tertiary': 'var(--tertiary-color)',
  'primary-grey': 'var(--primary-grey-color)',
  'secondary-grey': 'var(--secondary-grey-color)',
  'tertiary-grey': 'var(--tertiary-grey-color)',
  'primary-light': 'var(--primary-light-color)',
  'secondary-light': 'var(--secondary-light-color)',
  'tertiary-light': 'var(--tertiary-light-color)',
  'primary-dark': 'var(--primary-dark-color)',
  'secondary-dark': 'var(--secondary-dark-color)',
  'tertiary-dark': 'var(--tertiary-dark-color)',
  'primary-border': 'var(--primary-border-color)',
  'secondary-border': 'var(--secondary-border-color)',
  'tertiary-border': 'var(--tertiary-border-color)',
  'primary-text': 'var(--primary-text-color)',
  'secondary-text': 'var(--secondary-text-color)',
  'tertiary-text': 'var(--tertiary-text-color)',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : colors,
    },
    fontSize : fontSize,
    spacing : space,
    fontFamily : {
      sans : 'var(--primary-font)',
      primary  : 'var(--primary-font)',
      secondary  : 'var(--secondary-font)',
    },
    container :{
      center : true
    }
  },
  plugins: [],
}