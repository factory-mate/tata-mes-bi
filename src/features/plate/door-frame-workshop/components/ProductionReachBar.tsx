import type { EChartsOption } from 'echarts'

import { productionReachQO } from '../queries'

interface ProductionReachBarProps {
  orderByFileds: string
  conditions: string
}

export function ProductionReachBar(props: ProductionReachBarProps) {
  const { orderByFileds, conditions } = props

  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    productionReachQO({
      orderByFileds,
      conditions
    })
  )

  const option = useMemo<EChartsOption>(() => {
    const planData = data.filter((i) => i.iType === 1)
    const actualData = data.filter((i) => i.iType === 2)

    const transformedData = planData.map((i) => {
      const item = actualData.find((j) => j.cProcessCode === i.cProcessCode)
      return {
        ...i,
        actualCount: item ? item.AllCount : 0
      }
    })

    return {
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: '生产达成统计',
        left: 'center',
        textStyle: {
          fontSize: 24
        },
        top: 10
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        left: 0,
        right: 60,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '工段',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 16,
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 5000
      },
      series: [
        {
          type: 'bar',
          label: { show: true, position: 'top' },
          encode: { x: 'cProcessName', y: 'AllCount' }
        },
        {
          type: 'bar',
          label: { show: true, position: 'top' },
          encode: { x: 'cProcessName', y: 'actualCount' }
        }
      ],
      dataset: {
        source: transformedData
      }
    }
  }, [data])

  return (
    <ReactChart
      className="size-full"
      theme={chartStore.theme}
      option={option}
    />
  )
}
