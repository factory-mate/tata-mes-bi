import { createLazyFileRoute } from '@tanstack/react-router'

import {
  DeviceRepairTable,
  HourWorkingBar,
  InternalReturnBar,
  InternalReturnReasonBar,
  MaterialBar,
  MaterialCallTable,
  PackageNumPie,
  PrimaryYieldLine,
  ProductionReachBar,
  StatisticsBlock
} from '@/features/plate/door-frame-workshop'

export const Route = createLazyFileRoute('/_base/plate_/line-frame-workshop')({
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
        <StatisticsBlock conditions="cKBType = 9" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <ProductionReachBar
          orderByFileds="cProcessCode"
          conditions="cType = XKXT && cProcessCode in (GX0102,GX0103,GX0105)"
        />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <PackageNumPie conditions="cProcessCode = GX0108" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <PrimaryYieldLine conditions="cProcessCode = GX0105" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <HourWorkingBar conditions="cType = XKXT && cProcessCode in (GX0102,GX0103,GX0105)" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <InternalReturnBar conditions="cFactoryUnitCode like FM0105" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <InternalReturnReasonBar conditions="cFactoryUnitCode like FM0105" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <MaterialBar />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <DeviceRepairTable cFactoryUnitCode="FM0105" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MaterialCallTable conditions="cDefindParm05 like FM0105" />
      </BlockContainer>
    </>
  )
}
