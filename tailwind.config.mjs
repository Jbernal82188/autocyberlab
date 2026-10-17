/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        tc: {
          green: '#00D36C',
          dark: '#0A0D12',
          card: '#11161F',
        }
      }
    },
  },
  plugins: [],
}