import type { EChartsOption } from 'echarts'

import { productionReachedQO } from '../queries'

export function ProductionReachedBar() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    productionReachedQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions:
        'cFactoryUnitCode in (FM01030101,FM01030102,FM01030103,FM01030104) && cProcessCode = GX0017'
    })
  )

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '生产达成统计',
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
        data: ['计划数量', '完成数量'],
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
        name: '门数',
        min: 0,
        max: 500
      },
      series: [
        {
          type: 'bar',
          name: '计划数量',
          label: { show: true, position: 'top' }
        },
        {
          type: 'bar',
          name: '完成数量',
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
