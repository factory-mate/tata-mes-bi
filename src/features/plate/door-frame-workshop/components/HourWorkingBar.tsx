import type { EChartsOption } from 'echarts'

import { hourWorkingQO } from '../queries'

export function HourWorkingBar() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    hourWorkingQO({
      orderByFileds: 'GDCode',
      conditions: 'GDCode in (FM010401,FM010404,FM010405,FM010406,FM010407,FM010409)'
    })
  )

  const generateRandomData = () => {
    const hours = ['1小时', '2小时', '3小时', '4小时', '5小时', '6小时', '7小时', '8小时', '加班']
    return hours.map((hour) => ({
      hour,
      a: Math.floor(Math.random() * 150),
      b: Math.floor(Math.random() * 150),
      c: Math.floor(Math.random() * 150),
      d: Math.floor(Math.random() * 150)
    }))
  }

  const [source, setSource] = useState(generateRandomData())

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '工段小时加工量统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        align: 'left',
        top: 0,
        right: 0,
        orient: 'vertical'
      },
      grid: {
        left: 0,
        right: 70,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '小时',
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 150
      },
      series: [
        { type: 'bar', label: { show: true, position: 'top' } },
        { type: 'bar', label: { show: true, position: 'top' } },
        { type: 'bar', label: { show: true, position: 'top' } },
        { type: 'bar', label: { show: true, position: 'top' } }
      ],
      dataset: {
        dimensions: [
          { name: 'hour', displayName: '小时' },
          { name: 'a', displayName: '工段 A' },
          { name: 'b', displayName: '工段 B' },
          { name: 'c', displayName: '工段 C' },
          { name: 'd', displayName: '工段 D' }
        ],
        source
      }
    }),
    [source]
  )

  return (
    <ReactChart
      className="size-full"
      theme={chartStore.theme}
      option={option}
    />
  )
}
