import { createLazyFileRoute } from '@tanstack/react-router'

import {
  DeviceRepairTable,
  Gauge,
  HourWorkingBar,
  InternalReturnBar,
  InternalReturnReasonBar,
  MaterialBar,
  MaterialTable,
  PackageNumPie,
  PrimaryYieldLine,
  ProductionReachBar,
  StatisticsRow
} from '@/features/plate/line-workshop'

export const Route = createLazyFileRoute('/_base/plate_/line-workshop')({
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

      <BlockContainer className="col-span-4 row-span-3">
        <ProductionReachBar />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-3">
        <Gauge />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-3">
        <PackageNumPie />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <PrimaryYieldLine />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <HourWorkingBar />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <InternalReturnBar />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <InternalReturnReasonBar />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <MaterialBar />
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
