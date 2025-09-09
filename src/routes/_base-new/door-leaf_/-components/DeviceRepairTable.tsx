import { deviceRepairQO } from '@/features/door-leaf/door-leaf-package'
import { CType, type DeviceRepairVo } from '@/features/door-leaf/door-leaf-package'

export default function DeviceRepairTable() {
  const { data: { data = [] } = {} } = useQuery(
    deviceRepairQO({
      cFactoryUnitCode: 'FM01010401',
      cType: CType.LINE
    })
  )

  return (
    <ScrollTableNew<DeviceRepairVo>
      title="设备维修信息"
      columns={[
        { key: 'cDeviceName', label: '设备' },
        { key: 'cFaultName', label: '故障' },
        { key: 'dCreateTime', label: '维修时间' },
        { key: 'iStatusName', label: '状态' },
        { key: 'cPersonName', label: '维修人' }
      ]}
      data={data}
      style={{
        position: 'absolute',
        top: '7.7%',
        left: '73%',
        width: '25.9%',
        height: '26.5%'
      }}
      showIndex
    />
  )
}
