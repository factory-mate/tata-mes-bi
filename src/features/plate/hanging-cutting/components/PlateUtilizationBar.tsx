import type { EChartsOption } from 'echarts'

export function PlateUtilizationBar() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const types = ['板材 A', '板材 B', '板材 C', '板材 D', '板材 E']
    return types.map((t) => ({
      type: t,
      value: Math.floor(Math.random() * 20) + 80
    }))
  }

  const [source, setSource] = useState(generateRandomData())

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '板材利用率统计',
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
        name: '内返类型',
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: '百分比',
        min: 80,
        max: 100
      },
      series: [
        {
          type: 'bar',
          name: '数量',
          label: {
            show: true,
            position: 'top',
            formatter: '{@value}%'
          }
        }
      ],
      dataset: {
        dimensions: [
          { name: 'type', displayName: '内返类型' },
          { name: 'value', displayName: '数量' }
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
