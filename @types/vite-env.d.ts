/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KB_SERVICE_API_PREFIX: string
  readonly VITE_KB_SERVICE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
