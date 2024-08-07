import type { EChartsOption } from 'echarts'

export function TotalOrderCountPie() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const types = ['二十五厂', '其他']
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
        text: '总单数占比统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
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
          top: 10
        }
      ],
      dataset: {
        dimensions: [
          { name: 'type', displayName: '类型' },
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
