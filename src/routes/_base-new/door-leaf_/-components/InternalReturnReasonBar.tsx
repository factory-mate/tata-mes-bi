import type { EChartsOption } from 'echarts'

import { internalReturnReasonQO } from '@/features/door-leaf/door-leaf-package'

export default function InternalReturnReasonBar() {
  const chartStore = useChartStore()

  const { data = [] } = useQuery(
    internalReturnReasonQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode = FM01010401'
    })
  )

  const option: EChartsOption = useMemo(
    () => ({
      textStyle: {
        fontFamily: 'inherit',
        fontSize: 16
      },
      backgroundColor: '',
      title: {
        text: '内返原因统计 TOP5',
        top: 6,
        left: 30,
        textStyle: {
          fontSize: 18
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        left: 5,
        right: 80,
        bottom: 10,
        top: 85,
        tooltip: true,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '内返类型',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 16,
          interval: 0,
          width: 60,
          overflow: 'break'
        }
      },
      yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          fontSize: 16
        }
      },
      series: [
        {
          type: 'bar',
          name: '数量',
          encode: {
            x: 'cRepairReasonTypeName',
            y: 'nQuantity'
          },
          label: {
            show: true,
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
      className="absolute size-full"
      style={{
        top: '36.5%',
        left: '1.8%',
        width: '25.9%',
        height: '26.5%'
      }}
      theme={chartStore.theme}
      option={option}
    />
  )
}
