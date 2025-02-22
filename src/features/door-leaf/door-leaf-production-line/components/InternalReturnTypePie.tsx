import type { EChartsOption } from 'echarts'

import { internalReturnTypeQO } from '../queries'

export function InternalReturnTypePie() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    internalReturnTypeQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode = FM01010101'
    })
  )

  const generateRandomData = () => {
    const types = ['重做', '返工', '维修']
    return types.map((t) => ({
      type: t,
      value: Math.floor(Math.random() * 60)
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
        text: '内返类型占比统计',
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
          { name: 'type', displayName: '内返类型' },
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
