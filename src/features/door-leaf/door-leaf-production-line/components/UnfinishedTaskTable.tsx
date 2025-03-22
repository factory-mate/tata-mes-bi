import { unfinishedTaskQO } from '../queries'
import type { UnfinishedTaskVo } from '../types'

interface UnfinishedTaskTableProps {
  conditions: string
}

export function UnfinishedTaskTable(props: UnfinishedTaskTableProps) {
  const { conditions } = props

  const { data = [] } = useQuery(
    unfinishedTaskQO({
      orderByFileds: 'dPlanStartDate',
      conditions
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
