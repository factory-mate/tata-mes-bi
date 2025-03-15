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
  LineCompleteRateBlock,
  LinePersonBlock,
  MaterialCallTable,
  MaterialTypePie,
  UnfinishedTaskTable
} from '@/features/door-leaf/door-leaf-production-line'

export const Route = createLazyFileRoute('/_base/door-leaf_/door-leaf-production-line')({
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

      <BlockContainer className="col-span-6 row-span-1">
        <LineCompleteRateBlock />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-1">
        <LinePersonBlock />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <MaterialCallTable />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-4">
        <InternalReturnTypePie />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-4">
        <MaterialTypePie />
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
        <UnfinishedTaskTable />
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
