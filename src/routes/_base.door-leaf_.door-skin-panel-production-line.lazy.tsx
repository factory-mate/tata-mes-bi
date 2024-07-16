import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CheckTable,
  DeviceStatusGauge,
  Gauge,
  InternalReturnReasonBar,
  InternalReturnTypePie,
  KnifeTable,
  LineCompeleteRateStatistics,
  LinePersonStatistics,
  MaterialPie,
  MaterialTable,
  PVCTable,
  UnfinishedTasksTable
} from '@/features/door-leaf/door-skin-panel-production-line'
import { PrimaryYieldStatistics } from '@/features/door-leaf/door-skin-panel-workshop'

export const Route = createLazyFileRoute('/_base/door-leaf/door-skin-panel-production-line')({
  component: Page
})
function Page() {
  return (
    <>
      <div className="col-span-12 row-span-1 p-2">
        <TitleRow right={<ClockPanel />} />
      </div>

      <BlockContainer className="col-span-6 row-span-1">
        <LineCompeleteRateStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-1">
        <LinePersonStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <MaterialTable />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-4">
        <InternalReturnTypePie />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-4">
        <MaterialPie />
      </BlockContainer>
      <BlockContainer className="col-span-1 row-span-4">
        <Gauge />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-4">
        <InternalReturnReasonBar />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <UnfinishedTasksTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <PVCTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <CheckTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <PrimaryYieldStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <KnifeTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <DeviceStatusGauge />
      </BlockContainer>
    </>
  )
}
