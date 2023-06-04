/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#bc4527",

          secondary: "#e56290",

          accent: "#6d56ff",

          neutral: "#31273f",

          "base-100": "#e9dfec",

          info: "#667ee1",

          success: "#5dda9c",

          warning: "#9c6911",

          error: "#ec416e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
