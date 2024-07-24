import type { EChartsOption } from 'echarts'

type Status = '运行' | '空闲' | '故障'

interface GaugeItemProps {
  label: string
  status: Status
  className?: string
}

const statusColorMap = new Map<Status, string>([
  ['运行', '#00FF00'],
  ['空闲', '#FFA500'],
  ['故障', '#FF0000']
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
            borderWidth: 1
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
          fontSize: 14,
          offsetCenter: ['0%', '0%']
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

export function DeviceStatusGauge() {
  const data: GaugeItemProps[] = [
    {
      label: '磁吸机',
      status: '运行'
    },
    {
      label: '开锁机',
      status: '运行'
    },
    {
      label: '雕刻机',
      status: '运行'
    },
    {
      label: '四面据',
      status: '运行'
    },
    {
      label: '秋林压机',
      status: '故障'
    },
    {
      label: '封边机',
      status: '空闲'
    }
  ]
  return (
    <div className="flex size-full flex-col items-center space-y-2">
      <div className="text-lg font-bold">设备运行状态</div>
      <div className="grid w-full grow grid-cols-3 grid-rows-2 gap-4">
        {data.map((i) => (
          <GaugeItem
            key={i.label}
            label={i.label}
            status={i.status}
            className="col-span-1 row-span-1"
          />
        ))}
      </div>
    </div>
  )
}
