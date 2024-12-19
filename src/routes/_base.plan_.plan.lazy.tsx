import { createLazyFileRoute } from '@tanstack/react-router'

import {
  DoorTypeCountLine,
  FeedbackOrderCountLine,
  KeyMaterialStorageTable,
  LineDoorYieldBar,
  MonthDoorTypeCountLine,
  MonthFeedbackOrderCountLine,
  MonthLineDoorYieldBar,
  MonthOrderOriginCountBar,
  OrderLateTable,
  OrderOriginCountBar,
  OrderTypeCountBar,
  StatisticsRow,
  TotalDoorCountPie,
  TotalOrderCountPie
} from '@/features/plan'

export const Route = createLazyFileRoute('/_base/plan_/plan')({
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

      <BlockContainer className="col-span-3 row-span-3">
        <LineDoorYieldBar />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-3">
        <OrderOriginCountBar />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-3">
        <FeedbackOrderCountLine />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-3">
        <DoorTypeCountLine />
      </BlockContainer>

      <BlockContainer className="col-span-3 row-span-4">
        <OrderLateTable />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-4">
        <TotalOrderCountPie />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-4">
        <TotalDoorCountPie />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-4">
        <OrderTypeCountBar />
      </BlockContainer>
      <BlockContainer className="col-span-2 row-span-4">
        <KeyMaterialStorageTable />
      </BlockContainer>

      <BlockContainer className="col-span-3 row-span-3">
        <MonthLineDoorYieldBar />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-3">
        <MonthOrderOriginCountBar />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-3">
        <MonthFeedbackOrderCountLine />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-3">
        <MonthDoorTypeCountLine />
      </BlockContainer>
    </>
  )
}
