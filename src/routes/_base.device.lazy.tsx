import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CheckBlock,
  CumulativeDownTimeLine,
  FaultClassifyPie,
  MaintainBlock,
  MTTRBar,
  RepairBlock,
  RepairInfoTable,
  RepairTime
} from '@/features/device'

export const Route = createLazyFileRoute('/_base/device')({
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

      <BlockContainer className="col-span-4 row-span-2">
        <RepairBlock />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-2">
        <MaintainBlock />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-2">
        <CheckBlock />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-5">
        <RepairInfoTable />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-5">
        <RepairTime />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <CumulativeDownTimeLine />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <FaultClassifyPie />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MTTRBar />
      </BlockContainer>
    </>
  )
}
