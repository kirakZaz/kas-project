import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { ServerResponse } from 'http'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'unity-webgl-gzip',
      configureServer(server) {
        server.middlewares.use((req, res: ServerResponse, next) => {
          if (req.url?.endsWith('.gz')) {
            res.setHeader('Content-Encoding', 'gzip')
            if (req.url.endsWith('.js.gz')) {
              res.setHeader('Content-Type', 'application/javascript')
            } else if (req.url.endsWith('.wasm.gz')) {
              res.setHeader('Content-Type', 'application/wasm')
            } else if (req.url.endsWith('.data.gz')) {
              res.setHeader('Content-Type', 'application/octet-stream')
            }
          }
          next()
        })
      },
    },
  ],
  server: {
    port: 5177
  }
})
