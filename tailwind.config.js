/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0d1547',
          darknavy: '#0a0f35',
          blue: '#1B3FBE',
          brightblue: '#1B3FBE',
          green: '#00d4a0',
          lightbg: '#eef0fb',
          cardbg: '#f5f7ff',
          dark: '#141b2d',
          darkcard: '#1e2840',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'orbit-1': 'orbit1 10s linear infinite',
        'orbit-2': 'orbit2 15s linear infinite',
        'orbit-3': 'orbit3 12s linear infinite reverse',
        'data-flow': 'dataFlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 25s linear infinite',
        'ping-slow': 'ping 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'draw': 'draw 2s ease-in-out infinite',
        'waveform': 'waveform 1.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,91,255,0.3)', transform: 'scale(1)' },
          '50%': { boxShadow: '0 0 50px rgba(59,91,255,0.7)', transform: 'scale(1.03)' },
        },
        orbit1: {
          '0%': { transform: 'rotate(0deg) translateX(110px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(110px) rotate(-360deg)' },
        },
        orbit2: {
          '0%': { transform: 'rotate(45deg) translateX(150px) rotate(-45deg)' },
          '100%': { transform: 'rotate(405deg) translateX(150px) rotate(-405deg)' },
        },
        orbit3: {
          '0%': { transform: 'rotate(90deg) translateX(80px) rotate(-90deg)' },
          '100%': { transform: 'rotate(450deg) translateX(80px) rotate(-450deg)' },
        },
        dataFlow: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '50%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        draw: {
          '0%': { strokeDashoffset: '300' },
          '50%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-300' },
        },
        waveform: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}
