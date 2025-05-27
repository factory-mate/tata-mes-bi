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
        { key: 'cVouchType', label: '单据类型' },
        { key: 'End_iQuantity', label: '完成数' },
        { key: 'All_iQuantity', label: '总数' }
      ]}
      data={data}
    />
  )
}
