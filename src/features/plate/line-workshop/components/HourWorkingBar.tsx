import type { EChartsOption } from 'echarts'

import { hourWorkingQO } from '../queries'

export function HourWorkingBar() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    hourWorkingQO({
      orderByFileds: 'GDCode',
      conditions: 'GDCode in (FM010502,FM010506,FM010507,FM010508,FM010511)'
    })
  )

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '工段小时加工量统计',
        left: 'center'
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
          label: { show: true, position: 'top' },
          encode: {
            x: '',
            y: ''
          }
        },
        {
          type: 'bar',
          label: { show: true, position: 'top' },
          encode: {
            x: '',
            y: ''
          }
        },
        {
          type: 'bar',
          label: { show: true, position: 'top' },
          encode: {
            x: '',
            y: ''
          }
        },
        {
          type: 'bar',
          label: { show: true, position: 'top' },
          encode: {
            x: '',
            y: ''
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
