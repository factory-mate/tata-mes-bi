export function MaintainStatistics() {
  const title = '保养统计'

  const data = [
    { label: '保养单', value: 4 },
    { label: '已完成', value: 12 },
    { label: '进行中', value: 20 },
    { label: '待保养', value: 12 }
  ]

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
