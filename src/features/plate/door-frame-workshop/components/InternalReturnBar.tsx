import type { EChartsOption } from 'echarts'

import { internalReturnQO } from '../queries'

interface InternalReturnBarProps {
  conditions: string
}

export function InternalReturnBar(props: InternalReturnBarProps) {
  const { conditions } = props

  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    internalReturnQO({
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
        text: '内返统计',
        left: 'center',
        textStyle: {
          fontSize: 24
        },
        top: 10
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        align: 'left',
        top: 0,
        right: 0,
        orient: 'vertical'
      },
      grid: {
        left: 0,
        right: 70,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '工段',
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 150
      },
      series: [
        {
          type: 'bar',
          label: {
            show: true,
            position: 'top'
          },
          encode: {
            x: 'cFactoryUnitCode',
            y: 'WXCount'
          }
        },
        {
          type: 'bar',
          label: {
            show: true,
            position: 'top'
          },
          encode: {
            x: 'cFactoryUnitCode',
            y: 'FXCount'
          }
        },
        {
          type: 'bar',
          label: {
            show: true,
            position: 'top'
          },
          encode: {
            x: 'cFactoryUnitCode',
            y: 'CZCount'
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
