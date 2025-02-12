import type { EChartsOption } from 'echarts'

import { cumulativeDownTimeQO } from '../queries'

export function CumulativeDownTime() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(cumulativeDownTimeQO())

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '累计停机时间',
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
        right: 50,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '月份',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        name: '小时',
        min: 0,
        max: 250
      },
      series: [
        {
          type: 'line',
          name: '数量',
          encode: { x: 'cMonth', y: 'iHour' },
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
