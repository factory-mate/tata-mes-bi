import { deviceRepairQO } from '../queries'
import { CType, type DeviceRepairVo } from '../types'

export function DeviceRepairTable() {
  const { data: { data = [] } = {} } = useQuery(
    deviceRepairQO({
      cFactoryUnitCode: 'FM0104',
      cType: CType.WORKSHOP
    })
  )

  return (
    <ScrollTable<DeviceRepairVo>
      title="设备维修信息"
      columns={[
        { key: 'cLineName', label: '产线' },
        { key: 'cDeviceName', label: '设备' },
        { key: 'cFaultName', label: '故障' },
        { key: 'dCreateTime', label: '维修时间' },
        { key: 'iStatusName', label: '状态' },
        { key: 'cPersonName', label: '维修人' }
      ]}
      data={data}
    />
  )
}
