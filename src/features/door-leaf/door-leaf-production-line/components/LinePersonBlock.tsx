import type { Templates } from '@/shared/types'

import { linePersonQO } from '../queries'
import type { LinePersonVo } from '../types'

export function LinePersonBlock() {
  const title = '产线人员'

  const templates: Templates<LinePersonVo> = [
    { label: '线长', key: 'iManagerCount' },
    { label: '标配人数', key: 'iStandartWokerCount' },
    { label: '实际人数', key: 'iActureWokerCount' }
  ]

  const { data } = useQuery(
    linePersonQO({
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
