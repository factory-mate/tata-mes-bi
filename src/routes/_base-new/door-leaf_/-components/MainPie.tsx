import type { EChartsOption } from 'echarts'

import { lineCompleteRateQO } from '@/features/door-leaf/door-leaf-package'

export default function MainPie() {
  const chartStore = useChartStore()

  const { data } = useQuery(
    lineCompleteRateQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode = FM01010101'
    })
  )

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 22
      },
      backgroundColor: '',
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
            position: 'outside',
            // 显示具体数值，而不是百分比
            formatter: '{c}'
          },
          top: 40,
          left: 15,
          right: 0,
          radius: ['40%', '80%']
        }
      ],
      dataset: {
        source: [
          ['type', 'value'],
          [
            '未完成量',
            (data?.at(0)?.AllCount ?? 0) -
              ((data?.at(0)?.EndCount ?? 0) + (data?.at(1)?.EndCount ?? 0))
          ],
          ['自动线产量', data?.[0]?.EndCount ?? 0],
          ['手动线产量', data?.[1]?.EndCount ?? 0]
        ]
      }
    }),
    [data]
  )

  return (
    <ReactChart
      className="absolute size-full"
      style={{
        top: '22.5%',
        left: 0,
        right: 0,
        margin: '0 auto',
        width: '40%',
        height: '40%'
      }}
      theme={chartStore.theme}
      option={option}
    />
  )
}
