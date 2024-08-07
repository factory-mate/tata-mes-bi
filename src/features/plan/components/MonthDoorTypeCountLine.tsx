import type { EChartsOption } from 'echarts'

export function MonthDoorTypeCountLine() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const types = ['线框门', '平贴门', '磁吸门', '凹槽门', '其他门']
    return types.map((type) => ({
      type,
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
        text: '本月门型数量统计',
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
        name: '门型',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 60
      },
      series: [{ type: 'line', name: '数量', label: { show: true, position: 'top' } }],
      dataset: {
        dimensions: [
          { name: 'type', displayName: '门型' },
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
