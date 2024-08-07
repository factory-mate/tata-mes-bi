interface LineCheckVo {
  line: string
  area: string
  changeNum: number
  finishNum: number
  user: string
}

export function LineCheckTable() {
  const data: LineCheckVo[] = [
    {
      line: '产线1',
      area: '问题点1',
      changeNum: 1,
      finishNum: 1,
      user: '张三'
    },
    {
      line: '产线2',
      area: '问题点2',
      changeNum: 2,
      finishNum: 2,
      user: '李四'
    },
    {
      line: '产线1',
      area: '问题点1',
      changeNum: 1,
      finishNum: 1,
      user: '张三'
    },
    {
      line: '产线2',
      area: '问题点2',
      changeNum: 2,
      finishNum: 2,
      user: '李四'
    },
    {
      line: '产线1',
      area: '问题点1',
      changeNum: 1,
      finishNum: 1,
      user: '张三'
    },
    {
      line: '产线2',
      area: '问题点2',
      changeNum: 2,
      finishNum: 2,
      user: '李四'
    }
  ]

  return (
    <ScrollTable<LineCheckVo>
      title="产线巡检"
      columns={[
        {
          key: 'line',
          label: '产线'
        },
        {
          key: 'area',
          label: '问题点数'
        },
        {
          key: 'changeNum',
          label: '整改次数'
        },
        {
          key: 'finishNum',
          label: '完成次数'
        },
        {
          key: 'user',
          label: '责任人'
        }
      ]}
      data={data}
    />
  )
}
