import { lateProductionQO } from '../queries'
import type { LateProductionVo } from '../types'

export function LateProductionTable() {
  const { data = [] } = useQuery(
    lateProductionQO({
      orderByFileds: 'dPlanDateStart',
      conditions: 'cFactoryUnitCode = FM01010401'
    })
  )

  return (
    <ScrollTable<LateProductionVo>
      title="生产晚期信息"
      columns={[
        { key: 'dPlanDateStart', label: '生产日期' },
        { key: 'WQCount', label: '缺货包数' },
        { key: '', label: '晚期天数' }
      ]}
      data={data}
    />
  )
}
