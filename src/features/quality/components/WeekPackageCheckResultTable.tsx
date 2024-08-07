interface WeekPackageCheckResultVo {
  group: string
  value: number
  rank: number
}

export function WeekPackageCheckResultTable() {
  const data: WeekPackageCheckResultVo[] = [
    {
      group: 'A线',
      value: 10,
      rank: 1
    },
    {
      group: 'B线',
      value: 10,
      rank: 2
    },
    {
      group: 'C线',
      value: 10,
      rank: 3
    }
  ]

  return (
    <ScrollTable<WeekPackageCheckResultVo>
      title="本周按包抽检结果"
      columns={[
        {
          key: 'group',
          label: '组别'
        },
        {
          key: 'value',
          label: '得分'
        },
        {
          key: 'rank',
          label: '排名'
        }
      ]}
      data={data}
    />
  )
}
