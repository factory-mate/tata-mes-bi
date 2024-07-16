interface ProductionVo {
  date: string
  line: string
  value: string
}

export function ProductionTable() {
  const data: ProductionVo[] = [
    {
      date: '2021-10-01',
      line: '产线AAAAAAAAAAAAAAAAA',
      value: '24'
    },
    {
      date: '2021-10-01',
      line: '产线AAAAAAAAAAAAAAAAA',
      value: '24'
    },
    {
      date: '2021-10-01',
      line: '产线AAAAAAAAAAAAAAAAA',
      value: '24'
    },
    {
      date: '2021-10-01',
      line: '产线AAAAAAAAAAAAAAAAA',
      value: '24'
    },
    {
      date: '2021-10-01',
      line: '产线AAAAAAAAAAAAAAAAA',
      value: '24'
    },
    {
      date: '2021-10-01',
      line: '产线AAAAAAAAAAAAAAAAA',
      value: '24'
    },
    {
      date: '2021-10-01',
      line: '产线AAAAAAAAAAAAAAAAA',
      value: '24'
    },
    {
      date: '2021-10-01',
      line: '产线AAAAAAAAAAAAAAAAA',
      value: '24'
    },
    {
      date: '2021-10-01',
      line: '产线AAAAAAAAAAAAAAAAA',
      value: '24'
    },
    {
      date: '2021-10-01',
      line: '产线AAAAAAAAAAAAAAAAA',
      value: '24'
    }
  ]

  return (
    <ScrollTable<ProductionVo>
      title="设备维修信息"
      columns={[
        {
          key: 'date',
          label: '生产日期'
        },
        {
          key: 'line',
          label: '生产产线'
        },
        {
          key: 'value',
          label: '未完成数'
        }
      ]}
      data={data}
    />
  )
}
