import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import markdownPlugin from 'vite-plugin-markdown';
import { plugin as markdownPlugin } from 'vite-plugin-markdown'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    markdownPlugin({
      mode: 'react',
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true
      }
    })
  ],
});
