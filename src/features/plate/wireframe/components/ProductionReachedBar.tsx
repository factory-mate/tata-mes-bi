import type { EChartsOption } from 'echarts'

import { getRandomValues } from '@/features/random'

export function ProductionReachedBar() {
  const chartStore = useChartStore()

  const [data, setData] = useState([
    [400, 440, 415, 500, 420, 440],
    [220, 230, 340, 325, 316, 200]
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setData([getRandomValues(6, 500), getRandomValues(6, 500)])
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
        text: '生产达成统计',
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
        data: ['计划数量', '完成数量'],
        align: 'left',
        top: 0,
        right: 0,
        orient: 'horizontal'
      },
      xAxis: {
        type: 'category',
        name: '工位',
        data: ['工位A', '工位B', '工位C', '工位D', '工位E', '工位F'],
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: '门数',
        min: 0,
        max: 500
      },
      series: [
        {
          type: 'bar',
          name: '计划数量',
          data: data[0],
          label: { show: true, position: 'top' }
        },
        {
          type: 'bar',
          name: '完成数量',
          data: data[1],
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
