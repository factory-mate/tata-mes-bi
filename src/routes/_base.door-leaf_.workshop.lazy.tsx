import { createLazyFileRoute } from '@tanstack/react-router'

import {
  InternalReturnStatistics,
  MaterialStatistics,
  PrimaryYieldStatistics,
  ProductionReachedStatistics,
  StatisticsRow,
  TitleRow
} from '@/features/door-leaf/workshop'

export const Route = createLazyFileRoute('/_base/door-leaf/workshop')({
  component: Page
})

function Page() {
  return (
    <>
      <div className="col-span-12 row-span-1 p-2">
        <TitleRow />
      </div>

      <BlockContainer className="col-span-12 row-span-1 p-2">
        <StatisticsRow />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4 p-2">Block</BlockContainer>

      <BlockContainer className="col-span-4 row-span-4 p-2">
        <ProductionReachedStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4 p-2">Block</BlockContainer>

      <BlockContainer className="col-span-4 row-span-7 p-2">
        <MaterialStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-4 p-2">
        <PrimaryYieldStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-4 row-span-4 p-2">
        <InternalReturnStatistics />
      </BlockContainer>

      <BlockContainer className="col-span-4 row-span-3 p-2">Block</BlockContainer>
      <BlockContainer className="col-span-4 row-span-3 p-2">Block</BlockContainer>
    </>
  )
}
