import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Makrdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: [/\.md$/,/\.tsx$/,/\.ts$/],
  }),
  Markdown()
  ]
})
