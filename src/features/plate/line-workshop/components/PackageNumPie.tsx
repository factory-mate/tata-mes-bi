import type { EChartsOption } from 'echarts'

import { packageNumQO } from '../queries'
import type { PackageNumVo } from '../types'

export function PackageNumPie() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    packageNumQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cProcessCode = GX0108'
    })
  )

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '工位包装数量占比统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: 0,
        top: 0,
        data: data.map((i) => i.cFactoryUnitName)
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
            position: 'inner',
            formatter: (params) => {
              const d = params.data as PackageNumVo
              return `${d.cFactoryUnitName}: ${d.AllCount} (${d.iRate}%)`
            }
          },
          top: 10,
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
