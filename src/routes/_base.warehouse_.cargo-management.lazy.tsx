import { createLazyFileRoute } from '@tanstack/react-router'

import { ListArea, StatisticsRow } from '@/features/warehouse/cargo-management'

export const Route = createLazyFileRoute('/_base/warehouse_/cargo-management')({
  component: Page
})

function Page() {
  return (
    <>
      <div className="col-span-12 row-span-1 p-2">
        <TitleRow
          left={<div className="text-3xl">TATA木门二十五厂</div>}
          right={<ClockPanel />}
        />
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
