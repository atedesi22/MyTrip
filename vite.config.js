import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ta palette NovaVerse
        'nova-purple': '#8b5cf6', // Violet
        'nova-cyan': '#22d3ee',   // Cyan
      },
      // ON DÉFINIT LES OMBRES ICI POUR ÉVITER LES ERREURS VITE
      boxShadow: {
        'nova-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'nova-neon': '0 0 30px rgba(139, 92, 246, 0.5)',
        'nova-neon-hover': '0 0 40px rgba(139, 92, 246, 0.7)',
      },
      fontFamily: {
        // Une police géométrique et moderne
        sans: ['Inter', 'sans-serif'],
      },
      // Animations Tailwind personnalisées (pour le titre et l'icône)
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-xy': 'gradient-xy 5s ease infinite',
      },
      keyframes: {
        // Animation de dégradé sur le texte
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})