import type { PropsWithChildren } from 'react'

export default function BaseLayout(props: PropsWithChildren) {
  const { children } = props
  return <>{children}</>
}
