import type { EChartsOption } from 'echarts'

import { gaugeQO } from '../queries'

interface GaugeProps {
  conditions: string
}

export function Gauge(props: GaugeProps) {
  const { conditions } = props

  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    gaugeQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions
    })
  )

  const { currentSlicedData } = useSlicedData({ data, xAxisSize: 1 })

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
          radius: '100%',
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
              width: 10
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
              value: currentSlicedData.at(0)?.iRate ? Number(currentSlicedData.at(0)?.iRate) : 0,
              name: '一次良率'
            }
          ],
          title: {
            fontSize: 16,
            offsetCenter: ['0%', '20%']
          },
          detail: {
            width: 50,
            height: 20,
            fontSize: 20,
            formatter: '{value}%',
            valueAnimation: true,
            offsetCenter: ['0%', '-20%']
          }
        }
      ]
    }),
    [currentSlicedData]
  )

  return (
    <div className="relative flex size-full flex-col space-y-4">
      <ReactChart
        className="size-full"
        theme={chartStore.theme}
        option={deviceOption}
      />
      <div className="absolute inset-x-0 bottom-4 mx-auto flex flex-col items-center space-y-2">
        <span>{currentSlicedData.at(0)?.cProcessCode}</span>
        <span>{currentSlicedData.at(0)?.cProcessName}</span>
      </div>
    </div>
  )
}
