import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CheckTable,
  DoorLeafStationHoursLine,
  InternalReturnTypePie,
  KnifeTable,
  LateProductionTable,
  LineEfficiencyGauge,
  MaterialBar,
  MaterialTable,
  ProductionReachedBar,
  StatisticsRow,
  WindowDoorStationHoursLine
} from '@/features/plate/plate-nailing'

export const Route = createLazyFileRoute('/_base/plate_/plate-nailing')({
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

      <BlockContainer className="col-span-2 row-span-3">
        <InternalReturnTypePie />
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
        <DoorLeafStationHoursLine />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <ProductionReachedBar />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <WindowDoorStationHoursLine />
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
