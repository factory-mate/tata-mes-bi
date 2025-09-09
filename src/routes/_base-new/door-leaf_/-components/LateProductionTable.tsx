import type { LateProductionVo } from '@/features/door-leaf/door-leaf-package'
import { lateProductionQO } from '@/features/door-leaf/door-leaf-package'

export default function LateProductionTable() {
  const { data = [] } = useQuery(
    lateProductionQO({
      orderByFileds: 'dPlanDateStart',
      conditions: 'cFactoryUnitCode = FM01010401'
    })
  )

  return (
    <ScrollTableNew<LateProductionVo>
      title="生产晚期信息"
      columns={[
        { key: 'dPlanDateStart', label: '生产日期' },
        { key: 'WQCount', label: '缺货包数', color: 'red' },
        { key: 'WQDayCount', label: '晚期天数', color: 'yellow' }
      ]}
      data={data}
      style={{
        position: 'absolute',
        top: '7.7%',
        left: '1.8%',
        width: '25.9%',
        height: '26.5%'
      }}
      showIndex
    />
  )
}
