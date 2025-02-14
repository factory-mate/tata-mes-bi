import { unfinishedTaskQO } from '../queries'
import type { UnfinishedTaskVo } from '../types'

export function UnfinishedTaskTable() {
  const { data: { data = [] } = {} } = useQuery(
    unfinishedTaskQO({
      orderByFileds: 'dPlanStartDate',
      conditions: 'cFactoryUnitCode = FM01010101 && cProcessCode = GX0026'
    })
  )

  return (
    <ScrollTable<UnfinishedTaskVo>
      title="未完成任务统计"
      columns={[
        { key: 'dPlanStartDate', label: '生产日期' },
        { key: 'WWGCount', label: '未完成数' }
      ]}
      data={data}
    />
  )
}
