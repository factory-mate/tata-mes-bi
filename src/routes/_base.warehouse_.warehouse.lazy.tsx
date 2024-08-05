import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/warehouse/warehouse')({
  component: () => <div>Hello /_base/warehouse/warehouse!</div>
})
