import { repairInfoQO } from '../queries'
import type { RepairInfoVo } from '../types'

export function RepairInfoTable() {
  const { data: { data = [] } = {} } = useQuery(
    repairInfoQO({
      pageIndex: 1,
      pageSize: 9999
    })
  )

  return (
    <ScrollTable<RepairInfoVo>
      title="设备维修信息"
      columns={[
        { key: 'cLineName', label: '生产产线' },
        { key: 'cDeviceName', label: '设备名称' },
        { key: 'cFaultName', label: '故障' },
        { key: 'dCreateTime', label: '报修时间' },
        { key: 'iStatusName', label: '状态' },
        { key: 'cPersonName', label: '责任人' }
      ]}
      data={data}
    />
  )
}
