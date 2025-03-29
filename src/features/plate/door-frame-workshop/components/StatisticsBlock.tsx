import { linePersonQO } from '../queries'
import type { LinePersonVo } from '../types'

interface StatisticsBlockProps {
  conditions: string
}

export function StatisticsBlock(props: StatisticsBlockProps) {
  const { conditions } = props

  const templates: Templates<LinePersonVo> = [
    { label: '车间主任', key: 'cDefindParm03' },
    { label: '线长人数', key: 'iManagerCount' },
    { label: '标配工人', key: 'iStandartWokerCount' },
    { label: '实际工人', key: 'iActureWokerCount' },
    { label: '质量担当', key: 'cDefindParm01' },
    { label: '设备担当', key: 'cDefindParm02' }
  ]

  const { data } = useQuery(
    linePersonQO({
      orderByFileds: '',
      conditions
    })
  )

  return (
    <div className="flex size-full items-center justify-between">
      <div />
      {templates.map((i) => (
        <div
          key={i.label}
          className="space-x-4 text-2xl"
        >
          <span>{i.label}:</span>
          <span className="text-2xl font-bold">
            <AnimatedNumber value={data?.[i.key] as number} />
          </span>
        </div>
      ))}
      <div />
    </div>
  )
}
