import type { EChartsOption } from 'echarts'

import { primaryYieldQO } from '../queries'
import type { PrimaryYieldVo } from '../types'

interface PrimaryYieldLineProps {
  conditions: string
}

export function PrimaryYieldLine(props: PrimaryYieldLineProps) {
  const { conditions } = props

  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    primaryYieldQO({
      orderByFileds: 'cProcessCode',
      conditions
    })
  )

  const option: EChartsOption = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: '一次良率统计',
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
        },
        formatter: (params: any) => {
          const d = params.at(0).data as PrimaryYieldVo
          return `${d.cFactoryUnitName}: ${Number(d.iRate).toFixed(0)}%`
        }
      },
      grid: {
        left: 5,
        right: 80,
        bottom: 10,
        tooltip: true,
        containLabel: true
      },
      // legend: {
      //   data: ['一次良率', '标准良率'],
      //   align: 'left',
      //   top: 0,
      //   right: 0,
      //   orient: 'horizontal'
      // },
      xAxis: {
        type: 'category',
        name: '产线',
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: '百分比',
        min: 0,
        max: 100,
        axisLabel: {
          fontSize: 16,
          interval: 0,
          width: 60,
          overflow: 'break'
        }
      },
      series: [
        {
          type: 'bar',
          name: '一次良率',
          encode: { x: 'cFactoryUnitName', y: 'iRate' },
          label: {
            show: true,
            formatter: (params) => {
              const d = params.data as PrimaryYieldVo
              return `${Number(d.iRate).toFixed(0)}%`
            },
            position: 'top'
          }
        }
      ],
      dataset: {
        source: data
      }
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
