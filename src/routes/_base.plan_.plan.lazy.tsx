import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/plan/plan')({
  component: () => <div>Hello /_base/plan/plan!</div>
})
