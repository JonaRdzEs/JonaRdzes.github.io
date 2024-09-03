/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      listStyleImage: {
        planet: 'url("/images/planets/mars.svg")',
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "midnight-black": "#141414",
      "celestial-white": "#F0F0F0",
      "cosmic-silver": "#3D3D3D",
      "stellar-silver": "#B0B0B0",
      "aurora-blue": "#176FA6",
    },
  },
  plugins: [],
};
