import type { EChartsOption } from 'echarts'

import { productionReachQO } from '../queries'

export function ProductionReachBar() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    productionReachQO({
      orderByFileds: 'cProcessCode',
      conditions: 'cProcessCode in (GX0102,GX0105,GX0106,GX0108)'
    })
  )

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '工段生产达成统计',
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
          label: { show: true, position: 'top' },
          encode: { x: 'cProcessName', y: 'EndCount' }
        },
        {
          type: 'bar',
          label: { show: true, position: 'top' },
          encode: { x: 'cProcessName', y: 'EndCount' }
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
