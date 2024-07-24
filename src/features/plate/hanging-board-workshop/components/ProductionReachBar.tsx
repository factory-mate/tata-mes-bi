import type { EChartsOption } from 'echarts'

export function ProductionReachBar() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const lines = ['工段 A', '工段 B', '工段 C', '工段 D']
    return lines.map((line) => ({
      line,
      planNum: Math.floor(Math.random() * 150),
      finishNum: Math.floor(Math.random() * 150)
    }))
  }

  const [source, setSource] = useState(generateRandomData())

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '工段生产达成统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        align: 'left',
        top: 0,
        right: 0,
        orient: 'vertical'
      },
      grid: {
        left: 0,
        right: 70,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '工段',
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 150
      },
      series: [
        { type: 'bar', label: { show: true, position: 'top' } },
        { type: 'bar', label: { show: true, position: 'top' } }
      ],
      dataset: {
        dimensions: [
          { name: 'line', displayName: '工段' },
          { name: 'planNum', displayName: '计划数量' },
          { name: 'finishNum', displayName: '完成数量' }
        ],
        source
      }
    }),
    [source]
  )

  return (
    <ReactChart
      className="size-full"
      theme={chartStore.theme}
      option={option}
    />
  )
}
