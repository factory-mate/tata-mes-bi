interface CheckVo {
  name: string
  check: string
  maintain: string
  am: string
  pm: string
}

export default function CheckTable() {
  const data: CheckVo[] = [
    {
      name: '工位A',
      check: '2',
      maintain: '1',
      am: '3',
      pm: '4'
    },
    {
      name: '工位B',
      check: '2',
      maintain: '1',
      am: '3',
      pm: '4'
    },
    {
      name: '工位C',
      check: '2',
      maintain: '1',
      am: '3',
      pm: '4'
    }
  ]

  return (
    <ScrollTableNew<CheckVo>
      title="工位作业统计（测试中）"
      columns={[
        { key: 'name', label: '工位' },
        { key: 'check', label: '设备点检' },
        { key: 'maintain', label: '设备保养' },
        { key: 'am', label: '首件-上午' },
        { key: 'pm', label: '首件-下午' }
      ]}
      data={data}
      style={{
        position: 'absolute',
        top: '65.5%',
        left: '73%',
        width: '25.9%',
        height: '26.5%'
      }}
    />
  )
}
