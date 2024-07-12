import type { EChartsOption } from 'echarts'

export function ProductionReachedStatistics() {
  const chartStore = useChartStore()

  const option: EChartsOption = {
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
      right: 120,
      bottom: 10,
      tooltip: true,
      containLabel: true
    },
    legend: {
      data: ['计划数量', '完成数量'],
      align: 'left',
      right: 0,
      top: 'center',
      orient: 'vertical'
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
        data: [400, 440, 415, 500, 420, 440],
        label: { show: true, position: 'top' }
      },
      {
        type: 'bar',
        name: '完成数量',
        data: [220, 230, 340, 325, 316, 200],
        label: { show: true, position: 'top' }
      }
    ]
  }
  return (
    <ReactChart
      className="size-full"
      theme={chartStore.theme}
      option={option}
    />
  )
}
