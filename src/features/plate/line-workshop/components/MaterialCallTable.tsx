import { materialCallQO } from '../queries'
import type { MaterialCallVo } from '../types'

export function MaterialCallTable() {
  const { data: { data = [] } = {} } = useQuery(
    materialCallQO({
      pageIndex: 1,
      pageSize: 10,
      orderByFileds: 'dCreateTime',
      conditions: 'cDefindParm05 like FM0105'
    })
  )

  return (
    <ScrollTable<MaterialCallVo>
      title="工位物料呼叫信息"
      columns={[
        { key: 'cInWareHouseName', label: '工位' },
        { key: 'cInvName', label: '物料' },
        { key: 'dCreateTime', label: '时间' }
      ]}
      data={data}
    />
  )
}
