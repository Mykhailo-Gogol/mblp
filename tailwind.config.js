/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        heartbeat: 'heartbeat 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '0.9',
          },
        },
      },
    },
  },
  plugins: [],
}
