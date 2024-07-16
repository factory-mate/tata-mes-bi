import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/door-leaf/door-leaf-production-line')({
  component: () => <div>Hello /_base/door-leaf/door-leaf-production-line!</div>
})
