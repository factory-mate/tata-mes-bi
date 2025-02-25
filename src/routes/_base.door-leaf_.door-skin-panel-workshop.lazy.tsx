import { createLazyFileRoute } from '@tanstack/react-router'

import {
  DeviceRepairTable,
  GaugeStatistics,
  InternalReturnBar,
  LateProductionTable,
  MaterialCallTable,
  MaterialStatistics,
  PrimaryYieldStatistics,
  ProductionReachedBar,
  StatisticsBlock
} from '@/features/door-leaf/door-skin-panel-workshop'

export const Route = createLazyFileRoute('/_base/door-leaf_/door-skin-panel-workshop')({
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
        <StatisticsBlock />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <LateProductionTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <ProductionReachedBar />
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
        <InternalReturnBar />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <DeviceRepairTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MaterialCallTable />
      </BlockContainer>
    </>
  )
}
