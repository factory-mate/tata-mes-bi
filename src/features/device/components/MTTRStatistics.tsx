import type { EChartsOption } from 'echarts'

export function MTTRStatistics() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const devices = [
      '雕刻机',
      '开锁机',
      '空压机',
      '门套包裹机',
      '线条包裹机',
      '四面锯',
      '封边机',
      '磁吸机',
      '传送台'
    ]
    return devices.map((w) => ({
      device: w,
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
        text: '设备平均修复时间（MTTR）',
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
        name: '设备名称',
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
        max: 150
      },
      series: [{ type: 'bar', name: '数量', label: { show: true, position: 'top' } }],
      dataset: {
        dimensions: [
          { name: 'device', displayName: '设备名称' },
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
