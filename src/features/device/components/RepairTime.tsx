import type { EChartsOption } from 'echarts'

import { repairTimeQO } from '../queries'

export function RepairTime() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(repairTimeQO())

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '设备维修次数统计 TOP10',
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
        right: 80,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '设备名称',
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 10
      },
      series: [
        {
          type: 'bar',
          name: '数量',
          encode: { x: 'cDeviceName', y: 'nQuantity' },
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
