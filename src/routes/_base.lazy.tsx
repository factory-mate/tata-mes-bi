import { createLazyFileRoute, Outlet, useNavigate } from '@tanstack/react-router'

import { BaseLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base')({
  component: Page
})

function Page() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace') {
        navigate({ to: '/' })
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate])

  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  )
}
