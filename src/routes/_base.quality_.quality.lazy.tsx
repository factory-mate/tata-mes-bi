import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/quality/quality')({
  component: () => <div>Hello /_base/quality/quality!</div>
})
