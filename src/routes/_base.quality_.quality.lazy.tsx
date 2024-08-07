import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CategoryTable,
  CheckMaterialTable,
  LabStatistics,
  LineCheckTable,
  MaterialAbnormalPie,
  QualityLineBar,
  StatisticsRow,
  WeekPackageCheckResultTable
} from '@/features/quality'

export const Route = createLazyFileRoute('/_base/quality/quality')({
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
        <WeekPackageCheckResultTable />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-3">
        <LabStatistics />
      </BlockContainer>
      <BlockContainer className="col-span-6 row-span-3">
        <CheckMaterialTable />
      </BlockContainer>

      <BlockContainer className="col-span-12 row-span-4">
        <QualityLineBar />
      </BlockContainer>

      <BlockContainer className="col-span-3 row-span-3">
        <CategoryTable />
      </BlockContainer>
      <BlockContainer className="col-span-3 row-span-3">
        <MaterialAbnormalPie />
      </BlockContainer>
      <BlockContainer className="col-span-6 row-span-3">
        <LineCheckTable />
      </BlockContainer>
    </>
  )
}
