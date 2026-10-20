/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5EFE6',
          200: '#EDE3D5',
          300: '#DFD2BF',
          400: '#CFC0A8',
        },
        espresso: {
          50: '#F7F5F3',
          100: '#E6E1DC',
          200: '#C9BEB5',
          300: '#9E8E82',
          400: '#6E5F54',
          500: '#50433A',
          600: '#3B3028',
          700: '#2C231D',
          800: '#1F1813',
          900: '#140E0A',
          950: '#0C0806',
        },
        terracotta: {
          50: '#FDF6F3',
          100: '#F9E8E1',
          200: '#F2CEBF',
          300: '#E8AD97',
          400: '#D68266',
          500: '#C25E43',
          600: '#AB482F',
          700: '#8B3620',
          800: '#6E2D1B',
          900: '#552416',
        },
        olive: {
          50: '#F5F7F3',
          100: '#E7ECE3',
          200: '#CFDBC7',
          300: '#B0C4A4',
          400: '#8FA880',
          500: '#6C875C',
          600: '#526A44',
          700: '#3F5334',
          800: '#2F3E27',
          900: '#232E1D',
        },
        sand: {
          100: '#EAE1D2',
          200: '#DDD1BD',
          300: '#C7B79E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'widest-xl': '0.2em',
      },
      backgroundImage: {
        'noise-subtle': "radial-gradient(rgba(31, 24, 19, 0.03) 1px, transparent 0)",
      }
    },
  },
  plugins: [],
}
