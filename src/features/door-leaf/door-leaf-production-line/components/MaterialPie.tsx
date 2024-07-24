import type { EChartsOption } from 'echarts'

export function MaterialPie() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const materials = ['花梨色', '银灰色', '白色', '其他', '电气']
    return materials.map((m) => ({
      material: m,
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
        text: '材质统计',
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
          { name: 'material', displayName: '材质' },
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
