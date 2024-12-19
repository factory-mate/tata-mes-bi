import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CheckTable,
  DeviceRepairTable,
  InternalReturnReasonBar,
  InternalReturnTypePie,
  KnifeTable,
  LateProductionTable,
  LineEfficiencyGauge,
  MaterialBar,
  ProductionReachedBar,
  StatisticsRow,
  WireframeHourCompletionLine
} from '@/features/plate/wireframe'

export const Route = createLazyFileRoute('/_base/plate_/wireframe')({
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
        <KnifeTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <WireframeHourCompletionLine />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <ProductionReachedBar />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <InternalReturnReasonBar />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <CheckTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <DeviceRepairTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MaterialBar />
      </BlockContainer>
    </>
  )
}
