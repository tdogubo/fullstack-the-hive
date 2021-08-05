module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      right: "right",
    },
    extend: {},
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      borderStyle: ["hover"],
      transitionProperty: ["hover", "focus"],
      transform: ["hover", "focus"],
      cursor: ["hover", "focus"],
    },
  },
  plugins: [],
};
