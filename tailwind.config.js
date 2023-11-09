/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //In Documentation : Customization > Sustomizing Screens
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      "xs": {"max": "450px"},

    },
    extend: {
      backgroundColor:{
        'main-bg': '#FAFBFB',
        "transparent-black" : "rgba(0,0,0,0.3)",
        "transparent-white1" : "rgba(255,255,255,0.1)",
        "transparent-white2" : "rgba(255,255,255,0.2)",
        "transparent-white3" : "rgba(255,255,255,0.3)",
        "transparent-white4" : "rgba(255,255,255,0.4)",
        "transparent-white5" : "rgba(255,255,255,0.5)",
        "transparent-white6" : "rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        "imgRed": "url('/src/images/bg-red.PNG')",
      },
      borderColor: {
        "transparent-white1" : "rgba(255,255,255,0.1)",
        "transparent-white2" : "rgba(255,255,255,0.2)",
        "transparent-white3" : "rgba(255,255,255,0.3)",
        "transparent-white4" : "rgba(255,255,255,0.4)",
        "transparent-white5" : "rgba(255,255,255,0.5)",
        "transparent-white6" : "rgba(255,255,255,0.6)",
      },
      zIndex:{
        "1":"1",
        "2":"2",
        "3":"3",
        "4":"4",
        "5":"5",
        "6":"6",
        "7":"7",
        "8":"8",
      }
    },
  },
  plugins: [],
}