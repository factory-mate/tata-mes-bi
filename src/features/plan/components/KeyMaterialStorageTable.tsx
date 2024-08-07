interface KeyMaterialStorageVo {
  name: string
  spec: string
  num: number
}

export function KeyMaterialStorageTable() {
  const data: KeyMaterialStorageVo[] = [
    {
      name: '材料 A',
      spec: '规格 A',
      num: 10
    },
    {
      name: '材料 B',
      spec: '规格 B',
      num: 10
    },
    {
      name: '材料 C',
      spec: '规格 C',
      num: 10
    }
  ]

  return (
    <ScrollTable<KeyMaterialStorageVo>
      title="关键材料库存"
      columns={[
        {
          key: 'name',
          label: '材料名称'
        },
        {
          key: 'spec',
          label: '规格'
        },
        {
          key: 'num',
          label: '数量'
        }
      ]}
      data={data}
    />
  )
}
