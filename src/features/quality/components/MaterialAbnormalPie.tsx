import type { EChartsOption } from 'echarts'

export function MaterialAbnormalPie() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const types = ['异常1', '异常2', '异常3', '异常4', '异常5', '其他']
    return types.map((t) => ({
      type: t,
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
        text: '用料异常占比TOP6',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
      },
      legend: {
        orient: 'vertical',
        right: 0,
        top: 'center'
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        tooltip: true,
        containLabel: true
      },
      series: [
        {
          type: 'pie',
          name: '百分比',
          label: { show: true, position: 'inner', formatter: '{b}: {d}%' },
          top: 10,
          right: 60
        }
      ],
      dataset: {
        dimensions: [
          { name: 'type', displayName: '异常类型' },
          { name: 'value', displayName: '百分比' }
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
