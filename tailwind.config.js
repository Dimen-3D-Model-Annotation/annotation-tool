/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hover: 'rgba(211, 211, 211, 0.1)',
        base: 'rgb(17, 24, 39)',
        
      },

      fontSize: {
        '10px' :'10px', 
        '11px': '11px', 
        '12px': '12px', 
        '14px': '14px',     
        '16px': '16px', 
        '18px': '18px',
        '20px': '20px',
        '24px': '24px', 
        '30px': '30px',
        
      },
    },
  },
  plugins: [],
};
