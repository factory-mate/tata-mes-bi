import type { EChartsOption } from 'echarts'

export function PrimaryYieldStatistics() {
  const chartStore = useChartStore()

  const option: EChartsOption = {
    textStyle: {
      fontFamily: 'inherit'
    },
    backgroundColor: '',
    title: {
      text: '一次良率统计',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      formatter: '{b}<br/>{a}: {c}%'
    },
    grid: {
      left: 0,
      right: 120,
      bottom: 10,
      tooltip: true,
      containLabel: true
    },
    legend: {
      data: ['一次良率', '标准良率'],
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
      name: '百分比',
      min: 80,
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        type: 'line',
        name: '一次良率',
        data: [88, 90, 92, 89, 99, 87],
        label: { show: true, formatter: '{c}%' }
      },
      {
        type: 'line',
        name: '标准良率',
        data: [95, 95, 95, 95, 95, 95],
        label: { show: true, formatter: '{c}%' }
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
