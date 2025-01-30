
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend:{ 
       scale:{

        '-1': '-1', 
      },
      backdropblur:{ 
         lg:'50', 
      },
    },
  },
  plugins: [],
};
