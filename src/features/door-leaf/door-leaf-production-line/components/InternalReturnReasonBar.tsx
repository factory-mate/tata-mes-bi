import type { EChartsOption } from 'echarts'

export function InternalReturnReasonBar() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const types = ['鼓包', '划痕', '断裂', '尺寸', '颗粒']
    return types.map((t) => ({
      type: t,
      value: Math.floor(Math.random() * 150)
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
        text: '内返原因统计 TOP5',
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
        name: '数量',
        min: 0,
        max: 150
      },
      series: [{ type: 'bar', name: '数量', label: { show: true, position: 'top' } }],
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
