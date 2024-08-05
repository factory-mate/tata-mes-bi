export function StatisticsRow() {
  const data = [
    { label: '线长', value: 4 },
    { label: '标配人数', value: 12 },
    { label: '实际人数', value: 20 }
  ]
  return (
    <div className="flex size-full items-center justify-between">
      <div />
      {data.map((i) => (
        <div
          key={i.label}
          className="space-x-4 text-2xl"
        >
          <span>{i.label}:</span>
          <span className="text-2xl font-bold">{i.value}</span>
        </div>
      ))}
      <div />
    </div>
  )
}
