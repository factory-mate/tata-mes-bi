import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CheckStatistics,
  CumulativeDownTimeStatistics,
  DeviceRepairTable,
  FaultClassifyStatistics,
  MaintainStatistics,
  MTTRStatistics,
  RepairStatistics,
  RepairTimeRankStatistics
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
        <RepairStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-2">
        <MaintainStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-2">
        <CheckStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-5">
        <DeviceRepairTable />
      </BlockContainer>

      <BlockContainer className="col-span-6 row-span-5">
        <RepairTimeRankStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <CumulativeDownTimeStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4">
        <FaultClassifyStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4">
        <MTTRStatistics />
      </BlockContainer>
    </>
  )
}
