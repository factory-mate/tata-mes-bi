interface MaterialVo {
  date: string
  material: string
  name: string
}

export function MaterialTable() {
  const data: MaterialVo[] = [
    {
      date: '2021-10-01',
      material: '物料A',
      name: '雕刻'
    },
    {
      date: '2021-10-01',
      material: '物料B',
      name: '三合一'
    },
    {
      date: '2021-10-01',
      material: '物料C',
      name: '封边'
    }
  ]

  return (
    <ScrollTable<MaterialVo>
      title="工位物料呼叫信息（测试中）"
      columns={[
        {
          key: 'name',
          label: '工位'
        },
        {
          key: 'material',
          label: '物料'
        },
        {
          key: 'date',
          label: '时间'
        }
      ]}
      data={data}
    />
  )
}
