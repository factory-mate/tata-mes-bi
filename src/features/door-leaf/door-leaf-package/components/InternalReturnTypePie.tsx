import type { EChartsOption } from 'echarts'

import { internalReturnTypeQO } from '../queries'

export function InternalReturnTypePie() {
  const chartStore = useChartStore()

  const { data } = useQuery(
    internalReturnTypeQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode = FM01010401'
    })
  )
  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: '内返类型占比统计',
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
            position: 'inside',
            formatter: '{b}: {d}%'
          },
          top: 40,
          left: 0,
          right: 0
        }
      ],
      dataset: {
        source: [
          ['type', 'value'],
          ['维修', data?.WXCount],
          ['返修', data?.FXCount],
          ['重做', data?.CZCount]
        ]
      },
      stillShowZeroSum: false
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
