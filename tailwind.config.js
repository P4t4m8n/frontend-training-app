/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "trainer-outlet": "calc(100% - 3rem)",
      },
    },
  },
  plugins: [],
};
