import type { EChartsOption } from 'echarts'

import { getRandomValues } from '@/features/random'

export function InternalReturnStatistics() {
  const chartStore = useChartStore()

  const [data, setData] = useState([
    [11, 4, 15, 7, 8, 3],
    [2, 3, 4, 5, 16, 7],
    [13, 2, 11, 1, 9, 8]
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setData([getRandomValues(6, 20), getRandomValues(6, 20), getRandomValues(6, 20)])
    }, 5000)

    return () => clearInterval(timer)
  })

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '内返统计',
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
        right: 0,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      legend: {
        data: ['返工', '维修', '重做'],
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
        name: '数量',
        min: 0,
        max: 20
      },
      series: [
        {
          type: 'bar',
          name: '返工',
          data: data[0],
          label: { show: true, position: 'top' }
        },
        {
          type: 'bar',
          name: '维修',
          data: data[1],
          label: { show: true, position: 'top' }
        },
        {
          type: 'bar',
          name: '重做',
          data: data[2],
          label: { show: true, position: 'top' }
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
