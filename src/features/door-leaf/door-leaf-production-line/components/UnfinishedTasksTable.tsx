interface UnfinishedTaskVo {
  date: string
  value: string
}

export function UnfinishedTasksTable() {
  const data: UnfinishedTaskVo[] = [
    {
      date: '2021-10-01',
      value: '2'
    },
    {
      date: '2021-10-01',
      value: '3'
    },
    {
      date: '2021-10-01',
      value: '4'
    }
  ]

  return (
    <ScrollTable<UnfinishedTaskVo>
      title="未完成任务统计"
      columns={[
        {
          key: 'date',
          label: '生产日期'
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
