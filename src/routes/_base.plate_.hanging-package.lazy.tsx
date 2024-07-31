import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CheckTable,
  HandmadeLineHourCompletionLine,
  InternalReturnBar,
  InternalReturnReasonBar,
  InternalReturnTypePie,
  LateProductionTable,
  LineEfficiencyGauge,
  MaterialBar,
  MaterialTable,
  StatisticsRow
} from '@/features/plate/hanging-package'

export const Route = createLazyFileRoute('/_base/plate/hanging-package')({
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

      <BlockContainer className="col-span-2 row-span-3">
        <InternalReturnTypePie />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-3">
        <LineEfficiencyGauge />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <LateProductionTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <CheckTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <HandmadeLineHourCompletionLine />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MaterialTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MaterialBar />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-4">
        <InternalReturnBar />
      </BlockContainer>
      <BlockContainer className="col-span-6 row-span-4">
        <InternalReturnReasonBar />
      </BlockContainer>
    </>
  )
}
