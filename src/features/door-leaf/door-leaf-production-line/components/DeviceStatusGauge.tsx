import type { EChartsOption } from 'echarts'

import { deviceRunningStatusQO } from '../queries'
import { DeviceStatus } from '../types'

interface GaugeItemProps {
  label: string
  status: DeviceStatus
  className?: string
}

const statusColorMap = new Map<DeviceStatus, string>([
  [DeviceStatus.SUCCESS, '#00FF00'],
  [DeviceStatus.WARNING, '#FFA500'],
  [DeviceStatus.ERROR, '#FF0000']
])

function GaugeItem(props: GaugeItemProps) {
  const { label, status, className } = props

  const chartStore = useChartStore()

  const color = statusColorMap.get(status)

  const option: EChartsOption = {
    textStyle: {
      fontFamily: 'inherit'
    },
    backgroundColor: '',
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      tooltip: true,
      containLabel: true
    },
    tooltip: {
      show: true,
      valueFormatter: (value) => `${value}%`
    },
    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        radius: '100%',
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            opacity: 0.7
          }
        },
        axisLine: {
          lineStyle: {
            width: 8
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: [
          {
            value: 100,
            name: label,
            itemStyle: {
              color
            }
          }
        ],
        title: {
          fontSize: 20,
          offsetCenter: ['0%', '0%'],
          show: false
        },
        detail: {
          show: false
        }
      }
    ]
  }

  return (
    <ReactChart
      className={className}
      theme={chartStore.theme}
      option={option}
    />
  )
}

interface DeviceStatusGaugeProps {
  conditions: string
}

export function DeviceStatusGauge(props: DeviceStatusGaugeProps) {
  const { conditions } = props

  const { data: { data = [] } = {} } = useQuery(
    deviceRunningStatusQO({
      pageIndex: 1,
      pageSize: 10000,
      orderByFileds: 'cResourceCode',
      conditions
    })
  )

  const { currentSlicedData } = useSlicedData({ data, xAxisSize: 6 })

  return (
    <div className="flex size-full flex-col items-center space-y-2">
      <div className="text-2xl font-bold">设备运行状态</div>
      <div className="grid w-full grow grid-cols-3 grid-rows-2 gap-4">
        {currentSlicedData.map((i) => (
          <div
            key={i.cDeviceName}
            className="relative col-span-1 row-span-1"
          >
            <GaugeItem
              label={i.cDeviceName}
              status={i.iStatus}
              className="size-full"
            />
            <div className="absolute inset-0 m-auto h-fit text-center text-xl">{i.cDeviceName}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
