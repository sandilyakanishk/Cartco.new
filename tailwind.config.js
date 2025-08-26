/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          50: '#ffffff',
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
          950: '#0f172a',
        },
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-in': 'bounceIn 0.6s ease-out forwards',
        'parallax-float': 'parallaxFloat 8s ease-in-out infinite',
        'subtle-drift': 'subtleDrift 12s ease-in-out infinite',
        'ultra-float': 'ultraFloat 10s ease-in-out infinite',
        'reverse-drift': 'reverseDrift 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        parallaxFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-15px) translateX(5px)' },
          '66%': { transform: 'translateY(10px) translateX(-8px)' },
        },
        subtleDrift: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        ultraFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '25%': { transform: 'translateY(-25px) translateX(10px) scale(1.05)' },
          '50%': { transform: 'translateY(-15px) translateX(-5px) scale(0.95)' },
          '75%': { transform: 'translateY(-30px) translateX(15px) scale(1.02)' },
        },
        reverseDrift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(20px) translateX(-10px) rotate(-1deg)' },
          '66%': { transform: 'translateY(-10px) translateX(8px) rotate(1deg)' },
        },
      }
    },
  },
  plugins: [],
};