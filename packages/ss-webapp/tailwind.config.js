module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        body: "url('/image/bg.gif')",
      },
      fontFamily: {
        body: [
          "'Press Start 2P'",
          "'Helvetica Neue'",
          'Arial',
          "'Hiragino Kaku Gothic ProN'",
          "'Hiragino Sans'",
          'Meiryo',
          'sans-serif',
        ],
        ps2p: ["'Press Start 2P'", 'cursive'],
      },
      animation: {
        pathmove: 'pathmove 1.4s ease-in-out infinite',
      },
      keyframes: {
        pathmove: {
          '0%': {
            height: 0,
            top: 0,
            opacity: 0,
          },
          '30%': {
            height: '40px',
            opacity: 1,
          },
          '100%': {
            height: 0,
            top: '80px',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
