import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/plate/l-line-fine-cut')({
  component: () => <div>Hello /_base/plate/l-line-fine-cut!</div>
})
