import type { EChartsOption } from 'echarts'

import { faultClassifyQO } from '../queries'

export function FaultClassifyPie() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(faultClassifyQO())

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: '设备故障分类占比',
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
          name: '数量',
          label: {
            show: true,
            position: 'outside',
            formatter: '{d}%'
          },
          top: 40,
          left: 0,
          right: 0,
          encode: {
            itemName: 'cFaultClassName',
            value: 'iRate',
            tooltip: 'nQuantity'
          }
        }
      ],
      dataset: {
        source: data
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
