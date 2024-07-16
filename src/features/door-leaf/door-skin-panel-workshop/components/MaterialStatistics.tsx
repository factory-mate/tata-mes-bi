import type { EChartsOption } from 'echarts'

import { getRandomValues } from '@/features/random'

export function MaterialStatistics() {
  const chartStore = useChartStore()

  const [data, setData] = useState([
    [120, 140, 115, 100, 120, 140, 130, 140, 115, 100, 120, 140],
    [50, 60, 70, 80, 90, 100, 50, 60, 70, 80, 90, 100]
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setData([getRandomValues(12, 150), getRandomValues(12, 150)])
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
        right: 10,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      legend: {
        data: ['计划数量', '配送数量'],
        align: 'left',
        top: 0,
        right: 0,
        orient: 'horizontal'
      },
      xAxis: { type: 'value', name: '数量', min: 0, max: 150 },
      yAxis: {
        type: 'category',
        name: '物料',
        data: [
          '物料 A',
          '物料 B',
          '物料 C',
          '物料 D',
          '物料 E',
          '物料 F',
          '物料 G',
          '物料 H',
          '物料 I',
          '物料 J',
          '物料 K',
          '物料 L'
        ],
        axisTick: {
          alignWithLabel: true
        }
      },
      series: [
        {
          type: 'bar',
          name: '计划数量',
          data: data[0],
          label: { show: true, position: 'right' }
        },
        {
          type: 'bar',
          name: '配送数量',
          data: data[1],
          label: { show: true, position: 'right' }
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
