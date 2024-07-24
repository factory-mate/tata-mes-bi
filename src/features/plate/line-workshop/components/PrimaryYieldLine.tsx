import type { EChartsOption } from 'echarts'

import { getRandomValues } from '@/features/random'

export function PrimaryYieldLine() {
  const chartStore = useChartStore()

  const [data, setData] = useState([
    [88, 90, 92, 89, 99, 87],
    [95, 95, 95, 95, 95, 95]
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setData([getRandomValues(6, 100, 80), getRandomValues(6, 100, 80)])
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
        right: 0,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      legend: {
        data: ['一次良率', '标准良率'],
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
          data: data[0],
          label: { show: true, formatter: '{c}%' }
        },
        {
          type: 'line',
          name: '标准良率',
          data: data[1],
          label: { show: true, formatter: '{c}%' }
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
