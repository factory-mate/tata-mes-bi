import type { EChartsOption } from 'echarts'

import { packageNumQO } from '../queries'
import type { PackageNumVo } from '../types'

interface PackageNumPieProps {
  conditions: string
}

export function PackageNumPie(props: PackageNumPieProps) {
  const { conditions } = props

  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    packageNumQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions
    })
  )

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: '工位包装数量占比统计',
        left: 'center',
        textStyle: {
          fontSize: 24
        },
        top: 10
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        tooltip: true,
        containLabel: true
      },
      series: [
        {
          type: 'pie',
          name: '百分比',
          label: {
            show: true,
            position: 'outside',
            formatter: (params) => {
              const d = params.data as PackageNumVo
              return `${d.cFactoryUnitName}: ${d.AllCount} (${d.iRate}%)`
            }
          },
          top: 40,
          left: 0,
          right: 0,
          encode: {
            itemName: 'cFactoryUnitName',
            value: 'iRate',
            tooltip: 'AllCount'
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
