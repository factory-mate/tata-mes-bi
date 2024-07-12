import { fileURLToPath } from 'node:url'

import ReactSWC from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    ReactSWC(),
    AutoImport({
      imports: [
        'react',
        {
          from: '@bit-ocean/echarts',
          imports: ['ReactChart']
        }
      ],
      dts: '@types/auto-imports.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/ // .md
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url))
    }
  },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : []
  },
  server: {
    host: true,
    port: 8999,
    strictPort: true,
    open: false
  }
}))
