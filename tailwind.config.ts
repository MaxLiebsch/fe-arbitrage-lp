import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        secondary: {
          '50': '#ecfffd',
          '100': '#d0fdfb',
          '200': '#a7faf7',
          '300': '#6af6f3',
          '400': '#26eae9',
          '500': '#0aced0',
          '600': '#0ba6af',
          '700': '#11848d',
          '800': '#176a73',
          '900': '#185761',
          '950': '#0b4650',
        },
        primary: {
          '50': '#ffffe4',
          '100': '#fdffc4',
          '200': '#faff90',
          '300': '#f1ff50',
          '400': '#e6ff2b',
          '500': '#c5e600',
          '600': '#99b800',
          '700': '#738b00',
          '800': '#5b6d07',
          '900': '#4c5c0b',
          '950': '#283400',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
