import type { EChartsOption } from 'echarts'

export function InternalReturnBar() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const lines = ['工段 A', '工段 B', '工段 C', '工段 D', '工段 E', '工段 F']
    return lines.map((line) => ({
      line,
      fg: Math.floor(Math.random() * 150),
      wx: Math.floor(Math.random() * 150),
      cz: Math.floor(Math.random() * 150)
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
        text: '内返统计',
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
        { type: 'bar', label: { show: true, position: 'top' } },
        { type: 'bar', label: { show: true, position: 'top' } }
      ],
      dataset: {
        dimensions: [
          { name: 'line', displayName: '工段' },
          { name: 'fg', displayName: '返工' },
          { name: 'wx', displayName: '维修' },
          { name: 'cz', displayName: '重做' }
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
