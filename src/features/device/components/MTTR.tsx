import type { EChartsOption } from 'echarts'

import { mttrQO } from '../queries'

export function MTTR() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(mttrQO())

  const option: EChartsOption = useMemo(
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
        max: 10_000
      },
      series: [
        {
          type: 'bar',
          name: '分钟',
          encode: { x: 'cDeviceName', y: 'iMinute' },
          label: { show: true, position: 'top' }
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
