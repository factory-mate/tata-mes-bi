import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { reactPresets } from '@bit-ocean/auto-import'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import LegacyPlugin from '@vitejs/plugin-legacy'
import ReactSWC from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import iconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
// import TurboConsole from 'unplugin-turbo-console/vite'
import { defineConfig, loadEnv, type ProxyOptions } from 'vite'
import WebfontDownload from 'vite-plugin-webfont-dl'

const DEFAULT_APP_PORT = 8999

export default defineConfig(({ mode }) => {
  const envPath = path.resolve(process.cwd())
  const environment = loadEnv(mode, envPath) as ImportMetaEnv
  const { VITE_PORT, VITE_KB_SERVICE_API_PREFIX, VITE_KB_SERVICE_API_URL } = environment

  const port = Number.parseInt(VITE_PORT, 10) || DEFAULT_APP_PORT
  const proxy: Record<string, string | ProxyOptions> = {
    [VITE_KB_SERVICE_API_PREFIX]: {
      target: VITE_KB_SERVICE_API_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(VITE_KB_SERVICE_API_PREFIX, '')
    }
  }

  return {
    plugins: [
      ReactSWC(),
      TanStackRouterVite(),
      AutoImport({
        imports: [
          ...reactPresets,
          { from: '@/shared/router', imports: ['router'] },
          { from: '@/shared/query-client', imports: ['queryClient'] }
        ],
        dirs: [
          'src/shared/api',
          'src/shared/components/**',
          'src/shared/echarts',
          'src/shared/hooks/**',
          'src/shared/providers/**',
          'src/shared/store',
          'src/shared/utils',
          { glob: 'src/shared/types', types: true }
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
      port,
      strictPort: true,
      open: false,
      proxy
    },
    preview: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    }
  }
})
