export function LinePersonStatistics() {
  const title = '产线人员'

  const data = [
    { label: '线长', value: 4 },
    { label: '标配人数', value: 12 },
    { label: '实际人数', value: 20 }
  ]

  return (
    <div className="flex size-full flex-col items-center justify-between space-y-2">
      <div className="absolute -top-3 text-xl">{title}</div>
      <div className="grid w-full grid-cols-3 gap-4">
        {data.map((i) => (
          <div
            key={i.label}
            className="col-span-1 space-x-4 text-center text-xl"
          >
            <span>{i.label}:</span>
            <span className="text-xl font-bold">{i.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
