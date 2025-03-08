import { checkQO } from '../queries'
import type { CheckVo } from '../types'

export function CheckBlock() {
  const title = '今日点检统计'

  const templates: Templates<CheckVo> = [
    { label: '点检单', key: 'AllCount' },
    { label: '已完成', key: 'WCCount' },
    { label: '进行中', key: 'JXZCount' },
    { label: '待点检', key: 'DDJCount' }
  ]

  const { data } = useQuery(checkQO())

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
