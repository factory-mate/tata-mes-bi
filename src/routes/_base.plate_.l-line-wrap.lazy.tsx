import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/plate/l-line-wrap')({
  component: () => <div>Hello /_base/plate/l-line-wrap!</div>
})
