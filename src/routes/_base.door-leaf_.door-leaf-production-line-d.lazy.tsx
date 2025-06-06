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
  UnfinishedTaskTable
} from '@/features/door-leaf/door-leaf-production-line'

export const Route = createLazyFileRoute('/_base/door-leaf_/door-leaf-production-line-d')({
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
        <LineCompleteRateBlock cFactoryUnitCode="FM0101010401" />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-1">
        <LinePersonBlock conditions="cKBType = 4" />
      </BlockContainer>

      <BlockContainer className="col-span-3 row-span-4">
        <UnfinishedTaskTable conditions="cFactoryUnitCode = FM01010104 && cProcessCode = GX0121" />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-4">
        <InternalReturnTypePie conditions="cFactoryUnitCode = FM01010104" />
      </BlockContainer>
      {/* <BlockContainer className="col-span-3 row-span-4">
        <MaterialTypePie conditions="cFactoryUnitCode = FM01010104" />
      </BlockContainer> */}
      <BlockContainer className="col-span-1 row-span-4">
        <Gauge conditions="cFactoryUnitCode=FM01010104" />
      </BlockContainer>
      <BlockContainer className="col-span-5 row-span-4">
        <InternalReturnReasonBar conditions="cFactoryUnitCode = FM01010104" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <HourCompletionLine conditions="cFactoryUnitCode in (FM0101010401,FM0101010402,FM0101010403,FM0101010406)" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <CheckTable cFactoryUnitCode="FM01010104" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <DeviceRepairTable cFactoryUnitCode="FM01010104" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <MaterialCallTable conditions="cDefindParm05 like FM01010104" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <KnifeTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <DeviceStatusGauge conditions="cFactoryUnitCode = FM01010104" />
      </BlockContainer>
    </>
  )
}
