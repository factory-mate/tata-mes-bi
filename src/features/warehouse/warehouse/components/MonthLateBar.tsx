import type { EChartsOption } from 'echarts'

export function MonthLateBar() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const lines = ['A线', 'B线', 'C线', 'D线', 'E线', 'F线', 'G线']
    return lines.map((line) => ({
      line,
      zd: Math.floor(Math.random() * 150),
      fx: Math.floor(Math.random() * 150),
      pd: Math.floor(Math.random() * 150),
      sgd: Math.floor(Math.random() * 150),
      bhd: Math.floor(Math.random() * 150)
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
        text: '月晚期统计表',
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
        { type: 'bar', label: { show: true, position: 'top' } },
        { type: 'bar', label: { show: true, position: 'top' } },
        { type: 'bar', label: { show: true, position: 'top' } }
      ],
      dataset: {
        dimensions: [
          { name: 'line', displayName: '工段' },
          { name: 'zd', displayName: '主单' },
          { name: 'fx', displayName: '返修' },
          { name: 'pd', displayName: '派的' },
          { name: 'sgd', displayName: '手动单' },
          { name: 'bhd', displayName: '补货单' }
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
