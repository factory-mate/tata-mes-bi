import { repairQO } from '../queries'
import type { RepairVo } from '../types'

export function RepairBlock() {
  const title = '今日维修统计'

  const templates: Templates<RepairVo> = [
    { label: '报修数', key: 'AllCount' },
    { label: '完成数', key: 'WCCount' },
    { label: '进行中', key: 'JXZCount' },
    { label: '待维修', key: 'DWXCount' }
  ]

  const { data } = useQuery(repairQO())

  return (
    <div className="flex size-full flex-col items-center justify-center space-y-2">
      <div className="text-2xl">{title}</div>
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-4">
        {templates.map((i) => (
          <div
            key={i.label}
            className="col-span-1 row-span-1 space-x-4 text-center text-xl"
          >
            <span>{i.label}:</span>
            <span className="text-xl font-bold">
              <AnimatedNumber value={data?.[i.key]} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
