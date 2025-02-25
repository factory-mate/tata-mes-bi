import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CheckTable,
  DeviceRepairTable,
  InternalReturnTypePie,
  KnifeTable,
  LineEfficiencyGauge,
  LLineHourCompletionLine,
  MaterialBar,
  ProductionReachedBar,
  StatisticsRow
} from '@/features/plate/l-line-fine-cut'

export const Route = createLazyFileRoute('/_base/plate_/l-line-fine-cut')({
  component: Page
})

function Page() {
  return (
    <>
      <div className="col-span-12 row-span-1 p-2">
        <TitleRow
          left={<div className="text-2xl">TATA木门二十五厂</div>}
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
      <BlockContainer className="col-span-4 row-span-3">
        <KnifeTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <DeviceRepairTable />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-4">
        <LLineHourCompletionLine />
      </BlockContainer>
      <BlockContainer className="col-span-6 row-span-4">
        <ProductionReachedBar />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-4">
        <CheckTable />
      </BlockContainer>
      <BlockContainer className="col-span-6 row-span-4">
        <MaterialBar />
      </BlockContainer>
    </>
  )
}
