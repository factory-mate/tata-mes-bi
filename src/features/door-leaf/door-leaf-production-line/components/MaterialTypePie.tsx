import type { EChartsOption } from 'echarts'

import { materialTypeQO } from '../queries'

interface MaterialTypePieProps {
  conditions: string
}

export function MaterialTypePie(props: MaterialTypePieProps) {
  const { conditions } = props

  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    materialTypeQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions
    })
  )

  const { currentSlicedData } = useSlicedData({ data, xAxisSize: 5 })

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: '材质统计',
        left: 'center',
        textStyle: {
          fontSize: 24
        },
        top: 10
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
          label: {
            show: true,
            position: 'inner',
            formatter: '{b}: {d}%'
          },
          top: 40,
          left: 0,
          right: 0,
          encode: {
            itemName: 'cDynamicsParm06',
            value: 'iRate',
            tooltip: 'nQuantity'
          }
        }
      ],
      dataset: {
        source: currentSlicedData
      }
    }),
    [currentSlicedData]
  )

  return (
    <ReactChart
      className="size-full"
      theme={chartStore.theme}
      option={option}
    />
  )
}
