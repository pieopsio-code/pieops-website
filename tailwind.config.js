/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#0EA5E9',
        'cyber-cyan': '#06B6D4',
        'neon-purple': '#6B46C1',
        'hot-pink': '#EC4899',
        'teal-bright': '#14B8A6',
        'orange-bright': '#FF6B35',
        'navy-dark': '#0F172A',
      },
      backgroundImage: {
        'gradient-purple-cyan': 'linear-gradient(135deg, #6B46C1 0%, #06B6D4 100%)',
        'gradient-teal-pink': 'linear-gradient(135deg, #14B8A6 0%, #EC4899 100%)',
        'gradient-blue-orange': 'linear-gradient(135deg, #0EA5E9 0%, #FF6B35 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%), radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%), radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%), radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            'box-shadow': '0 0 20px rgba(107, 70, 193, 0.5)',
          },
          '50%': {
            opacity: '0.8',
            'box-shadow': '0 0 40px rgba(107, 70, 193, 0.8)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
