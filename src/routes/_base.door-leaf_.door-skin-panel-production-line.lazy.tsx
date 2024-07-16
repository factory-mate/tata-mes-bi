import { createLazyFileRoute } from '@tanstack/react-router'

import {
  InternalReturnTypePie,
  LineCompeleteRateStatistics,
  LinePersonStatistics,
  MaterialPie
} from '@/features/door-leaf/door-skin-panel-production-line'
import {
  GaugeStatistics,
  InternalReturnStatistics,
  MaterialTable,
  PrimaryYieldStatistics,
  ProductionTable
} from '@/features/door-leaf/door-skin-panel-workshop'

export const Route = createLazyFileRoute('/_base/door-leaf/door-skin-panel-production-line')({
  component: Page
})
function Page() {
  return (
    <>
      <div className="col-span-12 row-span-1 p-2">
        <TitleRow right={<ClockPanel />} />
      </div>

      <BlockContainer className="col-span-6 row-span-1 p-2">
        <LineCompeleteRateStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-1 p-2">
        <LinePersonStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3 p-2">
        <ProductionTable />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-3 p-2">
        <InternalReturnTypePie />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-3 p-2">
        <MaterialPie />
      </BlockContainer>
      <BlockContainer className="col-span-1 row-span-3 p-2">
        <GaugeStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-3 p-2">
        <InternalReturnStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4 p-2">
        <ProductionTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4 p-2">
        <ProductionTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4 p-2">
        <ProductionTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3 p-2">
        <PrimaryYieldStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3 p-2">
        <MaterialTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3 p-2">设备运行状态 </BlockContainer>
    </>
  )
}
