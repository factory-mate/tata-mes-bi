import { repairInfoQO } from '../queries'
import type { RepairInfoVo } from '../types'

export function RepairInfo() {
  const { data: { data = [] } = {} } = useQuery(repairInfoQO())

  return (
    <ScrollTable<RepairInfoVo>
      title="设备维修信息"
      columns={[
        { key: 'cLineName', label: '生产产线' },
        { key: 'cDeviceName', label: '设备名称' },
        { key: 'cFaultName', label: '故障' },
        { key: 'dCreateTime', label: '保修时间' },
        { key: 'iStatusName', label: '状态' },
        { key: 'cPersonName', label: '责任人' }
      ]}
      data={data}
    />
  )
}
