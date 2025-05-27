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

export const Route = createLazyFileRoute('/_base/door-leaf_/door-leaf-production-line-z')({
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
        <LineCompleteRateBlock cFactoryUnitCode="FM0101010701" />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-1">
        <LinePersonBlock conditions="cKBType = 5" />
      </BlockContainer>

      <BlockContainer className="col-span-3 row-span-4">
        <UnfinishedTaskTable conditions="cFactoryUnitCode = FM01010107 && cProcessCode = GX0026" />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-4">
        <InternalReturnTypePie conditions="cFactoryUnitCode = FM01010107" />
      </BlockContainer>
      {/* <BlockContainer className="col-span-3 row-span-4">
        <MaterialTypePie conditions="cFactoryUnitCode = FM01010107" />
      </BlockContainer> */}
      <BlockContainer className="col-span-1 row-span-4">
        <Gauge conditions="cFactoryUnitCode=FM01010107" />
      </BlockContainer>
      <BlockContainer className="col-span-5 row-span-4">
        <InternalReturnReasonBar conditions="cFactoryUnitCode = FM01010107" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <HourCompletionLine conditions="cFactoryUnitCode in (FM0101010701,FM0101010702,FM0101010703,FM0101010708)" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <CheckTable cFactoryUnitCode="FM01010107" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <DeviceRepairTable cFactoryUnitCode="FM01010107" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <MaterialCallTable conditions="cDefindParm05 like FM01010107" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <KnifeTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <DeviceStatusGauge conditions="cFactoryUnitCode = FM01010107" />
      </BlockContainer>
    </>
  )
}
