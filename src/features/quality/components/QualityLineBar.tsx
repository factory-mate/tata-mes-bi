import type { EChartsOption } from 'echarts'

export function QualityLineBar() {
  const chartStore = useChartStore()

  const generateRandomData = () => {
    const types = [
      '门扇A',
      '门扇B',
      '门扇C',
      '门扇D',
      '门扇E',
      '门扇F',
      '线框门',
      '门套自动线A',
      '门套自动线B',
      '门套自动线C',
      '门套自动线D',
      '门套自动线E',
      '门套自动线F',
      '线A',
      '线B',
      '线C',
      '线D',
      '线E',
      '线F',
      '挂板A',
      '挂板B',
      '挂板C',
      '挂板D',
      '挂板E',
      '挂板F'
    ]
    return types.map((t) => ({
      type: t,
      value: Math.floor(Math.random() * 150),
      noPassValue: Math.floor(Math.random() * 50),
      noPassRatio: `${(Math.random() * 100).toFixed(2)}`
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
        text: '检验分布图',
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
      xAxis: {
        type: 'category',
        name: '',
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: [
        {
          type: 'value',
          name: '数量',
          min: 0,
          max: 150
        },
        {
          type: 'value',
          name: '比例',
          min: 0,
          max: 100
        }
      ],
      series: [
        { type: 'bar', name: '检验数量', label: { show: true, position: 'top' } },
        { type: 'line', name: '不良数量', label: { show: true, position: 'top' } },
        { type: 'line', name: '不良比例', label: { show: true, position: 'top' } }
      ],
      dataset: {
        dimensions: [
          { name: 'type', displayName: '类型' },
          { name: 'value', displayName: '检验数量' },
          { name: 'noPassValue', displayName: '不良数量' },
          { name: 'noPassRatio', displayName: '不良比例' }
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
