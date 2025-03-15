import type { EChartsOption } from 'echarts'

import { cumulativeDownTimeQO } from '../queries'

export function CumulativeDownTimeLine() {
  const chartStore = useChartStore()
  const { data = [] } = useQuery(cumulativeDownTimeQO())
  const { currentSlicedData } = useSlicedData({ data })

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: '累计停机时间',
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
          fontSize: 16,
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        name: '小时',
        max: 10,
        min: 0,
        interval: 2,
        axisLabel: {
          fontSize: 16
        }
      },
      series: [
        {
          type: 'line',
          name: '数量',
          encode: {
            x: 'cMonth',
            y: 'iHour'
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
