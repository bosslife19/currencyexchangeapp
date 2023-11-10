/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      padding:{
        "padd-2" : "30px 48px 0px 48px",
        "padd-8" : "8px 40px 8px 40px",
        "padd-3" : "3px 12px 3px 12px",
        "padd-38" : "3px 8px 3px 8px",
        "padd-4" : "4px 8px 4px 8px",
        "padd-0" : "0px 4px 0px 4px",
        "padd-20" : "8px 20px 8px 20px"
      },
      flex:{
        "flex" : "1 0 0"
      },
      boxShadow:{
        "boxxing": "0px 6px 3px rgba(0, 0, 0, 0.3)"
      },
      fontFamily:{
        "sanss" : "Notosans sans-serif"
      },
      colors:{
        "blued" : "var(--signiture, #0369A1)",
        "rgbas" : "rgba(3, 105, 161, 0.50)",
        "grayed" : "#667080",
        "hastTag" : "rgba(102, 112, 128, 0.30)",
        "reds" : "#FF0000",
        "redpink" : "#f87171",
        "lightDark" : "#374151",
        "lightBlue" : "#60A5FA",
        "yellowed" : "#F59E0B",
        "boardyelllow" : "#fffbeb",
        "darkBlue" : "#1A4994",
      },
      borderWidth:{
        "bordy-0" : "0px 0px 1px 0px"
      },
      borderRadius:{
        "roundin": "0px 0px 10px 10px"
      }
    },
  },
  plugins: [],
}
