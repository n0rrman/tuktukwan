import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "heroBg": "#2290EA",

        "microsoft": "#00AEF0",
        "github": "#333", 
        "google": "#da483b",
        "line": "#06C755",


      },
      keyframes: {
        scaleIn: {
          '0%': {
            transform: 'scale(0.4)'
          },
          '75%': {
            transform: 'scale(1.02)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        floatRight: {
          '0%': { transform: 'translateX(-50vw)', opacity: "0" },
          '10%': { opacity: "1" },
          '90%': { opacity: "1" },
          '100%': { transform: 'translateX(150vw)', opacity: "0"  }, 
        },
      },
      animation: {
        scaleIn: 'scaleIn 0.3s ease-out',
        floatRight1: 'floatRight 60s linear infinite',
        floatRight2: 'floatRight 70s linear infinite',
        floatRight3: 'floatRight 80s linear infinite',
        floatRight4: 'floatRight 90s linear infinite',
        floatRight5: 'floatRight 100s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
