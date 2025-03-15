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
  StatisticsRow
} from '@/features/door-leaf/door-leaf-workshop'

export const Route = createLazyFileRoute('/_base/door-leaf_/door-leaf-workshop')({
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

      <BlockContainer className="col-span-4 row-span-4">
        <ProductionTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <ProductionReachedStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <GaugeStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-7">
        <MaterialStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <PrimaryYieldStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <InternalReturnStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <DeviceRepairTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MaterialTable />
      </BlockContainer>
    </>
  )
}
