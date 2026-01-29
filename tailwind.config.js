/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef9f5',
          100: '#fdf3eb',
          200: '#fae7d7',
          300: '#f7dbc3',
          400: '#f4cfaf',
          500: '#C9A96E',
          600: '#B89855',
          700: '#9C7927',
          800: '#805E1F',
          900: '#644317',
        },
        dark: {
          50: '#f0f5f5',
          100: '#d9e6e6',
          200: '#b3cccc',
          300: '#8cb3b3',
          400: '#669999',
          500: '#4d7a7a',
          600: '#3d6161',
          700: '#2d5555',
          800: '#1f4040',
          900: '#0f2424',
        },
        gold: {
          light: '#D4B886',
          DEFAULT: '#C9A96E',
          dark: '#B89855',
        },
        elegant: {
          cream: '#FAF7F0',
          beige: '#F5F1E8',
          brown: '#8B7355',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920')",
        'food-texture': "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920')",
      },
      boxShadow: {
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'elegant-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}
