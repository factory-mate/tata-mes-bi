export function LineCompeleteRateStatistics() {
  const data = [
    { label: '任务数量', value: 1800 },
    { label: '完成数', value: 1500 },
    { label: '达成率', value: '80%' }
  ]

  return (
    <div className="flex size-full flex-col items-center justify-between space-y-2">
      <div className="grid size-full grid-cols-3 gap-4">
        {data.map((i) => (
          <div
            key={i.label}
            className="col-span-1 flex items-center justify-center space-x-4 text-center text-2xl"
          >
            <span>{i.label}:</span>
            <span className="text-xl font-bold">{i.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
