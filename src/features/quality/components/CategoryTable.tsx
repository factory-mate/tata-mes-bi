interface CategoryVo {
  type: string
  batch: string
  okBatch: string
  ratio: string
}

export function CategoryTable() {
  const data: CategoryVo[] = [
    {
      type: '板材',
      batch: '100',
      okBatch: '90',
      ratio: '90%'
    },
    {
      type: '配件',
      batch: '100',
      okBatch: '90',
      ratio: '90%'
    },
    {
      type: 'L线',
      batch: '100',
      okBatch: '90',
      ratio: '90%'
    },
    {
      type: 'PVC',
      batch: '100',
      okBatch: '90',
      ratio: '90%'
    },
    {
      type: '胶类',
      batch: '100',
      okBatch: '90',
      ratio: '90%'
    }
  ]

  return (
    <ScrollTable<CategoryVo>
      title=""
      columns={[
        {
          key: 'type',
          label: '类别'
        },
        {
          key: 'batch',
          label: '批次'
        },
        {
          key: 'okBatch',
          label: '合格批次'
        },
        {
          key: 'ratio',
          label: '合格率'
        }
      ]}
      data={data}
    />
  )
}
