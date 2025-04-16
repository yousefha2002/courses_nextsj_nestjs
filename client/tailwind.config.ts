import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        'primary-dark': '#2563EB',
        'bg-light': '#F1F5F9',
        'text-dark': '#1E293B',
        yellow: '#FACC15',
        success: '#10B981',
        error: '#EF4444',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config;
