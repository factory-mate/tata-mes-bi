interface DeviceRepairVo {
  line: string
  device: string
  fault: string
  repairTime: string
  status: string
  user: string
}

export function DeviceRepairTable() {
  const data: DeviceRepairVo[] = [
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      repairTime: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线B',
      device: '设备B',
      fault: '故障B',
      repairTime: '2021-10-02',
      status: '未维修',
      user: '李四'
    },
    {
      line: '产线A',
      device: '设备A',
      fault: '故障A',
      repairTime: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线B',
      device: '设备B',
      fault: '故障B',
      repairTime: '2021-10-02',
      status: '未维修',
      user: '李四'
    },
    {
      line: '产线A',
      device: '设备A',
      fault: '故障A',
      repairTime: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线B',
      device: '设备B',
      fault: '故障B',
      repairTime: '2021-10-02',
      status: '未维修',
      user: '李四'
    },
    {
      line: '产线A',
      device: '设备A',
      fault: '故障A',
      repairTime: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线B',
      device: '设备B',
      fault: '故障B',
      repairTime: '2021-10-02',
      status: '未维修',
      user: '李四'
    }
  ]

  return (
    <ScrollTable<DeviceRepairVo>
      title="设备维修信息"
      columns={[
        {
          key: 'line',
          label: '产线'
        },
        {
          key: 'device',
          label: '设备'
        },
        {
          key: 'fault',
          label: '故障'
        },
        {
          key: 'repairTime',
          label: '维修时间'
        },
        {
          key: 'status',
          label: '状态'
        },
        {
          key: 'user',
          label: '责任人'
        }
      ]}
      data={data}
    />
  )
}
