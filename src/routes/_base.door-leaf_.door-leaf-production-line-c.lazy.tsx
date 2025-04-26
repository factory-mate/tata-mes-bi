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
  MaterialTypePie,
  UnfinishedTaskTable
} from '@/features/door-leaf/door-leaf-production-line'

export const Route = createLazyFileRoute('/_base/door-leaf_/door-leaf-production-line-c')({
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
        <LineCompleteRateBlock conditions="cFactoryUnitCode = FM01010103" />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-1">
        <LinePersonBlock conditions="cFactoryUnitCode = FM01010103" />
      </BlockContainer>

      <BlockContainer className="col-span-3 row-span-4">
        <MaterialCallTable conditions="cDefindParm05 like FM01010103" />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-4">
        <InternalReturnTypePie conditions="cFactoryUnitCode = FM01010103" />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-4">
        <MaterialTypePie conditions="cFactoryUnitCode = FM01010103" />
      </BlockContainer>
      <BlockContainer className="col-span-1 row-span-4">
        <Gauge conditions="cFactoryUnitCode=FM01010103" />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-4">
        <InternalReturnReasonBar conditions="cFactoryUnitCode = FM01010103" />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3">
        <DeviceRepairTable cFactoryUnitCode="FM01010103" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <UnfinishedTaskTable conditions="cFactoryUnitCode = FM01010103 && cProcessCode = GX0026" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <CheckTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <HourCompletionLine conditions="cFactoryUnitCode in (FM0101010301,FM0101010302,FM0101010303,FM0101010306)" />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <KnifeTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <DeviceStatusGauge conditions="cFactoryUnitCode = FM01010103" />
      </BlockContainer>
    </>
  )
}
