/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      resonsive: true,
      colors: {
        c_Orange: "#eb5939",
        c_White: "#b7ab98",
        c_Black: "#0D0D0D",
      },
      backgroundImage: {
        "chung-myung": "url('./src/assets/mounthua.jpg')",
        superhuman: "url('./src/assets/existence.jpg')",
      },
      animation: {
        blob: "blob 30s infinite",
        blob2: "blob2 30s infinite", // Define the second animation
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(90px, -80px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        blob2: {
          // Define the keyframes for the second animation
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
