import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/plate/wireframe')({
  component: () => <div>Hello /_base/plate/wireframe!</div>
})
