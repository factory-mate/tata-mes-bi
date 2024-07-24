import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CheckTable,
  DeviceRepairTable,
  DeviceStatusGauge,
  Gauge,
  HourCompletionLine,
  InternalReturnReasonBar,
  InternalReturnTypePie,
  KnifeTable,
  LineCompeleteRateStatistics,
  LinePersonStatistics,
  MaterialPie,
  MaterialTable,
  UnfinishedTasksTable
} from '@/features/door-leaf/door-leaf-production-line'

export const Route = createLazyFileRoute('/_base/door-leaf/door-leaf-production-line')({
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
        <DeviceRepairTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <UnfinishedTasksTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <CheckTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <HourCompletionLine />
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
