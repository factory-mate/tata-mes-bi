import type { LinePersonVo } from '@/features/door-leaf/door-leaf-package'
import { linePersonQO } from '@/features/door-leaf/door-leaf-package'

export default function StatisticsArea() {
  const templates: Templates<LinePersonVo> = [
    { label: '线长人数', key: 'iManagerCount', top: '11%', left: '37%' },
    { label: '标配人数', key: 'iStandartWokerCount', top: '11%', left: '51%' },
    { label: '实际出勤', key: 'iActureWokerCount', top: '11%', left: '65%' }
  ]

  const { data } = useQuery(
    linePersonQO({
      orderByFileds: '',
      conditions: 'cKBType = 13'
    })
  )

  return (
    <>
      {templates.map((i) => (
        <div
          key={i.label}
          className="absolute flex flex-col items-center justify-center space-y-2 text-center text-2xl"
          style={{ left: i.left, top: i.top }}
        >
          <span className="text-sm">{i.label}:</span>
          <span className="text-3xl font-bold">
            <AnimatedNumber value={data?.[i.key] as number} />
          </span>
        </div>
      ))}
    </>
  )
}
