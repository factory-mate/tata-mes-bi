import { useSuspenseQuery } from '@tanstack/react-query'

import type { Templates } from '@/shared/types'

import { wxtjQO } from '../queries'
import type { WXTJVo } from '../types'

export function RepairStatistics() {
  const title = '维修统计'

  const templates: Templates<WXTJVo> = [
    { label: '报修数', key: 'AllCount' },
    { label: '完成数', key: 'WCCount' },
    { label: '进行中', key: 'JXZCount' },
    { label: '待维修', key: 'DWXCount' }
  ]

  const { data } = useSuspenseQuery(wxtjQO())

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
            <span className="text-xl font-bold">{data[i.key]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
