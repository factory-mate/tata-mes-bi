import '@/assets/styles/main.scss'
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'

import React from 'react'
import ReactDOM from 'react-dom/client'
import ResizeObserver from 'resize-observer-polyfill'

// import VConsole from 'vconsole'
import App from '@/apps'

window.ResizeObserver = ResizeObserver

// const vConsole = new VConsole()
// console.log(vConsole)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
