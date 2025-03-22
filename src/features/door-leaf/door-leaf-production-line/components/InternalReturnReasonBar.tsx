import type { EChartsOption } from 'echarts'

import { internalReturnReasonQO } from '../queries'

interface InternalReturnReasonBarProps {
  conditions: string
}

export function InternalReturnReasonBar(props: InternalReturnReasonBarProps) {
  const { conditions } = props

  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    internalReturnReasonQO({
      orderByFileds: 'nQuantity',
      conditions
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
        text: '内返原因统计 TOP5',
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
      grid: {
        left: 5,
        right: 80,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '内返类型',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 16,
          interval: 0,
          width: 60,
          overflow: 'break'
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          fontSize: 16
        }
      },
      series: [
        {
          type: 'bar',
          name: '数量',
          encode: {
            x: 'cRepairReasonTypeName',
            y: 'nQuantity'
          },
          label: {
            show: true,
            position: 'top'
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
