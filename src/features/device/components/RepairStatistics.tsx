import { useSuspenseQuery } from '@tanstack/react-query'

import { wxtjQO } from '../queries'

export function RepairStatistics() {
  const title = '维修统计'

  // const data = [
  //   { label: '报修数', value: 4 },
  //   { label: '完成数', value: 12 },
  //   { label: '进行中', value: 20 },
  //   { label: '待维修', value: 12 }
  // ]

  const { data } = useSuspenseQuery(wxtjQO())

  console.log(data)

  return (
    <div className="flex size-full flex-col items-center justify-center space-y-2">
      <div className="text-2xl">{title}</div>
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-4">
        {data.map((i) => (
          <div
            key={i.label}
            className="col-span-1 row-span-1 space-x-4 text-center text-xl"
          >
            <span>{i.label}:</span>
            <span className="text-xl font-bold">{i.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
