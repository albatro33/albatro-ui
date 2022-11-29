import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Makrdown from '@pity/vite-plugin-react-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: [/\.md$/,/\.tsx$/,/\.ts$/],
  }),
  Markdown()
  ]
})
