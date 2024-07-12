import type { EChartsOption } from 'echarts'

export function MaterialStatistics() {
  const chartStore = useChartStore()

  const option: EChartsOption = {
    textStyle: {
      fontFamily: 'inherit'
    },
    backgroundColor: '',
    title: {
      text: '物料计划量 - 配送量对比',
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
      data: ['计划数量', '配送数量'],
      align: 'left',
      right: 0,
      top: 'center',
      orient: 'vertical'
    },
    xAxis: { type: 'value', name: '数量', min: 0, max: 150 },
    yAxis: {
      type: 'category',
      name: '物料',
      data: [
        '物料A',
        '物料B',
        '物料C',
        '物料D',
        '物料E',
        '物料F',
        '物料G',
        '物料H',
        '物料I',
        '物料J',
        '物料K',
        '物料L'
      ],
      axisTick: {
        alignWithLabel: true
      }
    },
    series: [
      {
        type: 'bar',
        name: '计划数量',
        data: [120, 140, 115, 100, 120, 140, 130, 140, 115, 100, 120, 140],
        label: { show: true, position: 'right' }
      },
      {
        type: 'bar',
        name: '配送数量',
        data: [50, 60, 70, 80, 90, 100, 50, 60, 70, 80, 90, 100],
        label: { show: true, position: 'right' }
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
