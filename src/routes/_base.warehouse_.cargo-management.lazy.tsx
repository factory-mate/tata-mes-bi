import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/warehouse/cargo-management')({
  component: () => <div>Hello /_base/warehouse/cargo-management!</div>
})
