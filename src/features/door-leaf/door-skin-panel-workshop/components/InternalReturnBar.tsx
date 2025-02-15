import type { EChartsOption } from 'echarts'

import { internalReturnQO } from '../queries'

export function InternalReturnBar() {
  const chartStore = useChartStore()

  const { data } = useQuery(
    internalReturnQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode in (FM01030101,FM01030102,FM01030103,FM01030104)'
    })
  )

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '内返统计',
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
        right: 0,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      legend: {
        data: ['返工', '维修', '重做'],
        align: 'left',
        top: 0,
        right: 0,
        orient: 'horizontal'
      },
      xAxis: {
        type: 'category',
        name: '产线',
        data: ['产线A', '产线B', '产线C', '产线D', '产线E', '产线F'],
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 20
      },
      series: [
        {
          type: 'bar',
          name: '返工',
          label: { show: true, position: 'top' }
        },
        {
          type: 'bar',
          name: '维修',
          label: { show: true, position: 'top' }
        },
        {
          type: 'bar',
          name: '重做',
          label: { show: true, position: 'top' }
        }
      ],
      dataset: {
        source: data ?? []
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
