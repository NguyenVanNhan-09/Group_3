/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         colors: {
            primary: "#356C07",
            secondary: "#68C114",
            ctaColor: "#E10000",
            headingColor: "#1A1A1A",
            breadcrumColor: "#4F4F4F",
            textColor: "#4F4F4F",
            subTextColor: "#4F4F4F99",
         },
         screens: {
            "max-mb": { max: "376px" },
            "min-mb": { min: "376px" },
            'max-sm': {'max': '640px'},
            'max-md': {'max': '768px'},
            'max-lg': {'max': '1024px'},
            'max-xl': {'max': '1280px'},
            'max-1366px':{'max': '1366px'},
            'max-lg-xl': {'max': '1550px'},
          },
      },
      fontFamily: {
         nunito: ["Nunito", "sans-serif"],
         dancing: ["Dancing Script", "cursive"],
      },
   },
   plugins: [],
};
