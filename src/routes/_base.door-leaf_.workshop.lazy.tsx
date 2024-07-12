import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/door-leaf/workshop')({
  component: () => <div>门扇车间看板</div>
})
