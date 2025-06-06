import { lineCompleteRateQO } from '../queries'
import type { LineCompleteRateVo } from '../types'

interface LineCompleteRateBlockProps {
  cFactoryUnitCode: string
}

export function LineCompleteRateBlock(props: LineCompleteRateBlockProps) {
  const { cFactoryUnitCode } = props

  const templates: Templates<LineCompleteRateVo> = [
    { label: '任务数量', key: 'AllCount' },
    { label: '完成数', key: 'EndCount' },
    { label: '达成率', key: 'iRate' }
  ]

  const { data } = useQuery(
    lineCompleteRateQO({
      cFactoryUnitCode
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
              {i.key === 'iRate' ? (
                <>
                  <AnimatedNumber value={data?.[i.key] as number} />%
                </>
              ) : (
                <AnimatedNumber value={data?.[i.key] as number} />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
