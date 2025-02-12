import type { EChartsOption } from 'echarts'

import { internalReturnReasonQO } from '../queries'

export function InternalReturnReasonBar() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    internalReturnReasonQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode like FM0105'
    })
  )

  const generateRandomData = () => {
    const lines = ['工段 A', '工段 B', '工段 C', '工段 D', '工段 E']
    return lines.map((line) => ({
      line,
      gb: Math.floor(Math.random() * 150),
      hh: Math.floor(Math.random() * 150),
      bl: Math.floor(Math.random() * 150),
      cd: Math.floor(Math.random() * 150),
      kl: Math.floor(Math.random() * 150)
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
        text: '内返原因统计 TOP5',
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
        name: '工段',
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
        { type: 'bar', label: { show: true, position: 'top' } },
        { type: 'bar', label: { show: true, position: 'top' } }
      ],
      dataset: {
        dimensions: [
          { name: 'line', displayName: '工段' },
          { name: 'gb', displayName: '鼓包' },
          { name: 'hh', displayName: '划痕' },
          { name: 'bl', displayName: '断裂' },
          { name: 'cd', displayName: '尺寸' },
          { name: 'kl', displayName: '颗粒' }
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
