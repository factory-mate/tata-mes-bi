interface KnifeVo {
  name: string
  knife: string
  rest: string
}

export function KnifeTable() {
  const data: KnifeVo[] = [
    {
      name: '设备A',
      knife: '刀具A',
      rest: '3'
    },
    {
      name: '设备A',
      knife: '刀具A',
      rest: '4'
    },
    {
      name: '设备A',
      knife: '刀具A',
      rest: '5'
    }
  ]

  return (
    <ScrollTable<KnifeVo>
      title="刀具预警信息"
      columns={[
        {
          key: 'name',
          label: '设备'
        },
        {
          key: 'knife',
          label: '用量'
        },
        {
          key: 'rest',
          label: '剩余寿命'
        }
      ]}
      data={data}
    />
  )
}
