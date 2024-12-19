import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CountStatistics,
  Gauge,
  InOutStatistics,
  LineLateTable,
  MainTable,
  MonthLateBar,
  TimeRangeLine,
  UnEnterPackageBar
} from '@/features/warehouse/warehouse'

export const Route = createLazyFileRoute('/_base/warehouse_/warehouse')({
  component: Page
})

function Page() {
  return (
    <>
      <div className="col-span-12 row-span-1 p-2">
        <TitleRow right={<ClockPanel />} />
      </div>

      <BlockContainer className="col-span-4 row-span-2">
        <InOutStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-8 row-span-2">
        <CountStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <Gauge />
      </BlockContainer>
      <BlockContainer className="col-span-8 row-span-3">
        <MainTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <TimeRangeLine />
      </BlockContainer>
      <BlockContainer className="col-span-8 row-span-3">
        <LineLateTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <UnEnterPackageBar />
      </BlockContainer>
      <BlockContainer className="col-span-8 row-span-3">
        <MonthLateBar />
      </BlockContainer>
    </>
  )
}
