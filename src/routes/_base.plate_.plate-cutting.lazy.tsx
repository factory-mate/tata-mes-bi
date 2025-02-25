import { createLazyFileRoute } from '@tanstack/react-router'

import {
  BoardTypePie,
  CheckTable,
  EdgeBandingHoursLine,
  KnifeTable,
  LateProductionTable,
  LineEfficiencyGauge,
  MaterialBar,
  MaterialTable,
  ProductionReachedBar,
  StatisticsRow,
  UnloadingStationHoursLine
} from '@/features/plate/plate-cutting'

export const Route = createLazyFileRoute('/_base/plate_/plate-cutting')({
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
        <StatisticsRow />
      </BlockContainer>

      <BlockContainer className="col-span-2 row-span-3">
        <BoardTypePie />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-3">
        <LineEfficiencyGauge />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <KnifeTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-3">
        <MaterialTable />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <UnloadingStationHoursLine />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <ProductionReachedBar />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <EdgeBandingHoursLine />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <CheckTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <LateProductionTable />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MaterialBar />
      </BlockContainer>
    </>
  )
}
