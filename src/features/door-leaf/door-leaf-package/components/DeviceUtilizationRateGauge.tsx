import type { EChartsOption } from 'echarts'

import { deviceUtilizationRateQO } from '../queries'

export function DeviceUtilizationRateGauge() {
  const chartStore = useChartStore()

  const { data } = useQuery(deviceUtilizationRateQO())

  const deviceOption = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        tooltip: true,
        containLabel: true
      },
      tooltip: {
        show: true,
        valueFormatter: (value) => `${value}%`
      },
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1
            }
          },
          axisLine: {
            lineStyle: {
              width: 20
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: [
            {
              value: data ?? 0,
              name: '设备稼动率'
            }
          ],
          title: {
            fontSize: 20,
            offsetCenter: ['0%', '20%']
          },
          detail: {
            width: 50,
            height: 20,
            fontSize: 30,
            formatter: '{value}%',
            valueAnimation: true,
            offsetCenter: ['0%', '-20%']
          }
        }
      ]
    }),
    [data]
  )

  return (
    <ReactChart
      className="size-full"
      theme={chartStore.theme}
      option={deviceOption}
    />
  )
}
