import type { EChartsOption } from 'echarts'

import { internalReturnTypeQO } from '../queries'

interface InternalReturnTypePieProps {
  conditions: string
}

export function InternalReturnTypePie(props: InternalReturnTypePieProps) {
  const { conditions } = props

  const chartStore = useChartStore()

  const { data } = useQuery(
    internalReturnTypeQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions
    })
  )

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: '合格率统计',
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
      legend: {
        orient: 'vertical',
        left: 0
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
            position: 'outside',
            formatter: '{d}%'
          },
          top: 40,
          left: 0,
          right: 0
        }
      ],
      dataset: {
        source: [
          ['type', 'value'],
          ['维修', data?.WXRate],
          ['返修', data?.FXRate],
          ['重做', data?.CZRate],
          ['合格', data?.OKRate]
        ]
      }
    }),
    [data]
  )

  return (
    <ReactChart
      className="size-full"
      theme={chartStore.theme}
      option={option}
    />
  )
}
