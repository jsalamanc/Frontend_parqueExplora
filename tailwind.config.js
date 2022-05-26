module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      smx: "320px",
      smxc: "1550px",
    },
    colors: {
      'default': '#a560d1',
      'slate': '#f8fafc'
    },
    borderWidth: {
      '1': '1px',
    },
    width: {
      '80%': '80%',
      '30r': '30rem',
    }
  },
  plugins: [],
}
