import { createLazyFileRoute } from '@tanstack/react-router'

import {
  DeviceRepairTable,
  GaugeStatistics,
  InternalReturnStatistics,
  MaterialStatistics,
  MaterialTable,
  PrimaryYieldStatistics,
  ProductionReachedStatistics,
  ProductionTable,
  StatisticsRow,
  TitleRow
} from '@/features/door-leaf/workshop'

export const Route = createLazyFileRoute('/_base/door-leaf/workshop')({
  component: Page
})

function Page() {
  return (
    <>
      <div className="col-span-12 row-span-1 p-2">
        <TitleRow />
      </div>

      <BlockContainer className="col-span-12 row-span-1 p-2">
        <StatisticsRow />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4 p-2">
        <ProductionTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4 p-2">
        <ProductionReachedStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4 p-2">
        <GaugeStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-7 p-2">
        <MaterialStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3 p-2">
        <PrimaryYieldStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3 p-2">
        <InternalReturnStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4 p-2">
        <DeviceRepairTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4 p-2">
        <MaterialTable />
      </BlockContainer>
    </>
  )
}
