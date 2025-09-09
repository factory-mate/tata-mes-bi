import type { PropsWithChildren } from 'react'

import layout from '@/assets/images/layout.png'

export default function BaseLayoutNew(props: PropsWithChildren) {
  const { children } = props

  return (
    <div
      className="relative h-screen overflow-y-auto overflow-x-hidden bg-cover bg-no-repeat p-2 text-white transition-all"
      style={{
        backgroundImage: `url(${layout})`,
        backgroundSize: '100% 100%'
      }}
    >
      {children}
    </div>
  )
}
