import { materialCallQO } from '../queries'
import type { MaterialCallVo } from '../types'

interface MaterialCallTableProps {
  conditions: string
}

export function MaterialCallTable(props: MaterialCallTableProps) {
  const { conditions } = props

  const { data: { data = [] } = {} } = useQuery(
    materialCallQO({
      pageIndex: 1,
      pageSize: 10,
      orderByFileds: 'dCreateTime',
      conditions
    })
  )

  return (
    <ScrollTable<MaterialCallVo>
      title="工位物料呼叫信息"
      columns={[
        { key: 'cDefindParm04', label: '工位' },
        { key: 'cInvName', label: '物料' },
        { key: 'dCreateTime', label: '时间' }
      ]}
      data={data}
    />
  )
}
