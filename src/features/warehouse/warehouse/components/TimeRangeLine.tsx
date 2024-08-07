import type { EChartsOption } from 'echarts'

import { getRandomValues } from '@/features/random'

export function TimeRangeLine() {
  const chartStore = useChartStore()

  const [data, setData] = useState([
    [88, 90, 92, 89, 99, 87, 90, 91, 95],
    [95, 95, 95, 95, 95, 95, 95, 95, 95],
    [93, 93, 93, 93, 93, 93, 93, 93, 93]
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setData([getRandomValues(9, 100, 80), getRandomValues(9, 100, 80)])
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '时段齐套统计',
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
        right: 40,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      legend: {
        data: ['门数', '单数', '套数'],
        align: 'left',
        top: 0,
        right: 0,
        orient: 'horizontal'
      },
      xAxis: {
        type: 'category',
        name: '小时',
        data: ['1小时', '2小时', '3小时', '4小时', '5小时', '6小时', '7小时', '8小时', '加班'],
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 80,
        max: 100
      },
      series: [
        {
          type: 'line',
          name: '门数',
          data: data[0],
          label: { show: true }
        },
        {
          type: 'line',
          name: '单数',
          data: data[1],
          label: { show: true }
        },
        {
          type: 'line',
          name: '套数',
          data: data[2],
          label: { show: true }
        }
      ]
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
