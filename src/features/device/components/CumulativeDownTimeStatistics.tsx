import type { EChartsOption } from 'echarts'

export function CumulativeDownTimeStatistics() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const months = [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月'
    ]
    return months.map((m) => ({
      month: m,
      value: Math.floor(Math.random() * 60)
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
        text: '累计停机时间',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '月份',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        name: '小时',
        min: 0,
        max: 60
      },
      series: [{ type: 'line', name: '数量', label: { show: true, position: 'top' } }],
      dataset: {
        dimensions: [
          { name: 'month', displayName: '月份' },
          { name: 'value', displayName: '小时' }
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
