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
      orderByFileds: 'cFactoryUnitCode',
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
        max: 150,
        axisLabel: {
          fontSize: 16
        }
      },
      series: [
        {
          type: 'bar',
          label: {
            show: true,
            position: 'top'
          },
          encode: {
            x: 'cRepairReasonTypeName',
            y: 'nQuantity'
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
