import type { EChartsOption } from 'echarts'

import { internalReturnTypeQO } from '@/features/door-leaf/door-leaf-package'

export default function InternalReturnTypePie() {
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
        top: 6,
        left: 30,
        textStyle: {
          fontSize: 18
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
      },
      legend: {
        orient: 'vertical',
        left: 0,
        top: 40
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
          ['维修', data?.[0]?.WXCount ?? 0],
          ['返修', data?.[0]?.FXCount ?? 0],
          ['重做', data?.[0]?.CZCount ?? 0]
        ]
      }
    }),
    [data]
  )

  return (
    <ReactChart
      className="absolute size-full"
      style={{
        top: '65.5%',
        left: '1.8%',
        width: '25.9%',
        height: '26.5%'
      }}
      theme={chartStore.theme}
      option={option}
    />
  )
}
