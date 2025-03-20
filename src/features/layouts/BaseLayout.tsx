import type { PropsWithChildren } from 'react'

export default function BaseLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <div
      className="grid h-[calc(100vh-1rem)] grid-cols-12 grid-rows-12 gap-2 overflow-y-auto overflow-x-hidden bg-cover bg-no-repeat p-2 text-white transition-all"
      style={{
        backgroundImage:
          'radial-gradient(ellipse farthest-corner at center center, #011974 100%, #020f3a 100%)'
      }}
    >
      {children}
    </div>
  )
}
