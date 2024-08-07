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
              name: '综合效率'
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
    <div className="flex size-full space-x-4">
      <ReactChart
        className="h-full w-1/2"
        theme={chartStore.theme}
        option={deviceOption}
      />
      <div className="flex flex-col items-center justify-center space-y-4 text-2xl">
        <div>抽检包数：120</div>
        <div>合格包数：103</div>
      </div>
    </div>
  )
}
