import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/')({
  component: Page
})

function Page() {
  return (
    <div className="col-span-4 flex flex-col p-4">
      <div className="mb-4 text-nowrap text-3xl">TaTa 看板</div>
      <div className="flex flex-col space-y-4">
        {router.flatRoutes.map((i) => {
          if (i.fullPath === '/' || i.fullPath === '/$') {
            return null
          }
          let title = router.matchRoutes(i.path, {}).at(-1)?.staticData?.title
          if (i.fullPath.includes('-new')) {
            title += ' (新)'
          }
          return (
            <Link
              to={i.to}
              key={i.id}
              className="text-blue-500 hover:underline"
            >
              {title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
