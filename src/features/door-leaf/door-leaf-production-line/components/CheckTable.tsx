import { checkQO } from '../queries'
import type { CheckVo } from '../types'

interface CheckTableProps {
  cFactoryUnitCode: string
}

export function CheckTable(props: CheckTableProps) {
  const { cFactoryUnitCode } = props

  const { data = [] } = useQuery(
    checkQO({
      cFactoryUnitCode
    })
  )

  return (
    <ScrollTable<CheckVo>
      title="工位设备点检/保养"
      columns={[
        { key: 'cPositionName', label: '工位' },
        { key: 'Tou_iQuantity', label: '点检' },
        { key: 'Pre_iQuantity', label: '保养' }
      ]}
      data={data}
    />
  )
}
