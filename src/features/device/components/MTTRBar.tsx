import type { EChartsOption } from 'echarts'

import { mttrQO } from '../queries'

export function MTTRBar() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(mttrQO())

  const { currentSlicedData } = useSlicedData({ data })

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: '设备平均修复时间（MTTR）',
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
        name: '设备名称',
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
        name: '分钟',
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
          name: '分钟',
          encode: {
            x: 'cDeviceName',
            y: 'iMinute'
          },
          label: {
            show: true,
            position: 'top'
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
