module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0fa7838c',
        'primary-light': '#2e5c54',
        'primary-dark': '#132b27',
        secondary: '#0f1419',
        accent: '#6adf1c',
        'accent-light': '#162cf8',
        white: '#ffffff',
        'gray-light': '#f8fafb',
        gray: '#e8ecef',
        'gray-medium': '#90a4ae',
        'gray-dark': '#263238',
        text: '#1a202c',
        'text-light': '#4a5568',
        success: '#00c853',
        warning: '#ffc107',
        'teal-50': '#e6f0fa',
        'teal-100': '#b3d4e8',
        'teal-200': '#80b8d6',
        'teal-500': '#2e5c54',
        'teal-600': '#275048',
        'teal-700': '#20443c',
        'teal-800': '#1a3c34',
        'teal-900': '#132b27',
      },
      boxShadow: {
        sm: '0 2px 4px rgba(26, 60, 52, 0.08)',
        lg: '0 10px 25px -3px rgba(26, 60, 52, 0.12), 0 4px 6px -2px rgba(26, 60, 52, 0.06)',
        xl: '0 20px 25px -5px rgba(26, 60, 52, 0.15), 0 10px 10px -5px rgba(26, 60, 52, 0.05)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    fontFamily: {
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      serif: ['"Playfair Display"', 'serif'],
    },
  },
  plugins: [],
};