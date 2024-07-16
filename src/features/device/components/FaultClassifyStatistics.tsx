import type { EChartsOption } from 'echarts'

export function FaultClassifyStatistics() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const faults = ['感应器', '气路', '油路', '电路', '电气', '线路', '除尘', '机械', '行程开关']
    return faults.map((f) => ({
      fault: f,
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
        text: '设备故障分类占比',
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
          label: { show: true, position: 'outside', formatter: '{b}: {d}%' },
          top: 30
        }
      ],
      dataset: {
        dimensions: [
          { name: 'fault', displayName: '故障' },
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
