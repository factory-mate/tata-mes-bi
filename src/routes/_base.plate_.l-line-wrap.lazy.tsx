import { createLazyFileRoute } from '@tanstack/react-router'

import {
  BoardTypePie,
  CheckTable,
  DeviceRepairTable,
  InternalReturnTypePie,
  LineEfficiencyGauge,
  LLineHourCompletionLine,
  MaterialBar,
  ProductionReachedBar,
  StatisticsRow
} from '@/features/plate/l-line-wrap'

export const Route = createLazyFileRoute('/_base/plate_/l-line-wrap')({
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

      <BlockContainer className="col-span-2 row-span-3">
        <InternalReturnTypePie />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-3">
        <LineEfficiencyGauge />
      </BlockContainer>
      <BlockContainer className="col-span-8 row-span-3">
        <CheckTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <LLineHourCompletionLine />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <ProductionReachedBar />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <DeviceRepairTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <CheckTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <BoardTypePie />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MaterialBar />
      </BlockContainer>
    </>
  )
}
