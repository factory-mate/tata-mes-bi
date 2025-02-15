import { lateProductionQO } from '../queries'
import type { LateProductionVo } from '../types'

export function LateProductionTable() {
  const { data: { data = [] } = {} } = useQuery(
    lateProductionQO({
      orderByFileds: 'dPlanStartDate,SourceUnitName'
    })
  )

  return (
    <ScrollTable<LateProductionVo>
      title="生产晚期信息"
      columns={[
        { key: 'dPlanStartDate', label: '生产日期' },
        { key: 'SourceUnitName', label: '生产产线' },
        { key: 'RestQuantity', label: '未完成数' }
      ]}
      data={data}
    />
  )
}
