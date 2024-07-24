import type { EChartsOption } from 'echarts'

import { getRandomValue } from '@/features/random'

export function Gauge() {
  const chartStore = useChartStore()

  const [percent, setPercent] = useState([getRandomValue(), getRandomValue()])

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent([getRandomValue(), getRandomValue()])
    }, 5000)

    return () => clearInterval(timer)
  }, [])

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
              value: percent[0],
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
    [percent]
  )

  const throughOption: EChartsOption = useMemo(
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
              value: percent[1],
              name: '直通率',
              itemStyle: {
                color: '#7cffb2'
              }
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
    [percent]
  )

  return (
    <div className="flex size-full flex-col space-y-4">
      <ReactChart
        className="h-1/2 w-full"
        theme={chartStore.theme}
        option={deviceOption}
      />
      <ReactChart
        className="h-1/2 w-full"
        theme={chartStore.theme}
        option={throughOption}
      />
    </div>
  )
}
