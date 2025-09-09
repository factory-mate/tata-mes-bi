import { createLazyFileRoute } from '@tanstack/react-router'

import {
  CheckTable,
  DeviceRepairTable,
  HourCompletionLine,
  InternalReturnReasonBar,
  InternalReturnTypePie,
  LateProductionTable,
  MainPie,
  MainStatisticsArea,
  MaterialTable,
  StatisticsArea
} from './-components'

export const Route = createLazyFileRoute('/_base-new/door-leaf_/door-leaf-package-new')({
  component: Page
})

function Page() {
  return (
    <>
      <TitleRowNew
        left={<div className="text-3xl">TATA木门二十五厂</div>}
        right={<ClockPanel />}
      />

      <StatisticsArea />
      <MainStatisticsArea />
      <MainPie />

      <LateProductionTable />
      <DeviceRepairTable />
      <MaterialTable />
      <CheckTable />

      <InternalReturnReasonBar />
      <InternalReturnTypePie />
      <HourCompletionLine />
    </>
  )
}
