/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem', 
        xl: '2rem',  
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1200px",
    },
    extend: {
      spacing: {
        '4.5': '1.125rem',
      },
      colors: {
        primary: "#F17E3F",
        black: "#202020",
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
