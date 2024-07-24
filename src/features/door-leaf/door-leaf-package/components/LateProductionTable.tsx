interface LateProductionVo {
  date: string
  value: number
  dayNum: number
}

export function LateProductionTable() {
  const data: LateProductionVo[] = [
    {
      date: '2021-10-01',
      value: 10,
      dayNum: 1
    },
    {
      date: '2021-10-01',
      value: 10,
      dayNum: 1
    },
    {
      date: '2021-10-01',
      value: 10,
      dayNum: 1
    }
  ]

  return (
    <ScrollTable<LateProductionVo>
      title="生产晚期信息"
      columns={[
        {
          key: 'date',
          label: '生产日期'
        },
        {
          key: 'value',
          label: '缺货包数'
        },
        {
          key: 'dayNum',
          label: '晚期天数'
        }
      ]}
      data={data}
    />
  )
}
