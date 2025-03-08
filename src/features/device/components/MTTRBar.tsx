import type { EChartsOption } from 'echarts'

import { mttrQO } from '../queries'

export function MTTRBar() {
  const chartStore = useChartStore()
  const { data = [] } = useQuery(mttrQO())
  const { maxValue, currentSlicedData } = useSlicedData({
    data,
    size: 5,
    maxValueKey: 'iMinute'
  })

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '设备平均修复时间（MTTR）',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
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
        name: '设备名称',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        name: '分钟',
        min: 0,
        max: maxValue
      },
      series: [
        {
          type: 'bar',
          name: '分钟',
          encode: { x: 'cDeviceName', y: 'iMinute' },
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
    [maxValue, currentSlicedData]
  )

  return (
    <ReactChart
      className="size-full"
      theme={chartStore.theme}
      option={option}
    />
  )
}
