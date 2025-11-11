/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        text: 'var(--text)',
        'menu-color': 'var(--menu-color)',
        'hover-color': 'var(--hover-color)',
        'link-color': 'var(--link-color)',
        green: 'var(--green)',
      },
    },
  },
  plugins: [],
  safelist: [
    'project-list',
    'publication-list',
    'bg-secondary',
    'text-text',
  ],
}