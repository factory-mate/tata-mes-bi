interface PVCVo {
  name: string
  value: string
}

export function PVCTable() {
  const data: PVCVo[] = [
    {
      name: '材质',
      value: '2'
    },
    {
      name: '材质',
      value: '3'
    },
    {
      name: '材质',
      value: '4'
    }
  ]

  return (
    <ScrollTable<PVCVo>
      title="PVC材质用量统计"
      columns={[
        {
          key: 'name',
          label: '材质'
        },
        {
          key: 'value',
          label: '用量'
        }
      ]}
      data={data}
    />
  )
}
