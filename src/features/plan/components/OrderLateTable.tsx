interface OrderLateVo {
  date: string
  value: number
  dayNum: number
  id: string
}

export function OrderLateTable() {
  const data: OrderLateVo[] = [
    {
      date: '2021-10-01',
      value: 10,
      dayNum: 1,
      id: '1'
    },
    {
      date: '2021-10-01',
      value: 10,
      dayNum: 1,
      id: '2'
    },
    {
      date: '2021-10-01',
      value: 10,
      dayNum: 1,
      id: '3'
    }
  ]

  return (
    <ScrollTable<OrderLateVo>
      title="订单内部晚期统计"
      columns={[
        {
          key: 'id',
          label: '订单号'
        },
        {
          key: 'date',
          label: '内部出货时间'
        },
        {
          key: 'dayNum',
          label: '晚期天数'
        },
        {
          key: 'value',
          label: '晚期原因'
        }
      ]}
      data={data}
    />
  )
}
