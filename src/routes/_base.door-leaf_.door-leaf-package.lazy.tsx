import { createLazyFileRoute } from '@tanstack/react-router'

import {
  AutomaticLineHourCompletionLine,
  CheckTable,
  DeviceRepairTable,
  DeviceUtilizationRateGauge,
  HandmadeLineHourCompletionLine,
  InternalReturnReasonBar,
  InternalReturnTypePie,
  LateProductionTable,
  LineCompeleteRateStatistics,
  LinePersonStatistics,
  MaterialTable
} from '@/features/door-leaf/door-leaf-package'

export const Route = createLazyFileRoute('/_base/door-leaf/door-leaf-package')({
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

      <BlockContainer className="col-span-2 row-span-4">
        <InternalReturnTypePie />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-4">
        <DeviceUtilizationRateGauge />
      </BlockContainer>
      <BlockContainer className="col-span-8 row-span-4">
        <DeviceRepairTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <HandmadeLineHourCompletionLine />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <LateProductionTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <MaterialTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <AutomaticLineHourCompletionLine />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <InternalReturnReasonBar />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <CheckTable />
      </BlockContainer>
    </>
  )
}
