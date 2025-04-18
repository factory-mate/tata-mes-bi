import { linePersonQO } from '../queries'
import type { LinePersonVo } from '../types'

interface LinePersonBlockProps {
  conditions: string
}

export function LinePersonBlock(props: LinePersonBlockProps) {
  const { conditions } = props

  const templates: Templates<LinePersonVo> = [
    { label: '线长', key: 'iManagerCount' },
    { label: '标配人数', key: 'iStandartWokerCount' },
    { label: '实际人数', key: 'iActureWokerCount' }
  ]

  const { data } = useQuery(
    linePersonQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions
    })
  )

  return (
    <div className="flex size-full flex-col items-center justify-between space-y-2">
      <div className="grid size-full grid-cols-3 gap-4">
        {templates.map((i) => (
          <div
            key={i.label}
            className="col-span-1 flex items-center justify-center space-x-4 text-center text-2xl"
          >
            <span>{i.label}:</span>
            <span className="text-2xl font-bold">
              <AnimatedNumber value={data?.[i.key] as number} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
