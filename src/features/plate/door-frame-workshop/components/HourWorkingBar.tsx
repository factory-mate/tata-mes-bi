import type { EChartsOption } from 'echarts'

import { hourWorkingQO } from '../queries'

interface HourWorkingBarProps {
  orderByFileds: string
  conditions: string
}

export function HourWorkingBar(props: HourWorkingBarProps) {
  const { orderByFileds, conditions } = props

  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    hourWorkingQO({
      orderByFileds,
      conditions
    })
  )

  const { currentSlicedData } = useSlicedData({
    data,
    xAxisSize: 1
  })

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: `${currentSlicedData?.at(0)?.cProcessName ?? '工段'}小时加工量统计`,
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
        name: '小时',
        data: ['1小时', '2小时', '3小时', '4小时', '5小时', '6小时', '7小时', '8小时', '加班'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 16,
          interval: 0,
          width: 60
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 1000,
        nameTextStyle: {
          padding: 8
        },
        axisLabel: {
          fontSize: 16
        }
      },
      series: {
        type: 'bar',
        label: { show: true, position: 'top' },
        data: [
          currentSlicedData?.at(0)?.iPackageCount01 ?? 0,
          currentSlicedData?.at(0)?.iPackageCount02 ?? 0,
          currentSlicedData?.at(0)?.iPackageCount03 ?? 0,
          currentSlicedData?.at(0)?.iPackageCount04 ?? 0,
          currentSlicedData?.at(0)?.iPackageCount05 ?? 0,
          currentSlicedData?.at(0)?.iPackageCount06 ?? 0,
          currentSlicedData?.at(0)?.iPackageCount07 ?? 0,
          currentSlicedData?.at(0)?.iPackageCount08 ?? 0,
          currentSlicedData?.at(0)?.iPackageCount09 ?? 0
        ]
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
