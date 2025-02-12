import { createLazyFileRoute } from '@tanstack/react-router'

import {
  Check,
  CumulativeDownTime,
  FaultClassify,
  Maintain,
  MTTR,
  Repair,
  RepairInfo,
  RepairTime
} from '@/features/device'

export const Route = createLazyFileRoute('/_base/device')({
  component: Page
})

function Page() {
  return (
    <>
      <div className="col-span-12 row-span-1 p-2">
        <TitleRow right={<ClockPanel />} />
      </div>

      <BlockContainer className="col-span-4 row-span-2">
        <Repair />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-2">
        <Maintain />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-2">
        <Check />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-5">
        <RepairInfo />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-5">
        <RepairTime />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <CumulativeDownTime />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <FaultClassify />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MTTR />
      </BlockContainer>
    </>
  )
}
