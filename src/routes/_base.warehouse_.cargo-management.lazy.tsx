import { createLazyFileRoute } from '@tanstack/react-router'

import { ListArea, StatisticsRow } from '@/features/warehouse/cargo-management'

export const Route = createLazyFileRoute('/_base/warehouse/cargo-management')({
  component: Page
})

function Page() {
  return (
    <>
      <div className="col-span-12 row-span-1 p-2">
        <TitleRow right={<ClockPanel />} />
      </div>

      <BlockContainer className="col-span-12 row-span-1">
        <StatisticsRow />
      </BlockContainer>

      <BlockContainer className="col-span-12 row-span-10 overflow-y-hidden">
        <ListArea />
      </BlockContainer>
    </>
  )
}
