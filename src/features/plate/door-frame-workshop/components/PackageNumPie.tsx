import type { EChartsOption } from 'echarts'

import { packageNumQO } from '../queries'

export function PackageNumPie() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    packageNumQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cProcessCode = GX0075'
    })
  )

  const generateRandomData = () => {
    const lines = ['工位 A', '工位 B', '工位 C', '工位 D', '工位 E']
    return lines.map((line) => ({
      line,
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
        text: '工位包装数量占比统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
      },
      legend: {
        orient: 'vertical',
        right: 0,
        top: 0,
        data: source.map((i) => i.line)
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
          right: 0
        }
      ],
      dataset: {
        dimensions: [
          { name: 'line', displayName: '工位' },
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
