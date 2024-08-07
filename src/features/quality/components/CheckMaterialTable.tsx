interface CheckMaterialVo {
  type: string
  name: string
  supplier: string
  date: string
}

export function CheckMaterialTable() {
  const data: CheckMaterialVo[] = [
    {
      type: '来料检',
      name: '三合一',
      supplier: '供应商1',
      date: '05-08  12:34'
    },
    {
      type: '库存检',
      name: '三合一',
      supplier: '供应商2',
      date: '05-08  12:34'
    },
    {
      type: '来料检',
      name: '封边',
      supplier: '供应商2',
      date: '05-08  12:34'
    },
    {
      type: '来料检',
      name: '开锁',
      supplier: '供应商2',
      date: '05-08  12:34'
    }
  ]

  return (
    <ScrollTable<CheckMaterialVo>
      title="报检物料信息"
      columns={[
        {
          key: 'type',
          label: '检验类型'
        },
        {
          key: 'name',
          label: '物料名称'
        },
        {
          key: 'supplier',
          label: '供应商'
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
