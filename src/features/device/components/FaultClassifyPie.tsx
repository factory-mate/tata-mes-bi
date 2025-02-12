import type { EChartsOption } from 'echarts'

import { faultClassifyQO } from '../queries'
import type { FaultClassifyVo } from '../types'

export function FaultClassifyPie() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(faultClassifyQO())

  const option = useMemo<EChartsOption>(
    () => ({
      textStyle: {
        fontFamily: 'inherit'
      },
      backgroundColor: '',
      title: {
        text: '设备故障分类占比',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
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
          name: '数量',
          label: {
            show: true,
            position: 'outside',
            formatter: (params) => {
              const d = params.data as FaultClassifyVo
              return `${d.cFaultClassName}: ${d.nQuantity} (${d.iRate}%)`
            }
          },
          top: 30,
          encode: {
            itemName: 'cFaultClassName',
            value: 'iRate',
            tooltip: 'nQuantity'
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
