interface CheckVo {
  name: string
  check: string
  am: string
  pm: string
}

export function CheckTable() {
  const data: CheckVo[] = [
    {
      name: '封边',
      check: '2',
      am: '3',
      pm: '4'
    },
    {
      name: '三合一',
      check: '2',
      am: '3',
      pm: '4'
    },
    {
      name: '开锁',
      check: '2',
      am: '3',
      pm: '4'
    },
    {
      name: '雕刻',
      check: '2',
      am: '3',
      pm: '4'
    }
  ]

  return (
    <ScrollTable<CheckVo>
      title="工位设备点检/首件检"
      columns={[
        {
          key: 'name',
          label: '工位'
        },
        {
          key: 'check',
          label: '设备点检'
        },
        {
          key: 'am',
          label: '上午首件'
        },
        {
          key: 'pm',
          label: '下午首件'
        }
      ]}
      data={data}
    />
  )
}
