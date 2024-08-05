interface DeviceRepairVo {
  line: string
  device: string
  fault: string
  date: string
  status: string
  user: string
}

export function DeviceRepairTable() {
  const data: DeviceRepairVo[] = [
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    },
    {
      line: '产线AAAAAAAAAAAAAAAAA',
      device: '设备A',
      fault: '故障A',
      date: '2021-10-01',
      status: '已维修',
      user: '张三'
    }
  ]

  return (
    <ScrollTable<DeviceRepairVo>
      title="设备维修信息"
      columns={[
        {
          key: 'line',
          label: '生产产线'
        },
        {
          key: 'device',
          label: '设备名称'
        },
        {
          key: 'fault',
          label: '故障'
        },
        {
          key: 'date',
          label: '保修时间'
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
