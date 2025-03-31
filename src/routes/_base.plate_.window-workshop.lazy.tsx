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

export const Route = createLazyFileRoute('/_base/plate_/window-workshop')({
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
        <StatisticsBlock conditions="cKBType = 7" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <ProductionReachBar
          orderByFileds="cProcessCode, iType"
          conditions="cType = CY && cProcessCode in (GX0065,GX0068,GX0072,GX0075)"
        />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <PackageNumPie conditions="cProcessCode like FM010409" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <PrimaryYieldLine conditions="cType = CY" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <HourWorkingBar
          orderByFileds="cProcessCode"
          conditions="cType = CY && cProcessCode in (GX0065,GX0068,GX0072,GX0075)"
        />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <InternalReturnBar conditions="cFactoryUnitCode like FM010410" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <InternalReturnReasonBar conditions="cFactoryUnitCode like FM010410" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <MaterialBar />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <DeviceRepairTable cFactoryUnitCode="FM0104" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MaterialCallTable conditions="cDefindParm05 like FM0104" />
      </BlockContainer>
    </>
  )
}
