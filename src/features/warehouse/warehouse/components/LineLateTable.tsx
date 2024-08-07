interface LineLateVo {
  type: string
  line: string
  num: number
  dayNum: number
  user: string
}

export function LineLateTable() {
  const data: LineLateVo[] = [
    {
      type: 'A',
      line: '1',
      num: 10,
      dayNum: 1,
      user: '1'
    },
    {
      type: 'A',
      line: '1',
      num: 10,
      dayNum: 1,
      user: '1'
    },
    {
      type: 'A',
      line: '1',
      num: 10,
      dayNum: 1,
      user: '1'
    },
    {
      type: 'A',
      line: '1',
      num: 10,
      dayNum: 1,
      user: '1'
    },
    {
      type: 'A',
      line: '1',
      num: 10,
      dayNum: 1,
      user: '1'
    },
    {
      type: 'A',
      line: '1',
      num: 10,
      dayNum: 1,
      user: '1'
    }
  ]

  return (
    <ScrollTable<LineLateVo>
      title="日产线内部晚期统计"
      columns={[
        {
          key: 'type',
          label: '产品类别'
        },
        {
          key: 'line',
          label: '产线'
        },
        {
          key: 'num',
          label: '包数'
        },
        {
          key: 'dayNum',
          label: '晚期天数'
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
