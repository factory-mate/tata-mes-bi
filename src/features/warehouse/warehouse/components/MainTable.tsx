interface Vo {
  supplier: string
  orderNum: number
  orderDoorNum: number
  orderSetNum: number
  monthOrderNum: number
  monthOrderDoorNum: number
  monthOrderSetNum: number
}

export function MainTable() {
  const data: Vo[] = [
    {
      supplier: 'A',
      orderNum: 10,
      orderDoorNum: 10,
      orderSetNum: 10,
      monthOrderNum: 10,
      monthOrderDoorNum: 10,
      monthOrderSetNum: 10
    },
    {
      supplier: 'A',
      orderNum: 10,
      orderDoorNum: 10,
      orderSetNum: 10,
      monthOrderNum: 10,
      monthOrderDoorNum: 10,
      monthOrderSetNum: 10
    },
    {
      supplier: 'A',
      orderNum: 10,
      orderDoorNum: 10,
      orderSetNum: 10,
      monthOrderNum: 10,
      monthOrderDoorNum: 10,
      monthOrderSetNum: 10
    },
    {
      supplier: 'A',
      orderNum: 10,
      orderDoorNum: 10,
      orderSetNum: 10,
      monthOrderNum: 10,
      monthOrderDoorNum: 10,
      monthOrderSetNum: 10
    },
    {
      supplier: 'A',
      orderNum: 10,
      orderDoorNum: 10,
      orderSetNum: 10,
      monthOrderNum: 10,
      monthOrderDoorNum: 10,
      monthOrderSetNum: 10
    },
    {
      supplier: 'A',
      orderNum: 10,
      orderDoorNum: 10,
      orderSetNum: 10,
      monthOrderNum: 10,
      monthOrderDoorNum: 10,
      monthOrderSetNum: 10
    }
  ]

  return (
    <ScrollTable<Vo>
      title=""
      columns={[
        {
          key: 'supplier',
          label: '物流商'
        },
        {
          key: 'orderNum',
          label: '已齐单数'
        },
        {
          key: 'orderDoorNum',
          label: '已齐门数'
        },
        {
          key: 'orderSetNum',
          label: '已齐套数'
        },
        {
          key: 'monthOrderNum',
          label: '月累计单数'
        },
        {
          key: 'monthOrderDoorNum',
          label: '月累计门数'
        },
        {
          key: 'monthOrderSetNum',
          label: '月累计套数'
        }
      ]}
      data={data}
    />
  )
}
