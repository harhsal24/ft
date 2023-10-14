/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#BF6157',
        'secondary':'#F5EEE8',
        'text-white':'#F7EEE7',
        'black-2':'#0C0C0D'

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow:{
        'cardShadow':'0px 4px 10px 0px rgba(0, 0, 0, 0.05)',
        'photoShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'

      }
      
    },
  },
  plugins: [],
}
