import { fileURLToPath, URL } from 'node:url'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import LegacyPlugin from '@vitejs/plugin-legacy'
import ReactSWC from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import iconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
// import TurboConsole from 'unplugin-turbo-console/vite'
import { defineConfig } from 'vite'
import WebfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig(({ mode }) => ({
  plugins: [
    ReactSWC(),
    TanStackRouterVite(),
    AutoImport({
      imports: [
        'react',
        { from: 'clsx', imports: [['default', 'clsx']] },
        { from: 'use-immer', imports: ['useImmer'] },
        { from: '@/shared/router', imports: ['router'] },
        { from: '@/shared/query-client', imports: ['queryClient'] },
        { from: '@bit-ocean/echarts', imports: ['ReactChart'] }
      ],
      dirs: [
        'src/shared/components/*',
        'src/shared/echarts/*',
        'src/shared/hooks/*',
        'src/shared/store/*'
      ],
      dts: '@types/auto-imports.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/ // .md
      ],
      resolvers: [
        iconsResolver({
          prefix: false,
          extension: 'jsx',
          enabledCollections: []
        })
      ]
    }),
    Icons({
      autoInstall: true,
      compiler: 'jsx',
      jsx: 'react'
    }),
    // TurboConsole(),
    WebfontDownload(),
    LegacyPlugin({
      targets: ['> 0%', 'Chrome > 4', 'Android >= 4', 'IOS >= 7', 'not ie <= 6', 'Firefox ESR'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: true
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
