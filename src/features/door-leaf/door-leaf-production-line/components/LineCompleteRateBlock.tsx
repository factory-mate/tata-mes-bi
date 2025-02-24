import { lineCompleteRateQO } from '../queries'
import type { LineCompleteRateVo } from '../types'

export function LineCompleteRateBlock() {
  const title = '产线达成率'

  const templates: Templates<LineCompleteRateVo> = [
    { label: '任务数量', key: 'AllCount' },
    { label: '完成数', key: 'EndCount' },
    { label: '达成率', key: 'iRate' }
  ]

  const { data } = useQuery(
    lineCompleteRateQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode = FM01010101'
    })
  )

  return (
    <div className="flex size-full flex-col items-center justify-between space-y-2">
      <div className="absolute -top-3 text-xl">{title}</div>
      <div className="grid size-full grid-cols-3 gap-4">
        {templates.map((i) => (
          <div
            key={i.label}
            className="col-span-1 flex items-center justify-center space-x-4 text-center text-xl"
          >
            <span>{i.label}:</span>
            <span className="text-xl font-bold">{data?.[i.key]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
